import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movies: Array<Movie> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }
}
