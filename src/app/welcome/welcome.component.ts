import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  greeting: string = "Welcome!";
  highlight: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getGreenting();
  }

  getGreenting() {
    setTimeout(() => {
      var time = new Date().getHours();
      if (time < 10) {
        this.greeting = "Good morning!";
      } else if (time < 20) {
        this.greeting = "Good afternoon!";
      } else {
        this.greeting = "Good evening!";
      }
      this.getGreenting();
    }, 300);

  }

  onSearchClick() {
    this.router.navigate(['/searchdrug']);
  }
}
