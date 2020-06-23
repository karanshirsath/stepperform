import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { InstallmentService } from './installment.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent implements OnInit {
  installmentForm: FormGroup;
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  serviceData
  constructor(private formBuilder: FormBuilder,private router: Router, private GAService: GoogleAnalyticsService, private installmentService:InstallmentService) { }

  ngOnInit()  {
    this.installmentForm=this.formBuilder.group({
      term: ['',Validators.required],
      installment:['']
    });
    this.serviceData=this.installmentService.getInstallmentData()
    console.log(this.serviceData);
    
  }
  submitInstalmentForm(){
    
    this.router.navigate(['/']);
  }
  submit=()=>{
    this.GAService.event('Next Button clicked','Installment','Next')
    console.log(this.installmentForm.value, "policy details");
    this.OnRegister.emit(this.installmentForm.value);
  }
  change=()=>{
    var obj={
      term:this.installmentForm.value,
      // installment:this.serviceData[this.installmentForm.value]
    }
    for(let element of this.serviceData){
      if(element.title==this.installmentForm.value.term){
        
      }
    }
    if(this.installmentForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.installmentForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }

  get formControl(){
    return this.installmentForm.controls
  }
  
}
