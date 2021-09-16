import { Component } from "@angular/core";

@Component({
    selector: 'app-top-nav-bar', 
    templateUrl: 'top-nav-bar.component.html'
})

export class TopNavBarComponent {
    a: string = "Players"
    b: string = "Teams"
    c: string = "Seasons"
    d: string = "Leaders"
    e: string = "NHL Scores"
    f: string = "Playoffs"
    g: string = "Stathead"
    h: string = "Newsletter"
    i: string = "Full Site Menu Below"
    //number of notifications of game scores
    number_of_alerts: string = "1"
}

