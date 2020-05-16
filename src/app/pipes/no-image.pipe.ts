import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  // TODO: Toco volver any para recibir cualquer tipo
  transform(movie: any, poster: boolean = false): unknown {
    let url = "http://image.tmdb.org/t/p/w500";

    if (poster) {
      return url + movie.poster_path;
    }

    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    }
    else {
      if (movie.poster_path) {
        return url + movie.poster_path;
      }
      else {
        return "assets/img/no-image.jpg";
      }
    }
  }

}
