import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-mtpl-policy',
  templateUrl: './mtpl-policy.component.html',
  styleUrls: ['./mtpl-policy.component.css']
})
export class MTPLPolicyComponent implements OnInit {

  constructor(private _commonData:CommonDataService) { }

  ngOnInit(): void {
  }
  toggle1=false
  toggle2=true
  toggle3=false
  toggle4=true
  toggle5=true
  toggle6=true
  personalInformation
  contactInformation
  vehicleOwnerInformation
  vehicleOwner
  deliveryInformation
formData


  personalData=(data)=>{
    this.personalInformation=data
    console.log(this.personalInformation);
    
  }

  vehicleOwnerData=(data)=>{
    this.vehicleOwner=data
    console.log(this.vehicleOwner);
    
  }
  
  deliveryData=(data)=>{
    this.deliveryInformation=data;
    this.formData={
      personalInformation:this.personalInformation,
      contactInformation:"",
      vehicleOwnerInformation:"",
      deliveryInformation:this.deliveryInformation
    
      }
    this._commonData.policyData.next(this.formData)
  }

}
