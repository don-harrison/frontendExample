import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() tableHeads: string[] = ['not', 'initialised', 'tableHeads', 'undefined'];

  @Input() data: any = {"1": {"customer": "data", "name": "data", "address": "data", "Phone Number": "data" }}

  constructor() { }

  ngOnInit(): void {
  }

}
