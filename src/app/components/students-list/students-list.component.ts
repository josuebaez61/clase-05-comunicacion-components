import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students-list',
  standalone: false,

  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  @Input({ required: true }) students!: Student[];

  @Output() remove = new EventEmitter();
}
