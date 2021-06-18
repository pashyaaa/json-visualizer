import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  // ELEMENT_DATA = [
  //   {"name":"Ram", "email":"Ram@gmail.com"},  
  //   {"name":"Bob", "email":"bob32@gmail.com"}
  // ];
  ELEMENT_DATA = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns = this.getHeaders(this.ELEMENT_DATA);
  private _jsonData: any;

  @Input() set jsonData(value: any) {
    this._jsonData = JSON.parse(value);
    console.log(this._jsonData)
    this.dataSource = new MatTableDataSource<any>(this._jsonData);
    this.displayedColumns = this.getHeaders(this._jsonData);
 }
 
 get jsonData(): any {
     return this._jsonData;
 }

  constructor() { }

  ngOnInit(): void {

    console.log(this.getHeaders(this.ELEMENT_DATA))
  }

  getHeaders(data){
    if(Object.prototype.toString.call(data) !== '[object Array]'){
      data = [data];
    }
    let keys = [];
    data.forEach(element => {
      let newKeys = Object.keys(element);
      newKeys.forEach(newKey => {
        if(!keys.includes(newKey)){
          keys.push(newKey)
        }
      })
    });
    return keys;
  }
}
