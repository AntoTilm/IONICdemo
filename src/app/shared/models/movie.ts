export interface MovieItem {
  Title: string;
  Poster: string;
}

export interface MovieResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}
