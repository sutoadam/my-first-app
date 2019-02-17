import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonclicklogger',
  templateUrl: './buttonclicklogger.component.html',
  styleUrls: ['./buttonclicklogger.component.css'],
})
export class ButtonclickloggerComponent implements OnInit {

  isButtonDown = false;
  mouseClicks = [];
  numberOfClicks = 1;

  constructor() { }

  ngOnInit() {
  }

  onMouseDown() {
    this.isButtonDown = true;
    //this.mouseClicks.push(this.numberOfClicks++);
    this.mouseClicks.push(new Date());
  }

  onMouseUp() {
    this.isButtonDown = false;
  }
}
