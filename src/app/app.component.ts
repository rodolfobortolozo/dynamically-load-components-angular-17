import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dCompCont!: ViewContainerRef;

  constructor(private modalService: ModalService){}

  getModal(){
    this.modalService.createComponent(this.dCompCont,"Titulo", "Mensagem").subscribe(
      (res) => alert("Botão Confirmar clicado")
    );
  }

}
