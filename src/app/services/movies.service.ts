import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "eeba7a481f04ca04446e13ca95af978d";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";

  constructor(
    private http: HttpClient,
  ) { }

  private getQuery() {
    const url = `${ this.urlMoviedb }movie/popular?api_key=${ this.apikey }&language=es-CO&page=1`;

    return this.http.jsonp(url, 'callback=test');
  }

  getPopular() {
    return this.getQuery()
      .pipe(map(response => {
        return response['results'];
      }));
  }

  getBillboad() {
    let dateFrom = new Date();
    let dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 7);

    let dateFromStr = `${ dateFrom.getFullYear() }-0${ dateFrom.getMonth() + 1 }-0${ dateFrom.getDay() }`;
    let dateToStr = `${ dateTo.getFullYear() }-0${ dateTo.getMonth() + 1 }-0${ dateTo.getDay() }`;
    console.log(dateFromStr);

    const url = `${ this.urlMoviedb }discover/movie?api_key=${ this.apikey }&language=es-CO&sort_by=popularity.desc&page=1&release_date.gte=${ dateFromStr }&release_date.lte=${ dateToStr }`;
    return this.http.jsonp(url, 'callback=test');
    // return this.getQuery()
    //   .pipe(map(response => {
    //     return response;
    //   }));
    // TODO: Hacer que el servicio sea general con un solo getQuery
  }
}
