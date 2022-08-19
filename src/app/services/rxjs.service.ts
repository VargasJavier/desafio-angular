import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  profesores: any[] = [];
  cursos: any[] = [];

  constructor() {}

  obtenerPromiseProfesores() {
    return new Promise((resolve, reject) => {
      if (this.profesores.length > 0) {
        resolve(this.profesores);
      } else {
        reject(console.log('Hubo un error'));
      }
    });
  }
}
