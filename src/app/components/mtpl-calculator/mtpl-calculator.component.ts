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
  toggle2=true
  toggle3=true
  toggle4=true
  toggle5=true
  toggle6=true

  policyDetailsData=(data)=>{
    this.policyDetails=data
    console.log(this.policyDetails);
    
  }
  vehicleData=(data)=>{
    this.vehicle=data
    console.log(this.vehicle);
    
  }
}
