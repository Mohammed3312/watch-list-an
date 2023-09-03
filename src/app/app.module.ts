import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    CardMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
