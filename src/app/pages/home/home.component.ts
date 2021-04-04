import { Component, HostListener, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { first } from 'rxjs/operators';
import { Bilboard, Page } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public bilboard: Bilboard[];
  public populars: Bilboard[];
  public popularsChildren: Bilboard[];
  public moviesSlideShow: Bilboard[];
  public moviesNowPlaying: Bilboard[];
  public loading: boolean = false;

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any): void {
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    // console.log({position, max});
    if (position > max) {
      console.log('llamar servicio');
      this.moviesService.getNowPlaying()
      .pipe(first())
      .subscribe((response: Page) => {
        this.moviesNowPlaying.push(...response.results);
      });
    }
  }

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getBillboard();
    this.getPopular();
    this.getPopularChildren();
    this.getNowPlaying();
  }

  private getBillboard(): void {
    this.loading = true;
    this.moviesService.getBillboard()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.bilboard = response;
        this.loading = false;
      });
  }

  private getPopular(): void {
    this.loading = true;
    this.moviesService.getPopular()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.populars = response;
        this.loading = false;
      });
  }

  private getPopularChildren(): void {
    this.loading = true;
    this.moviesService.getPopularClildren()
      .pipe(first())
      .subscribe((response: Bilboard[]) => {
        this.popularsChildren = response;
        this.loading = false;
      });
  }

  private getNowPlaying(): void {
    this.moviesService.getNowPlaying()
      .pipe(first())
      .subscribe((response: Page) => {
        this.moviesSlideShow = response.results;
        this.moviesNowPlaying = response.results;
      });
  }

}
