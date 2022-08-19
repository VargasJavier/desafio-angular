import { Component } from '@angular/core';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profesores: any[] = [];
  cursosSuscripcion: any[] = [];

  constructor(private rxjsService: RxjsService) {
    this.rxjsService
      .obtenerPromiseProfesores()
      .then((profesores) => {
        console.log(profesores);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnDestroy(): void {
    console.log('Ejecutando ngOnDestroy');
  }
}
