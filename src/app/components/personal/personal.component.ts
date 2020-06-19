import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

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
  constructor(private formBuilder:FormBuilder) { }
  success(){
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
      lnch:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      fullname:this.formBuilder.group({
        firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastname:['',Validators.pattern("^[a-zA-Z]*$")],
        surname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      fullnameeng:this.formBuilder.group({
        firstnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastnameeng:['',Validators.pattern("^[a-zA-Z]*$")],
        surnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      citizen:['',Validators.required],
      birth:['',Validators.required]
    });
  }

}
