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
      img: "img-1",
      name: "pavan",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "2",
      img: "img-1",
      name: "bharghav",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "3",
      img: "img-1",
      name: "geem",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "4",
      img: "img-1",
      name: "safari",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "5",
      img: "img-1",
      name: "apple",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    }
  ];
}
