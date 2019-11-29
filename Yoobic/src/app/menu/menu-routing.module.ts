import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "missions",
        loadChildren: "../missions/missions.module#MissionsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule {}
