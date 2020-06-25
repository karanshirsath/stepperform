import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  errorMessage;
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  @Input() term: string
  serviceData
 obj
 name='karan';

 @Output() OnSinglePayment = new EventEmitter<any>();
 @Output() OnTwoPayments = new EventEmitter<any>();
 @Output() OnFourPayments = new EventEmitter<any>();
 @Output() OnSubmission = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,private router: Router, private GAService: GoogleAnalyticsService, private installmentService:InstallmentService,private com:CommonDataService) { }

  ngOnInit()  {
    this.installmentForm=this.formBuilder.group({
      term: ['',Validators.required],
      installment:['']
    });
    this.installmentService.getInstallmentData().subscribe((res)=>{
      this.serviceData=res;
      console.log(res);
      
    },
    (err)=>{
      this.errorMessage=err.error.message;
      console.log(this.errorMessage);
      
    })
    console.log(this.serviceData);
    
  }
  submitInstalmentForm(){
    
    this.router.navigate(['/']);
  }
  submit=()=>{
    this.GAService.event('Next Button clicked','Installment','Next')
    this.OnRegister.emit(this.obj);
    this.OnSubmission.emit('Installemt form is submitted!')
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
    this.com.installmentData.next(obj);
    // code for storybook START
    if(this.obj.term == this.serviceData[0].title)
      this.OnSinglePayment.emit('You have opted Single Payment option');
    else if(this.obj.term == this.serviceData[1].title)
      this.OnTwoPayments.emit('You have opted Two Payments option');
    else
      this.OnFourPayments.emit('You have opted Four Payments option');
    // code for storybook START
  }

  get formControl(){
    return this.installmentForm.controls
  }
  
}
