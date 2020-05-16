import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  id: number;
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        this.id = response['id'];
        console.log(response);
        this.loadMovie();
      });
  }

  ngOnInit(): void {
  }

  loadMovie() {
    this.moviesService.getMovie(this.id)
      .pipe(first())
      .subscribe((response: Movie) => {
        console.log(response);
        this.movie = response;
      });
  }

}
