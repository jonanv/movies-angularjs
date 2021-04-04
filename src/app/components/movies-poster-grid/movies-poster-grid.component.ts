import { Component, Input, OnInit } from '@angular/core';

// Imports
import { Bilboard } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styles: [
  ]
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() public movies: Bilboard[];

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  public onMovieClick(id: number) {
    this.router.navigate(['/movie', id, 'home']);
  }

}
