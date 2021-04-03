import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

// Pipes
import { NoImagePipe } from '../pipes/no-image.pipe';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { GaleryComponent } from './galery/galery.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';

@NgModule({
  declarations: [
    NoImagePipe,
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ],
  exports: [
    NoImagePipe,
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ]
})
export class ComponentsModule { }
