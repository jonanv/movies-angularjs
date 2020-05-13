import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  search: string = "";

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
        console.log(response);
      });
  }
}
