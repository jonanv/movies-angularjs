import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { Bilboard, Movie, Page } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "eeba7a481f04ca04446e13ca95af978d";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";
  private language: string = "es-CO";
  private page: number = 1;
  public loading: boolean = false;

  constructor(
    private http: HttpClient,
  ) { }

  private getQuery(query: string, subquery: string): Observable<Object> {
    let url = '';
    if(query === 'movie') {
      url = `${ this.urlMoviedb }${ query }/${ subquery }?api_key=${ this.apikey }&language=${ this.language }`;
    }
    else if(query === 'now_playing') {
      url = `${ this.urlMoviedb }movie/${ query }?api_key=${ this.apikey }&language=${ this.language }&page=${ subquery }`;
    }
    else {
      url = `${ this.urlMoviedb }${ query }/movie?api_key=${ this.apikey }&language=${ this.language }&page=1${ subquery }`;
    }
    return this.http.jsonp<Observable<Object>>(url, 'callback=test');
  }

  private getDate(date: Date): string {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if(month.length < 2) {
      month = '0' + month;
    }

    if(day.length < 2) {
      day = '0' + day;
    }

    let newDate = year + '-' + month + '-' + day;
    return newDate;
  }

  public getPopular(): Observable<Bilboard[]> {
    let subquery = `&sort_by=popularity.desc&include_adult=false&include_video=false`;
    return this.getQuery('discover', subquery)
      .pipe(map((response: Bilboard[]) => {
        return response['results'];
      }));
  }

  public getPopularClildren(): Observable<Bilboard[]> {
    let subquery = `&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=12%2C16%2C35%2C10751`;
    return this.getQuery('discover', subquery)
      .pipe(map((response: Bilboard[]) => {
        return response['results'];
      }));
  }

  public getBillboard(): Observable<Bilboard[]> {
    let dateFrom = new Date();
    let dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 7);

    let dateFromStr = this.getDate(dateFrom);
    let dateToStr = this.getDate(dateTo);

    let subquery = `&sort_by=popularity.desc&release_date.gte=${ dateFromStr }&release_date.lte=${ dateToStr }`;
    return this.getQuery('discover', subquery)
      .pipe(map((response: Bilboard[]) => {
          return response['results'];
        }));
  }

  public getSearchMovie(search: string): Observable<Bilboard[]> {
    let subquery = `&query=${ search }`;
    return this.getQuery('search', subquery)
      .pipe(map((response: Bilboard[]) => {
        return response['results'];
      }));
  }

  public getMovie(id: number): Observable<Movie> {
    let subquery = `${ id }`;
    return this.getQuery('movie', subquery)
      .pipe(map((response: Movie) => {
        return response;
      }));
  }

  public getNowPlaying(): Observable<Bilboard[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    let subquery = `${ this.page }`;
    return this.getQuery('now_playing', subquery)
      .pipe(map((response: Page) => {
        return response.results;
      }),
      tap(() => {
        this.page += 1;
        this.loading = false;
      }));
  }
}
