import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent implements OnInit {
  installmentForm: FormGroup;
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit()  {
    this.installmentForm=this.formBuilder.group({
      term: ['',Validators.required]
      
    });
    
  }
  submitInstalmentForm(){
    
    this.router.navigate(['/']);
  }
  submit=()=>{
    console.log(this.installmentForm.value, "policy details");
    this.OnRegister.emit(this.installmentForm.value);
  }
  change=()=>{
    if(this.installmentForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.installmentForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }

  get formControl(){
    return this.installmentForm.controls
  }
  
}
