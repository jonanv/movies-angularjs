import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(movie: Movie): unknown {
    let url = "http://image.tmdb.org/t/p/w500";

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
