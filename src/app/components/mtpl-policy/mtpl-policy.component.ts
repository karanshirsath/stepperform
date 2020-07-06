import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-mtpl-policy',
  templateUrl: './mtpl-policy.component.html',
  styleUrls: ['./mtpl-policy.component.css']
})
export class MTPLPolicyComponent implements OnInit {

  constructor() { }
  @Output() switchTab = new EventEmitter();
  @ViewChild('stepper') stepper: MatStepper;
  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  toggle4 = false;
  toggle5 = true;
  toggle6 = true;
  ngOnInit(): void {
  }

  switch = (index) => {
    this.switchTab.emit(index);
  }
  move = (index) => {
    this.stepper.selectedIndex = index;
  }

  change = (data) => {
    console.log(data);
  }
}
