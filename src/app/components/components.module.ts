import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { GaleryComponent } from './galery/galery.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    LoadingComponent,
    GaleryComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ]
})
export class ComponentsModule { }
