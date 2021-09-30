import { Component, Input } from "@angular/core";

@Component({
    selector: "row-component",
    templateUrl: "row.component.html"
})
export class RowComponent{
    @Input()
    team!: string;
    @Input()
    wins!: string;
    @Input()
    loss!: string;
    @Input()
    OT!: string;
    @Input()
    PTS!: string;
    @Input()
    RW!: string;
    @Input()
    RegRC!: string;
    @Input()
    Regper!: string;
}