import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      policyDate: ['', Validators.required],
      policyLength: ['', Validators.required],
      check1: ['', Validators.requiredTrue],
      check2: ['', Validators.requiredTrue]
    });
  }
  submit=()=>{
    this.GAService.event('Calculate Button clicked','Policy Details','Calculate')
    console.log(this.registerForm.value, "policy details");
    this.OnRegister.emit(this.registerForm.value);
  }
  change=()=>{
    if(this.registerForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.registerForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
  get formControls(){
    return this.registerForm.controls
  }
}
