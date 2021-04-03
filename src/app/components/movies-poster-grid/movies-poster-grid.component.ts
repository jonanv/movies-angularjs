import { Component, Input, OnInit } from '@angular/core';
import { Bilboard } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styles: [
  ]
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() public movies: Bilboard[];

  constructor() { }

  ngOnInit(): void {
  }

}
