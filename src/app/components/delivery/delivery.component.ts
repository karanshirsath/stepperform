import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  detailsForm: FormGroup;

  cities:String[] = ["New Delhi","Mumbai", "Chennai", "Bangalore", "Kolkata", "Mysore", "Pune", "Jaipur"];

  codes:number[] = [55, 86, 33, 49, 91];

  submitted:boolean = false;

  toggle() {
    this.submitted = true;
  }

  toggle1() {
    this.submitted = false;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      city: this.formBuilder.group({
        cityName: ['', Validators.required],
        pinCode: ['', Validators.required]
      }),
      street: ['',Validators.required],
      number: ['', Validators.required],
      block: ['', Validators.required],
      entrance: ['', Validators.required],
      appt: ['', Validators.required],
      contactNumber: ['', Validators.required],
      businessType: ['', Validators.required],
      notes: ['']
    });
  };

}
