import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  name: string ="shabri";
  toggle:boolean=false;
  
  hideme(){
    this.toggle=!this.toggle;
   }

  constructor() {

   }

  ngOnInit() {
  }
  
}
