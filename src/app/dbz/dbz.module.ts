import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AgregarPersonajeComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]  
})
export class DbzModule {}
