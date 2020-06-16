import { Component, OnInit, Output,EventEmitter,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {StepperComponent} from 'src/app/stepper/stepper.component'


@Component({
  selector: 'app-v-info',
  templateUrl: './v-info.component.html',
  styleUrls: ['./v-info.component.css']
})
export class VInfoComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
 vehicleInfoForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { } 

  ngOnInit(): void {
    this.vehicleInfoForm=this.formBuilder.group({
      registrationNumber:['',Validators.required,Validators.min(8),Validators.max(8)],
      certificateNumber:['',Validators.required,Validators.min(9),Validators.max(9)],
      purpose:['',Validators.required],
      ysNo:['',Validators.required]
    });}
    submit=() => {
      console.log(this.vehicleInfoForm.value,"vehicle Info");
      this.OnRegister.emit(this.vehicleInfoForm.value);

    }
    change=()=>{
      if(this.vehicleInfoForm.valid){
        this.OnToggle.emit(true)
      }else{
        this.OnToggle.emit(false)
      }
    }
  }


