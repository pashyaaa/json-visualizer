import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jsonData:any;

  constructor() { }

  ngOnInit(): void {
  }

  compute(){

  }

  dataChanged(e){
    this.jsonData = e;
  }
}
