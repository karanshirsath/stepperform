import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: ['', Validators.required],
      No: ['', Validators.required],
      block:[''],
      entrance:[''],
      appartment:[''],
      phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]]
    });
  }
  submit=()=>{
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
