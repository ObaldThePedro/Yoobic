import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-missions",
  templateUrl: "./missions.page.html",
  styleUrls: ["./missions.page.scss"]
})
export class MissionsPage implements OnInit {
  pages = [
    { title: "Dashboard", url: "missions" },
    { title: "Photos", url: "photos" },
    { title: "Details", url: "details" }
  ];

  selectedPath = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  ngOnInit() {}
}
