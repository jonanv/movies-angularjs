import { Component, OnInit, Input } from '@angular/core';

import { Bilboard } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: [
  ]
})
export class GaleryComponent implements OnInit {

  @Input('movies') movies: Bilboard[];
  @Input('title') title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
