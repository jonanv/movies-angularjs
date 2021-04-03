import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { GaleryComponent } from './galery/galery.component';

// Pipes
import { NoImagePipe } from '../pipes/no-image.pipe';

@NgModule({
  declarations: [
    NoImagePipe,
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NoImagePipe,
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
  ]
})
export class ComponentsModule { }
