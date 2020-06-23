import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { InstallmentService } from './installment.service';
import { AdditionalCoversComponent } from '../additional-covers/additional-covers.component';
import { CommonDataService } from 'src/app/common-data.service';

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
 obj
 name='karan'
 
  constructor(private formBuilder: FormBuilder,private router: Router, private GAService: GoogleAnalyticsService, private installmentService:InstallmentService,private com:CommonDataService) { }

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
    this.OnRegister.emit(this.obj);
  }
  change=()=>{
   
    for(let element of this.serviceData){
      if(element.title==this.installmentForm.value.term){
        var obj={
          term:this.installmentForm.value.term,
          installments:element.installments,
          amount:element.amount
          // installment:this.serviceData[this.installmentForm.value]
        }
        this.obj=obj
       
        
        
      }
    }
    if(this.installmentForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(obj);
    }else{
      this.OnToggle.emit(false)
    }
    this.com.installmentData.next(obj)
    
  }

  get formControl(){
    return this.installmentForm.controls
  }
  
}
