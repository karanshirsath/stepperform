import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { MtplCalculatorService } from './mtpl-calculator.service';
import { ProposalComponent } from '../proposal/proposal.component';

@Component({
  selector: 'app-mtpl-calculator',
  templateUrl: './mtpl-calculator.component.html',
  styleUrls: ['./mtpl-calculator.component.css']
})
export class MTPLCalculatorComponent implements OnInit {
  @Output() selectionChange: EventEmitter<StepperSelectionEvent>
  @Output() NextTabSwitch = new EventEmitter()

  @ViewChild('stepper1') stepper1: MatStepper;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle1=false
  toggle2=false
  toggle3=false
  toggle4=false
  toggle5=false
  toggle6=true

  move=(index)=> {
    console.log("calculators");
    this.stepper1.selectedIndex = index;
  }

  nextTab=(data)=>{
    this.NextTabSwitch.emit(data)
  }
  change=(data)=>{
    console.log(data);
  }
}
