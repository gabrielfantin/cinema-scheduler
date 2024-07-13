import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule],
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
