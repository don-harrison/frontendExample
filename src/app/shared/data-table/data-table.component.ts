import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Output('data-out') dataOut = new EventEmitter<any[]>();
  @Input('table-data') dataIn!: any[];

  @Input('read-only-cols') cols?: string[];

  public newData: Array<any> = [];
  public newRow: any = {};

  constructor() {}
    
  //
  ngOnInit(): void {
    this.newData = structuredClone(this.dataIn);
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.dataOut.emit(this.newData);
  }


  deleteRow(index: number) {
    this.newData = [...this.newData.slice(0, index), ...this.newData.slice(index + 1)];
    this.dataOut.emit(this.newData);
  }

  getDataHead() {
    let head = []
    for(let item in this.dataIn[0]){
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

  addRow() {
    this.newData = [this.newRow, ...this.newData];
    this.newRow = {};
    this.dataOut.emit(this.newData);
  }

  // getFormElement(rowIndex: number, colIndex: number) {
  //   return this.newData[rowIndex].controls[colIndex];
  // }
}
