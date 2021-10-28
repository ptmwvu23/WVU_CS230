import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Table } from "./row.model";
import { UserInfo } from "../upperNav/user-info.model";

@Injectable({providedIn: 'root'})
export class LibraryService{
    private baseUrl: string = 'https://hockeyreference-app-default-rtdb.firebaseio.com/mock_row.json';
    private baseUrl2: string = 'https://hockeyreference-app-default-rtdb.firebaseio.com/my-info.json';
    
  
 

    constructor(private http:HttpClient){


    }

    getMockRow() {
     return this.http.get<Table[]>(this.baseUrl);
    }

    serviceData(data: UserInfo){
        return this.http.put(this.baseUrl2, data);
    }
}