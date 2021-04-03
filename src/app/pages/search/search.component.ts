import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Bilboard } from '../../interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public search: string = "";
  public movies: Bilboard[];
  public loading: boolean = false;

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

  public searchMovie(): void {
    if (this.search.length === 0) {
      return;
    }

    this.loading = true;
    this.moviesService.getSearchMovie(this.search)
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.movies = response;
        this.loading = false;
      });
  }

  public showMovie(id: number): void {
    this.router.navigate(['/movie', id, 'search', this.search]);
  }
}
