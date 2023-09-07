export interface MovieItem {
  Title: string;
  Poster: string;
}

export interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}

export interface MovieRating {
  Value : number
}
export interface MovieDetails {

  Ratings? : [MovieRating],
  Rating : number,
  Title: string,
  Poster : string,
  Plot : string
}
