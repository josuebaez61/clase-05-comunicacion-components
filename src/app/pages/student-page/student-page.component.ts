import { Component } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-page',
  standalone: false,

  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss',
})
export class StudentPageComponent {
  studentsApproved: Student[] = [
    {
      id: 1,
      name: 'Maria',
    },
    {
      id: 2,
      name: 'Leon',
    },
    {
      id: 3,
      name: 'Juana',
    },
  ];

  studentsDesaprobados: Student[] = [
    {
      id: 5,
      name: 'Marcos',
    },
    {
      id: 7,
      name: 'Pablo',
    },
  ];

  onRemove(
    idDelEstudianteAEliminar: number,
    from: 'studentsApproved' | 'studentsDesaprobados'
  ): void {
    console.log('Debo eliminar el id', idDelEstudianteAEliminar, 'De', from);
    this[from] = this[from].filter((el) => el.id !== idDelEstudianteAEliminar);
  }
}
