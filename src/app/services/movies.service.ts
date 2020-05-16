import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "eeba7a481f04ca04446e13ca95af978d";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";
  private language: string = "es-CO";

  constructor(
    private http: HttpClient,
  ) { }

  private getQuery(query: string, subquery: string) {
    const url = `${ this.urlMoviedb }${ query }/movie?api_key=${ this.apikey }&language=${ this.language }&page=1${ subquery }`;
    return this.http.jsonp(url, 'callback=test');
  }

  getPopular() {
    let subquery = `&sort_by=popularity.desc&include_adult=false&include_video=false`;
    return this.getQuery('discover', subquery)
      .pipe(map(response => {
        return response['results'];
      }));
  }

  getPopularClildren() {
    let subquery = `&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=12%2C16%2C35%2C10751`;
    return this.getQuery('discover', subquery)
      .pipe(map(response => {
        return response['results'];
      }));
  }


  getBillboard() {
    let dateFrom = new Date();
    let dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 7);

    let dateFromStr = this.getDate(dateFrom);
    let dateToStr = this.getDate(dateTo);

    let subquery = `&sort_by=popularity.desc&release_date.gte=${ dateFromStr }&release_date.lte=${ dateToStr }`;
    return this.getQuery('discover', subquery)
      .pipe(map(response => {
          return response['results'];
        }));
  }

  getSearchMovie(search: string) {
    let subquery = `&query=${ search }`;
    return this.getQuery('search', subquery)
      .pipe(map(response => {
        return response['results'];
      }));
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
}
