import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface Student {
  comision: number;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
  plataforma: string;
  nacimiento: Date;
  nacionalidad: string;
  celular: string;
  promedio: number;
}
const ELEMENT_DATA: Student[] = [
  {
    comision: 34561,
    nombre: 'Javier',
    apellido: 'Vargas',
    email: 'jabo94454@gmail.com',
    curso: 'Programación Básica',
    plataforma: 'Platzi',
    nacimiento: new Date(1995, 1, 13),
    nacionalidad: 'Perú',
    celular: '923200599',
    promedio: 5,
  },
  {
    comision: 37521,
    nombre: 'Alejandro',
    apellido: 'Mexico',
    email: 'ale123@gmail.com',
    curso: 'React JS',
    plataforma: 'Coderhouse',
    nacimiento: new Date(2001, 1, 13),
    nacionalidad: 'Colombia',
    celular: '980501121',
    promedio: 10,
  },
  {
    comision: 39421,
    nombre: 'María',
    apellido: 'Gallegos',
    email: 'mariaga05@gmail.com',
    curso: 'Inglés',
    plataforma: 'ICPNA',
    nacimiento: new Date(2004, 5, 5),
    nacionalidad: 'Argentina',
    celular: '993702639',
    promedio: 10,
  },
  {
    comision: 37841,
    nombre: 'Eddy',
    apellido: 'Torres',
    email: 'eddymartir@gmail.com',
    curso: 'Matemática',
    plataforma: 'UNI',
    nacimiento: new Date(1990, 8, 19),
    nacionalidad: 'México',
    celular: '950364368',
    promedio: 6,
  },
  {
    comision: 34721,
    nombre: 'Milagros',
    apellido: 'Ramos',
    email: 'milagrituz@gmail.com',
    curso: 'Obstetricia',
    plataforma: 'UCSUR',
    nacimiento: new Date(2001, 6, 12),
    nacionalidad: 'Chile',
    celular: '992654789',
    promedio: 8,
  },
  {
    comision: 38722,
    nombre: 'Angela',
    apellido: 'Calderon',
    email: 'agcalderon@gmail.com',
    curso: 'Medicina',
    plataforma: 'UPN',
    nacimiento: new Date(2001, 6, 12),
    nacionalidad: 'Brasil',
    celular: '959346824',
    promedio: 10,
  },
  {
    comision: 45328,
    nombre: 'Martin',
    apellido: 'Marquez',
    email: 'mmarquez@gmail.com',
    curso: 'Ingeniería Civil',
    plataforma: 'UCV',
    nacimiento: new Date(2001, 11, 15),
    nacionalidad: 'España',
    celular: '974365824',
    promedio: 8,
  },
];
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  columnas: string[] = [
    'comision',
    'nombre',
    'email',
    'curso',
    'plataforma',
    'celular',
    'nacionalidad',
    'acciones',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(
    ELEMENT_DATA
  );
  @ViewChild(MatTable) tabla!: MatTable<Student>;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  eliminar(elemento: Student) {
    this.dataSource.data = this.dataSource.data.filter(
      (student: Student) => student.comision != elemento.comision
    );
  }

  editar(elemento: Student) {
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '400px',
      data: elemento,
    });
    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        const item = this.dataSource.data.find(
          (student) => student.comision === resultado.comision
        );
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    });
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  addStudent() {
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '400px',
      data: { comision: '' },
    });
    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
      }
    });
  }
}
