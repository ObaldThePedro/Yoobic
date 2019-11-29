import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode"
}

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  url = "http://www.omdbapi.com/";
  apiKey = "77585c0d";

  constructor(private http: HttpClientModule) {}

  searchData(title: string, type = SearchType): Observable<any> {
    return;
  }
}
