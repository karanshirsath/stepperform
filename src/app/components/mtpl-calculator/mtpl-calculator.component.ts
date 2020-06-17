import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtpl-calculator',
  templateUrl: './mtpl-calculator.component.html',
  styleUrls: ['./mtpl-calculator.component.css']
})
export class MTPLCalculatorComponent implements OnInit {

  constructor() { }

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
  toggle6=false

  policyDetailsData=(data)=>{
    this.policyDetails=data
    console.log(this.policyDetails);
    
  }
  vehicleData=(data)=>{
    this.vehicle=data
    console.log(this.vehicle);
    
  }
}
