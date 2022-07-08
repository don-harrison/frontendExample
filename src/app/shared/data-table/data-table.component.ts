import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  public newData!: FormArray;

  constructor() { 
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
    console.log(this.newData);
  }

  ngOnInit(): void {
    console.log(this.data);

    let formControls = []

    for(let head in this.getDataHead()){
      formControls.push(new FormControl(head))
    }

    this.newData = new FormArray(formControls);
    console.log(this.newData);
  }

  *getDataHead() {
    for(let item in this.data[0]){
      yield item;
    }
  }

  *getDataElements(row: any) {
    for(let item in row){
      yield row[item];
    }
  }

  addRow(){
  }

}
