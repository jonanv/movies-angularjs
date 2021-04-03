import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { RouterModule } from '@angular/router';

// Pipes
import { NoImagePipe } from '../pipes/no-image.pipe';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { GaleryComponent } from './galery/galery.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    NoImagePipe,
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
    SlideshowComponent
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
    SlideshowComponent
  ]
})
export class ComponentsModule { }
