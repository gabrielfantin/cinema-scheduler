import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatMenuModule, MatIconModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movies: Array<Movie> = [];
  dashboardCols : number = 3;

  constructor(private movieService: MovieService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.loadMovies();
    this.setBreakpointObserver();
  }

  setBreakpointObserver() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.dashboardCols = 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.dashboardCols = 2;
        } else if (result.breakpoints[Breakpoints.Medium] || result.breakpoints[Breakpoints.Large]) {
          this.dashboardCols = 3;
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          this.dashboardCols = 4;
        }
      }
    });
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }
}
