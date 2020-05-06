import { Component } from '@angular/core';

import { MoviesService } from './services/movies.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-angularjs';

  constructor(
    private moviesService: MoviesService
  ) {
    this.getPopular();
  }

  getPopular() {
    this.moviesService.getPopular()
      .pipe(first())
      .subscribe(response => {
        console.log(response);
      });
  }
}
