import { Component, OnInit } from '@angular/core';

import { CompleteMovie } from '../../interfaces/movie.interface';
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
  page: string;
  movie: CompleteMovie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        this.id = response['id'];
        this.page = response['page'];
        this.loadMovie();
        console.log(response);
      });
  }

  ngOnInit(): void {
  }

  loadMovie() {
    this.moviesService.getMovie(this.id)
      .pipe(first())
      .subscribe((response: CompleteMovie) => {
        console.log(response);
        this.movie = response;
      });
  }

}
