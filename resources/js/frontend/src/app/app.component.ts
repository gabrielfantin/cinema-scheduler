import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './movie/movie.service';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent],
  providers: [MovieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
