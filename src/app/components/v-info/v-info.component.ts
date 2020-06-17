import { Component, OnInit, Output,EventEmitter,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-v-info',
  templateUrl: './v-info.component.html',
  styleUrls: ['./v-info.component.css']
})
export class VInfoComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
 vehicleInfoForm:FormGroup;
  constructor(private router: Router, private formBuilder:FormBuilder) { } 

  ngOnInit(): void {
    this.vehicleInfoForm=this.formBuilder.group({
      registrationNumber:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      certificateNumber:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
      purpose:['',Validators.required],
      yesNo:['',Validators.required]
    })}
    submit=() => {
      //this.router.navigate(['./insuring-party.component']);
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


