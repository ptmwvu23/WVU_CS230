import { Component } from "@angular/core";
import { UserInfo } from "../upperNav/user-info.model";
import { LibraryService } from "./library.service";

@Component({
    selector: "HockeyReference-createAcc",
    templateUrl: "createAcc.component.html"
})
export class CreateAccComponent{
  
    constructor(private libraryservice:LibraryService){


    }

    addData(data: UserInfo){
        console.log(data);
        this.libraryservice.serviceData(data).subscribe(data=>{
            console.log("Account Data Communicated");
        })

    }


}

