import { Component } from "@angular/core";
import { UserInfo } from "../upperNav/user-info.model";
import { DatabaseService } from "./database.service";
import { LibraryService } from "./library.service";

@Component({
    selector: "HockeyReference-createAcc",
    templateUrl: "createAcc.component.html"
})
export class CreateAccComponent{
  
    constructor(private libraryservice:LibraryService, private dbService:DatabaseService){
dbService.showData();

    }

    addData(data: UserInfo){
        console.log(data);
        this.libraryservice.serviceData(data).subscribe(data=>{
            console.log("Account Data Communicated");
        })

    }


}

