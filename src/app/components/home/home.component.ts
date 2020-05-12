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

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getBillboard();
  }

  getBillboard() {
    this.moviesService.getBillboard()
      .pipe(first())
      .subscribe((response: Movie[]) => {
        this.bilboard = response;
        console.log(response);
      });
  }

}
