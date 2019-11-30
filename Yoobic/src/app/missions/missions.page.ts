import { MoviesService } from "../services/movies.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./missions.page.html",
  styleUrls: ["./missions.page.scss"]
})
export class MissionsPage implements OnInit {
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
      let films_Array = response.results.map(f => f);
      console.log(films_Array);
      this.films = films_Array;
    });
  }
}
