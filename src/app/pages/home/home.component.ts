import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Bilboard } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  bilboard: Bilboard[];
  populars: Bilboard[];
  popularsChildren: Bilboard[];
  loading: boolean = false;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getBillboard();
    this.getPopular();
    this.getPopularChildren();
  }

  private getBillboard(): void {
    this.loading = true;
    this.moviesService.getBillboard()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.bilboard = response;
        this.loading = false;
      });
  }

  private getPopular(): void {
    this.loading = true;
    this.moviesService.getPopular()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.populars = response;
        this.loading = false;
      });
  }

  private getPopularChildren(): void {
    this.loading = true;
    this.moviesService.getPopularClildren()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.popularsChildren = response;
        this.loading = false;
      });
  }

}
