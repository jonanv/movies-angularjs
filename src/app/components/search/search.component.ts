import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Movie } from '../../interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  search: string = "";
  movies: Movie[];

  constructor(
    public moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        if(response['text']) {
          this.search = response['text'];
          this.searchMovie();
        }
      });
  }

  ngOnInit(): void {
  }

  searchMovie() {
    if (this.search.length === 0) {
      return;
    }

    this.moviesService.getSearchMovie(this.search)
      .pipe(first())
      .subscribe(response => {
        this.movies = response;
      });
  }

  showMovie(id: number) {
    console.log(id);
    // this.router.navigate(['/movie', id]);
  }
}
