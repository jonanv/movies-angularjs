import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public searchMovie(text: string): void {
    // console.log(text);
    if (text.length === 0) {
      return;
    }

    this.router.navigate(['/search', text]);
  }
}
