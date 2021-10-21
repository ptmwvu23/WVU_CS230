import { Component, OnInit } from "@angular/core";
import { mock_row } from "./mock-row";
import { Table } from "./row.model";
import { LibraryService } from "./library.service";

@Component({
    selector: "table-component",
    templateUrl: "table.component.html"
})
export class TableComponent implements OnInit{
    table: Table[] = [];

    constructor(private libraryService: LibraryService){
          
    }

    ngOnInit(): void {
        
        console.log('showing data');
        this.showRows();
      
    }

    showRows(){
        this.libraryService.getMockRow().subscribe((data: Table[])=>{
            console.log(data);
            this.table = data;
        })
    }

  
}