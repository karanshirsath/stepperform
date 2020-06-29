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
  constructor(private mtplCalculatorService:MtplCalculatorService,private proposal:ProposalComponent) { }

  ngOnInit(): void {
  }
  
  vehicle
  insuringParty
  policyDetails
  installments
  covers
  summary
  toggle1=false
  toggle2=false
  toggle3=false
  toggle4=false
  toggle5=false
  toggle6=true
  mtplCalculaterData
  mtplCalculator

  move=(index)=> {
    console.log("calculators");
    this.stepper1.selectedIndex = index;
  }

  vehicleData=(data)=>{
    this.vehicle=data
    console.log(this.vehicle);
  }

  insuringPartyData=(data)=>{
    this.insuringParty=data
    console.log(this.insuringParty);
  }

  policyDetailsData=(data)=>{
    this.policyDetails=data
    console.log(this.policyDetails);
  }

  installmentsData=(data)=>{
    this.installments=data
    console.log(this.installments);
  }

  coversData=(data)=>{
    this.covers=data
    console.log(this.covers);
  }

  nextTab=(data)=>{
    this.NextTabSwitch.emit(data)
  }
  change=(data)=>{
    console.log(data);
  }
}
