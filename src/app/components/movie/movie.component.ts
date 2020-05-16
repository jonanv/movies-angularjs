import { Component, OnInit } from '@angular/core';

import { CompleteMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  search: string;
  movie: CompleteMovie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        this.id = response['id'];
        this.page = response['page'];

        if(response['search']) {
          this.search = response['search'];
        }

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

  returnPage() {
    this.router.navigate(['/'+ this.page, this.search]);
  }

}
