import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()

  detailsForm: FormGroup;

  cities:String[] = ["New Delhi","Mumbai", "Chennai", "Bangalore", "Kolkata", "Mysore", "Pune", "Jaipur"];

  codes:number[] = [55, 86, 33, 49, 91];

  submitted:boolean = false;

  change=()=>{
    if(this.detailsForm.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.detailsForm.value);
    }else{
      this.OnToggle.emit(false)
      // this.OnRegister.emit(this.personalForm.value);
    }
  }
  toggle() {
    this.submitted = true;
  }

  toggle1() {
    this.submitted = false;
  }

  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      city: ['New Delhi', Validators.required],
      pincode: ['', Validators.compose([Validators.required,Validators.maxLength(6)])],
      street: ['',Validators.compose([Validators.required,Validators.minLength(3)])],
      number: ['', Validators.required],
      block: ['', Validators.required],
      entrance: ['', Validators.required],
      appt: ['', Validators.required],
      contact: ['', Validators.compose([Validators.required,Validators.max(9999999999)])],
      business: ['', Validators.required],
      notes: ['']
    });
  };

  register(){
    this.GAService.event('Next Button clicked','Delivery','Next')
    this.OnRegister.emit(this.detailsForm.value);
  }
  get formControls(){
    return this.detailsForm.controls
  }
}
