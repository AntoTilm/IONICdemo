import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {MovieDetails, MovieItem} from "../../shared/models/movie";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie : MovieDetails | undefined
  constructor(private _movieService : MovieService) {
    _movieService.selectedMovie$.subscribe(movie => this.movie = movie)
  }

  ngOnInit() {
  }

}
