import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Cast } from '../../interfaces/credits.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  private id: number;
  public page: string;
  public search: string;
  public movie: Movie;
  public loading: boolean = false;
  public cast: Cast[];

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params
      .subscribe(response => {
        this.id = response['id'];
        this.page = response['page'];

        if(response['search']) {
          this.search = response['search'];
        }

        // this.loadMovie();
        // this.getCredits();
        // console.log(response);
      });

      combineLatest([
        this.moviesService.getMovie(this.id),
        this.moviesService.getCredits(this.id)
      ])
        .subscribe(([movie, cast]) => {
          // console.log(response);
          if (!movie) {
            this.router.navigateByUrl('/home');
            return;
          }
          this.movie = movie;
          this.cast = cast.filter(
            actor => actor.profile_path !== null
          );
        });
  }

  ngOnInit(): void {
  }

  // private loadMovie(): void {
  //   this.loading = true;
  //   this.moviesService.getMovie(this.id)
  //     .pipe(first())
  //     .subscribe((response: Movie) => {
  //       // console.log(response);
  //       if (!response) {
  //         this.router.navigateByUrl('/home');
  //         return;
  //       }
  //       this.movie = response;
  //       this.loading = false;
  //     });
  // }

  // private getCredits(): void {
  //   this.loading = true;
  //   this.moviesService.getCredits(this.id)
  //     .pipe(first())
  //     .subscribe((response: Cast[]) => {
  //       this.cast = response.filter(
  //         actor => actor.profile_path !== null
  //       );
  //       this.loading = false;
  //     });
  // }

}
