import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs';
import {MovieItem, MovieResponse} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=369af1ed&t=taxi'

  constructor(private _httpClient: HttpClient) {
    console.log(this.url+`&s=${'Guardians'}`)
  }

  searchMovies(query: string): Observable<{
    Response: string;
    totalResults: string;
    Search: { title: string; poster: string }[]
  }> {
    return this._httpClient.get<MovieResponse>('https://www.omdbapi.com/?i=tt3896198&apikey=369af1ed&t=taxi').pipe(
      map(response => {
        // Transforming the 'Search' array items to match our MovieItem structure
        return {
          Search: response.Search.map(movie => ({
            title: movie.Title,
            poster: movie.Poster
          })),
          totalResults: response.totalResults,
          Response: response.Response
        };
      })
    );
  }
}
