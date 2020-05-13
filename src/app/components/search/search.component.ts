import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Movie } from '../../interfaces/movie.interface';

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
    public moviesService: MoviesService
  ) { }

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
}
