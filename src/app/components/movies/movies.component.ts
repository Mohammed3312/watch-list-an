import { MovieService } from './../../services/movie.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit ,  AfterViewInit  {
  movies: any = [];
  @ViewChild('search') searchRef?: ElementRef;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    //this.getMovies();
  }
  ngAfterViewInit(): void {
    this.searchRef?.nativeElement.focus()
  }
  getMovies(search: string) {
    this.movieService.getMovies(search).subscribe((res) => {
      console.log(res);
      this.movies = res;
      //console.log(this.movies.Search);
    });
  }
  movieKeySearch(event: any, search: string) {
    if (event.key === 'Enter') {
      this.getMovies(search);
    }
  }
}
