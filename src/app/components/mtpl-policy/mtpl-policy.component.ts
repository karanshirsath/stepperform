import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonDataService } from 'src/app/common-data.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-mtpl-policy',
  templateUrl: './mtpl-policy.component.html',
  styleUrls: ['./mtpl-policy.component.css']
})
export class MTPLPolicyComponent implements OnInit {
  @Output() switchTab = new EventEmitter()

  constructor(private _commonData:CommonDataService) { }
  @ViewChild('stepper') stepper: MatStepper;
  ngOnInit(): void {
  }
  toggle1=false
  toggle2=false
  toggle3=false
  toggle4=true
  toggle5=true
  toggle6=true
  personalInformation
  contactInformation
  vehicleOwnerInformation
  deliveryInformation
formData

switch=(index)=>{
this.switchTab.emit(index)
}
move=(index)=> {
  this.stepper.selectedIndex = index;
}
  personalData=(data)=>{
    this.personalInformation=data
    console.log(this.personalInformation);
  }

  contactDetailsData=(data)=>{
    this.contactInformation=data
    console.log(this.contactInformation);
  }

  vehicleOwnerData=(data)=>{
    this.vehicleOwnerInformation=data
    console.log(this.vehicleOwnerInformation);
  }
  
  deliveryData=(data)=>{
    this.deliveryInformation=data;
    this.formData={
      personalInformation:this.personalInformation,
      contactInformation:this.contactInformation,
      vehicleOwnerInformation:this.vehicleOwnerInformation,
      deliveryInformation:this.deliveryInformation
    
      }
    this._commonData.policyData.next(this.formData)
  }

}
