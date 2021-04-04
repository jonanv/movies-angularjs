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

  private id: number;
  public page: string;
  public search: string;
  public movie: Movie;
  public loading: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        this.id = response['id'];
        this.page = response['page'];

        if(response['search']) {
          this.search = response['search'];
        }

        this.loadMovie();
        // console.log(response);
      });
  }

  ngOnInit(): void {
  }

  private loadMovie(): void {
    this.loading = true;
    this.moviesService.getMovie(this.id)
      .pipe(first())
      .subscribe((response: Movie) => {
        // console.log(response);
        this.movie = response;
        this.loading = false;
      });
  }

}
