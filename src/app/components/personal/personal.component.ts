import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personalForm:FormGroup;
  citizens=['Indian','American','African'];
  constructor(private formBuilder:FormBuilder) { }
  success(){
    console.log(this.personalForm.value);
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
