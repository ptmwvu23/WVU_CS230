import { Component } from "@angular/core";

@Component({
    selector: "HockeyReference-stathead",
    templateUrl: "stathead.component.html"
})
export class StatheadComponent{
    Header: string = "Stathead"
    currentLogo: string = "https://d2p3bygnnzw9w3.cloudfront.net/req/202109021/logos/stathead-hr.svg"
}