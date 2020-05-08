import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getBillboard();
  }

  getBillboard() {
    this.moviesService.getBillboad()
      .pipe(first())
      .subscribe(response => {
        console.log(response);
      });
  }

}
