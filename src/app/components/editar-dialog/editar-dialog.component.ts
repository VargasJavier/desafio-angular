import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../student-list/student-list.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css'],
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.formulario = fb.group({
      comision: new FormControl(data.comision),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      curso: new FormControl(data.curso),
      plataforma: new FormControl(data.plataforma),
      celular: new FormControl(data.celular),
      nacionalidad: new FormControl(data.nacionalidad),
    });
  }

  ngOnInit(): void {}

  cerrar() {
    this.dialogRef.close();
  }
  actualizar() {
    this.dialogRef.close(this.formulario.value);
  }
}
