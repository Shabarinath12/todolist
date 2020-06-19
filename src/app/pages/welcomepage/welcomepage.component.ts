import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcomepage",
  templateUrl: "./welcomepage.component.html",
  styleUrls: ["./welcomepage.component.css"]
})
export class WelcomepageComponent implements OnInit {
  constructor() {}

  show: boolean = false;


  name: string = 'sai'

  ngOnInit() {}

  profiles: any[] = [
    {
      id: "1",
      img: "../../assets/images-2.jpeg",
      profiles:"The  proclaimed no taxation without representation starting with the Stamp",
       mobile: 9999999990,
       pass: "123secrete",
 

    },
    {
      id: "2",
      img: "../../assets/images-2.jpeg",
      profiles:"The  proclaimed no taxation without representation starting with the Stamp",
       mobile: 9999999990,
       pass: "123secrete",
 
    },
    {
      id: "3",
      img: "../../assets/images-2.jpeg",
      profiles:"The  proclaimed no taxation without representation starting with the Stamp",
       mobile: 9999999990,
       pass: "123secrete",
 
    }
     
     
  ];
}
