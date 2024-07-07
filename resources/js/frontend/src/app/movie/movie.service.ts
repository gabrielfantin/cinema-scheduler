import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiIUrl = environment.api.url + '/movies';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.apiIUrl);
  }
}
