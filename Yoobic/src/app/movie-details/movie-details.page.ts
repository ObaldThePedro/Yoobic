import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"]
})
export class MovieDetailsPage implements OnInit {
  details: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.moviesService.getDetails(id).subscribe(result => {
      console.log(result);
      this.details = result;
    });
  }
}
