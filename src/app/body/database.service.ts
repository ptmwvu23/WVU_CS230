import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/compat/database"

import { Observable } from "rxjs";
import { Table } from "./row.model";
import { UserInfoComponent } from "../upperNav/user-info.component";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<Table []>
        constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<Table>('my-info').valueChanges();
    }
    public showData(){
        this.items.subscribe((data) => {
            console.log("Data Received");
            console.log(data);
        }) 
    }

}