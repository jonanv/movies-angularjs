import { Injectable } from '@angular/core';

import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "eeba7a481f04ca04446e13ca95af978d";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";

  constructor(
    private http: HttpClient,
    private jsonp: JsonpInterceptor
  ) { }

  private getQuery() {
    const url = `${ this.urlMoviedb }movie/popular?api_key=${ this.apikey }&language=es-CO&page=1`; //&callback=test

    return this.http.get(url);
  }

  getPopular() {
    return this.getQuery()
      .pipe(map(response => {
        return response;
      }));
  }
}
