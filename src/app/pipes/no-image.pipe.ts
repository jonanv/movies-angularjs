import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  // TODO: Toco volver any para recibir cualquer tipo
  transform(movie: any, poster: boolean = false): unknown {
    // http://image.tmdb.org/t/p/w500{{ movie.poster_path }}
    let url = "http://image.tmdb.org/t/p/w500";

    if (poster) {
      if(movie.poster_path) {
        return url + movie.poster_path;
      }
      else if(movie.profile_path) {
        return url + movie.profile_path;
      }
      else {
        return "assets/img/no-image-poster.jpg";
      }
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
