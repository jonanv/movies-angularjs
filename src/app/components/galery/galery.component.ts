import { Component, OnInit, Input } from '@angular/core';

// Imports
import { Bilboard } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: [
  ]
})
export class GaleryComponent implements OnInit {

  @Input() public movies: Bilboard[];
  @Input() public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
