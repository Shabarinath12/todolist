import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  name: string ="shabri";
  toggle:boolean=false;
  // server: boolean=false;
  switch:boolean=true;

   hide(){
      this.switch=!this.switch;
  }
  
  hideme(){
    this.toggle=!this.toggle;
   }

  constructor() {

   }

  ngOnInit() {
  }
  
}
