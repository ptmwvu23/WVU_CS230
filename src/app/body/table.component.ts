import { Component } from "@angular/core";
import { mock_row } from "./mock-row";
import { Table } from "./row.model"

@Component({
    selector: "table-component",
    templateUrl: "table.component.html"
})
export class TableComponent{
    table: Table[] = [];

    constructor(){
          
        for(var table of mock_row){
            this.table.push(new Table(table)); 
        }
    }
}