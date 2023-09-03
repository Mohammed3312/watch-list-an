import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private Api: string = 'http://www.omdbapi.com/?';
  private apiKey = '&apikey=873667e5';

  constructor(private http: HttpClient) {}
  getMovies(search:string) {
    return this.http.get(`${this.Api}&s=${search}${this.apiKey}`);
  }
  getMovie(id:any){
    return this.http.get(`${this.Api}i=${id}${this.apiKey}`);
  }
}


