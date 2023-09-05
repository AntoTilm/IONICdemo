import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {MovieItem} from "../../shared/models/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {

  constructor(private _movieService : MovieService) {
  }

  inputValue : string = '';

  movie : MovieItem = {
    Title: '',
    Poster: '',
  }

  ngOnInit() {
  }
  onEnter(event: any) {
    this._movieService.searchMovies(this.inputValue).subscribe(movies => {
      this.movie.Title = movies.Search[0].title;
      this.movie.Poster = movies.Search[0].poster;
    })
  }
}
