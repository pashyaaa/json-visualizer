import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {

  jsonData:any;
  @Output() dataChanged= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitChange(){
    this.dataChanged.emit(this.jsonData)
    let obj = JSON.parse(this.jsonData);
    this.jsonData = JSON.stringify(obj, undefined, 4);
  }

}
