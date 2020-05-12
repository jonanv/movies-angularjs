import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: [
  ]
})
export class GaleryComponent implements OnInit {

  @Input('movies') movies: Movie[];
  @Input('title') title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
