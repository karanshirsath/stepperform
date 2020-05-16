import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  personalInformation: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {this.personalInformation = this._formBuilder.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    gender: ['', Validators.required],
    birth: ['', Validators.required],
    email: ['', Validators.required],
    SSN: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  
  }

}
