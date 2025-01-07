import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Student } from '../../models';
import { StudentsListComponent } from '../../components/students-list/students-list.component';

@Component({
  selector: 'app-student-page',
  standalone: false,

  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss',
})
export class StudentPageComponent implements AfterViewInit {
  debeMostrarModal = false;

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

  @ViewChild('tituloAprobados') tituloAprobados?: ElementRef<HTMLElement>;
  @ViewChild(StudentsListComponent)
  studentsListComponent?: StudentsListComponent;

  constructor() {
    console.log(this.tituloAprobados);
  }

  ngAfterViewInit(): void {
    console.log(this.tituloAprobados);
    console.log(this.studentsListComponent);
  }

  onRemove(
    idDelEstudianteAEliminar: number,
    from: 'studentsApproved' | 'studentsDesaprobados'
  ): void {
    console.log('Debo eliminar el id', idDelEstudianteAEliminar, 'De', from);
    this[from] = this[from].filter((el) => el.id !== idDelEstudianteAEliminar);
  }
}
