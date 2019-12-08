import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title_h ="welcome to home page "
  constructor() { }

  ngOnInit() {
  }
fct() {
  alert(this.title_h);
}
}
