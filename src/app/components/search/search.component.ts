import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie() {

  }
}
