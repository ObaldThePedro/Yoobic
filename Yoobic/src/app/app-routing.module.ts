import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "signup", pathMatch: "full" },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupPageModule)
  },
  {
    path: "menu",
    loadChildren: () => import("./menu/menu.module").then(m => m.MenuPageModule)
  },
  {
    path: "missions",
    loadChildren: () =>
      import("./missions/missions.module").then(m => m.MissionsPageModule)
  },
  {
    path: "movie/:id",
    loadChildren: () =>
      import("./movie-details/movie-details.module").then(
        m => m.MovieDetailsPageModule
      )
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
