import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modules
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

// Components
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    SearchComponent
  ]
})
export class PagesModule { }
