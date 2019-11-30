import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  url = "https://swapi.co/api/films/";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url).pipe(map(films => films));
  }

  getDetails(id) {
    return this.http.get(this.url + `${id}`);
  }
}
