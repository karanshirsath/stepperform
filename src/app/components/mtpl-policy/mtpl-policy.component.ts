import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonDataService } from 'src/app/common-data.service';
import { MatStepper } from '@angular/material/stepper';
import { ProposalComponent } from '../proposal/proposal.component';

@Component({
  selector: 'app-mtpl-policy',
  templateUrl: './mtpl-policy.component.html',
  styleUrls: ['./mtpl-policy.component.css']
})
export class MTPLPolicyComponent implements OnInit {
  @Output() switchTab = new EventEmitter()

  constructor() { }
  @ViewChild('stepper') stepper: MatStepper;
  ngOnInit(): void {
  }
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = true
  toggle6 = true

  switch = (index) => {
    this.switchTab.emit(index)
  }
  move = (index) => {
    this.stepper.selectedIndex = index;
  }

  change = (data) => {
    console.log(data);
  }
}
