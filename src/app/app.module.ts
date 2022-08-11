import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ItemComponent } from './components/item/item.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app.material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransformarPipe } from './pipes/transformar.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { FormatNamePipe } from './pipes/format-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemComponent,
    MenuComponent,
    ItemListComponent,
    StudentListComponent,
    EditarDialogComponent,
    TransformarPipe,
    FormatNumberPipe,
    FormatNamePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
