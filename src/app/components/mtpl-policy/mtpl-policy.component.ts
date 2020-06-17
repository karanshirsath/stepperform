import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtpl-policy',
  templateUrl: './mtpl-policy.component.html',
  styleUrls: ['./mtpl-policy.component.css']
})
export class MTPLPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle1=false
  toggle2=true
  toggle3=true
  toggle4=true
  toggle5=true
  toggle6=true
  personalInformation

  personalData=(data)=>{
    this.personalInformation=data
    console.log(data);
    
  }

}
