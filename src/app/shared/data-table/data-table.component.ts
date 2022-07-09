import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() data: any = [{"customer": "data", "name": "data", "address": "data", "Phone Number": "data", "email": "data" },
  {"customer": "data", "name": "data", "address": "data", "Phone Number": "data", "email": "data" },
  {"customer": "data", "name": "data", "address": "data", "Phone Number": "data", "email": "data" }
  ];

  public newData: Array<any> = [];
  public newRow: any = {};

  constructor() { 
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.newData);
  }

  //
  ngOnInit(): void {
    this.newData = structuredClone(this.data);

    console.log(this.newData);
  }

  deleteRow(index: number) {
    this.newData = [...this.newData.slice(0, index), ...this.newData.slice(index + 1)];
  }

  getDataHead() {
    let head = []
    for(let item in this.data[0]){
      head.push(item);
    }
    return head;
  }

  getObjValues(obj: any) {
    let values = []
    for(let item in obj){
      values.push(obj[item]);
    }
    return values;
  }

  inputChange() {
    console.log(this.newData);
  }

  addRow() {
    this.newData = [this.newRow, ...this.newData];
    this.newRow = {};
    console.log(this.newData);
  }

  // getFormElement(rowIndex: number, colIndex: number) {
  //   return this.newData[rowIndex].controls[colIndex];
  // }
}
