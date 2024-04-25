import {
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentRef!: ComponentRef<ModalComponent>;
  private componentSubscriber!: Subject<string>;

  constructor(private injector: Injector) {}

  createComponent(viewContainerRef: ViewContainerRef, title: string, message: string) {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.componentRef = viewContainerRef.createComponent(ModalComponent, {
      injector: this.injector,
    });
    this.componentRef.instance.title = title;
    this.componentRef.instance.message = message;
    this.componentRef.instance.closeMeEvent.subscribe(() => this.destroy());
    this.componentRef.instance.confirmMeEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
    
  }

  destroy() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm(){
    this.componentSubscriber.next('Confirm');
    this.destroy();
  }

}
