import { AfterContentInit, Component, OnInit } from '@angular/core';

// Imports
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})
export class SlideshowComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

}
