import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   listofrestro=[{name:"macdonls",addrees:'abc'}
  ,{name:"dominos",addrees:'rty'}]
  constructor() { }

  ngOnInit() {
  }

}
