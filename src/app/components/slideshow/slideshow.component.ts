import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

// Imports
import Swiper from 'swiper';
import { Bilboard } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() public movies: Bilboard[];
  private swiper: Swiper;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

  public onSlideNext(): void {
    this.swiper.slideNext();
  }

  public onSlidePrevious(): void {
    this.swiper.slidePrev();
  }

}
