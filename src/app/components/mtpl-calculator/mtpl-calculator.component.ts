import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnChanges } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { MtplCalculatorService } from './mtpl-calculator.service';
import { ProposalComponent } from '../proposal/proposal.component';

@Component({
  selector: 'app-mtpl-calculator',
  templateUrl: './mtpl-calculator.component.html',
  styleUrls: ['./mtpl-calculator.component.css']
})
export class MTPLCalculatorComponent implements OnInit,OnChanges {
  @Output() selectionChange: EventEmitter<StepperSelectionEvent>
  @Output() NextTabSwitch = new EventEmitter()
  @Input () stepChange
  @ViewChild('stepper') stepper: MatStepper;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle1=false
  toggle2=false
  toggle3=false
  toggle4=false
  toggle5=false
  toggle6=true

  ngOnChanges(){
    if(this.stepChange!=undefined){
      this.move(this.stepChange)
    }
  }

  move=(index)=> {
    console.log("calculators",index);
    this.stepper.selectedIndex = index;
    // this.stepper.selectedIndex = index;
  }

  nextTab=(data)=>{
    this.NextTabSwitch.emit(data)
  }
  change=(data)=>{
    console.log(data);
  }
}
