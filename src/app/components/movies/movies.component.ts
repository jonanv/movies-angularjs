import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Bilboard } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  movies: Bilboard[] = [];
  loading: boolean = false;

  constructor(
    private moviesService: MoviesService
  ) {
    this.getPopular();
  }

  ngOnInit(): void {
  }

  getPopular() {
    this.loading = true;
    this.moviesService.getPopular()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.movies = response;
        console.log(response);
        this.loading = false;
      });
  }

}
