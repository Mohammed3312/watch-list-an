import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent {
  movie:any
  constructor(private movieserv:MovieService ,private route:ActivatedRoute ){}

ngOnInit(): void {
this.loadMovie()

}

  loadMovie(){
    this.movieserv.getMovie(this.route.snapshot.paramMap.get('id')).subscribe((movie)=>{
      this.movie = movie
      console.log(movie)
    })

  }

}
