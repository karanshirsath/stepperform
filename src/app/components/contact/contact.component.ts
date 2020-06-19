import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: [''],
      No: [''],
      block:[''],
      entrance:[''],
      appartment:[''],
      phone:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.minLength(8),Validators.maxLength(9)]]
    });
  }
  submit=()=>{
    this.GAService.event('Next Button clicked','Contact Details','Next')
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
}
