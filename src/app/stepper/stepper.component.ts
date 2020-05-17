import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  status= false;
  personalInformation: FormGroup;
  addressForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {this.personalInformation = this._formBuilder.group({
    first: ['', Validators.required],
    middle: ['', ],
    last: ['', Validators.required],
    gender: ['', Validators.required],
    birth: ['', Validators.required],
    email: ['', Validators.required],
    SSN: ['', Validators.required]
  });
  this.addressForm = this._formBuilder.group({
    mailingAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    phoneNo: ['', Validators.required],
    
  });
  
  }
  checked(event){
this.status=event.checked

  }
  onSubmit(){
    console.log(this.personalInformation.value);
    console.log(this.addressForm.value);
    
    
  }

}
