import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
  personalForm:FormGroup;
  citizens=['Indian','American','African'];
  constructor(private formBuilder:FormBuilder, private GAService: GoogleAnalyticsService) { }
  success(){
    this.GAService.event('Next Button clicked','Personal Details','Next')
    //console.log(this.personalForm.value);
    //console.log(this.personalForm.value,"vehicle Info");
    // this.OnToggle.emit(true)
    this.OnRegister.emit(this.personalForm.value);
  }
  change=()=>{
      
    if(this.personalForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.personalForm.value);
    }else{
      this.OnToggle.emit(false)
      // this.OnRegister.emit(this.personalForm.value);
    }
  }

  ngOnInit(): void {
    this.personalForm=this.formBuilder.group({
      lnch:['',Validators.required],
      fullname:this.formBuilder.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        surname:[]
      }),
      fullnameeng:this.formBuilder.group({
        firstnameeng:['',Validators.required],
        lastnameeng:['',Validators.required],
        surnameeng:[]
      }),
      citizen:['',Validators.required],
      birth:['',Validators.required]
    });
  }

}
