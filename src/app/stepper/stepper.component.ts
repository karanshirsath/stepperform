import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonDataService } from '../common-data.service';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  status= false;
  personalInformation: FormGroup;
  addressForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _commonData:CommonDataService) { }

  ngOnInit(): void {this.personalInformation = this._formBuilder.group({
    first: ['', [Validators.required,Validators.pattern(/^[A-z][A-z]+$/)]],
    middle: ['', ],
    last: ['', [Validators.required,Validators.pattern(/^[A-z][A-z]+$/)]],
    gender: ['', Validators.required],
    birth: ['', Validators.required],
    email: ['', [Validators.required,Validators.pattern(/^[A-z][A-z0-9]+(@)[A-z]+(.com)$/)]],
    SSN: ['', Validators.required]
  });
  this.addressForm = this._formBuilder.group({
    mailingAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    phoneNo: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    
  });
  
  }
  checked(event){
this.status=event.checked

  }
  onSubmit(){
    console.log(this.personalInformation.value);
    console.log(this.addressForm.value);
    this._commonData.formData.next(this.personalInformation.value)
    
    
    
  }

}
