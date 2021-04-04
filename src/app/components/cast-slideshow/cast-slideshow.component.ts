import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

// Imports
import { Cast } from 'src/app/interfaces/credits.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styles: [
  ]
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() public cast: Cast[];
  private swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }
}
