import { Component, OnInit } from '@angular/core';

interface Student {
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
  plataforma: string;
  nacimiento: Date;
  promedio: number;
}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [
    {
      nombre: 'Javier',
      apellido: 'Vargas',
      email: 'jabo94454@gmail.com',
      curso: 'Programación Básica',
      plataforma: 'Platzi',
      nacimiento: new Date(1995, 1, 13),
      promedio: 5,
    },
    {
      nombre: 'Alejandro',
      apellido: 'Mexico',
      email: 'ale123@gmail.com',
      curso: 'React JS',
      plataforma: 'Coderhouse',
      nacimiento: new Date(2001, 1, 13),
      promedio: 10,
    },
    {
      nombre: 'Antonella',
      apellido: 'Bólivar',
      email: 'antonellabp05@gmail.com',
      curso: 'Inglés',
      plataforma: 'ICPNA',
      nacimiento: new Date(2004, 6, 5),
      promedio: 10,
    },
    {
      nombre: 'Eddy',
      apellido: 'Torre',
      email: 'eddymartir@gmail.com',
      curso: 'Matemática',
      plataforma: 'UNI',
      nacimiento: new Date(1990, 8, 19),
      promedio: 6,
    },
    {
      nombre: 'Milagros',
      apellido: 'Ramos',
      email: 'milagrituz@gmail.com',
      curso: 'Obstetricia',
      plataforma: 'UCSUR',
      nacimiento: new Date(2001, 6, 12),
      promedio: 4,
    },
  ];

  promedio: number =
    this.students.reduce((a, e) => a + e.promedio, 0) / this.students.length;

  constructor() {}

  ngOnInit(): void {}
}
