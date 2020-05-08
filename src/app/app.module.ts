import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

// Pipes
import { NoImagePipe } from './pipes/no-image.pipe';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { MoviesComponent } from './componets/movies/movies.component';
import { MovieComponent } from './componets/movie/movie.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { SearchComponent } from './componets/search/search.component';
import { LoadingComponent } from './componets/loading/loading.component';


@NgModule({
  declarations: [
    NoImagePipe,
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    NavbarComponent,
    SearchComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
