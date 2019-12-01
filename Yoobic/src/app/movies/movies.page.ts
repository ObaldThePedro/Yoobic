import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"]
})
export class MoviesPage implements OnInit {
  films: any;

  constructor(private moviesService: MoviesService) {
    this.films = [];
  }

  ngOnInit() {
    this.getMovies();
  }

  // Call our service function which returns an Observable
  getMovies() {
    this.moviesService.getData().subscribe(response => {
      const filmsArray = response.results.map(f => f);
      console.log(filmsArray);
      this.films = filmsArray;
    });
  }
}
