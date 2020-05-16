import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  bilboard: Movie[];
  populars: Movie[];
  popularsChildren: Movie[];
  loading: boolean;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getBillboard();
    this.getPopular();
    this.getPopularChildren();
  }

  getBillboard() {
    this.loading = true;
    this.moviesService.getBillboard()
      .pipe(first())
      .subscribe((response: Movie[]) => {
        this.bilboard = response;
        this.loading = false;
      });
  }

  getPopular() {
    this.loading = true;
    this.moviesService.getPopular()
      .pipe(first())
      .subscribe((response: Movie[]) => {
        this.populars = response;
        this.loading = false;
      });
  }

  getPopularChildren() {
    this.loading = true;
    this.moviesService.getPopularClildren()
      .pipe(first())
      .subscribe((response: Movie[]) => {
        this.popularsChildren = response;
        this.loading = false;
      });
  }

}
