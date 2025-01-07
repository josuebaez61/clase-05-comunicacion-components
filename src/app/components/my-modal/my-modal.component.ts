import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  standalone: false,

  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss',
})
export class MyModalComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
}
