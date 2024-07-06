import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiIUrl = 'http://localhost/api/movies';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.apiIUrl);
  }
}
