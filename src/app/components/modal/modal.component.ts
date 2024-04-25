import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
 
  @Input() title: string="";
  @Input() message: string="";
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmMeEvent = new EventEmitter();

  closeMe(){
    this.closeMeEvent.emit();
  }

  confirmMe(){
    this.confirmMeEvent.emit();
  }


}
