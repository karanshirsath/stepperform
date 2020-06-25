import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() city:string;
  @Input() pincode:String;
  @Input() street:String;
  @Input() No:String;
  @Input() block:String;
  @Input() entrance:String;
  @Input() appartment:String;
  @Input() phone:String;
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
    this.OnSubmission.emit('Contact Details form is submitted!')
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
