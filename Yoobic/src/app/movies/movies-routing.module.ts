import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesPage } from "./movies.page";

const routes: Routes = [
  {
    path: "",
    component: MoviesPage,
    children: [
      {
        path: "movie/:id",
        loadChildren:
          "../movie-details/movie-details.module#MovieDetailsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesPageRoutingModule {}
