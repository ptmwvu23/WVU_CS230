import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Table } from "./row.model";

@Injectable({providedIn: 'root'})
export class LibraryService{
    private baseUrl: string = 'https://hockeyreference-app-default-rtdb.firebaseio.com/mock_row.json';
    
  
 

    constructor(private http:HttpClient){


    }

    getMockRow() {
     return this.http.get<Table[]>(this.baseUrl);
    }
}