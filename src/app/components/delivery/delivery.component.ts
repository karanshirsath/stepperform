import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  cities:String[] = ["New Delhi","Mumbai", "Chennai", "Bangalore", "Kolkata", "Mysore", "Pune", "Jaipur"];

  codes:number[] = [55, 86, 33, 49, 91];

  submitted:boolean = false;

  toggle() {
    this.submitted = true;
  }

  toggle1() {
    this.submitted = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
