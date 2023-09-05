import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs';
import {MovieDetails, MovieItem, MovieResponse} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public selectedMovie : MovieDetails | undefined;
  url: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=369af1ed'

  constructor(private _httpClient: HttpClient) {}

  searchMovies(query: string): Observable<{
    Response: string;
    totalResults: string;
    Search: { title: string; poster: string }[]
  }> {
    return this._httpClient.get<MovieResponse>(this.url + `&s=${query}`).pipe(
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

  getMovieDetail(title: string) : Observable<MovieDetails> {
    return this._httpClient.get<MovieDetails>(this.url+`&t=${title}`).pipe(map(details => {
      return {
        Rating : details.Ratings![0].Value,
        Title : details.Title,
        Poster : details.Poster,
        Plot : details.Plot
      }
    }))
  }
}
