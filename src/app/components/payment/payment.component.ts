import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isSubmitted=false;
  isChecked=false;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    return this.isSubmitted=true;
  }
  checked(){
    return this.isChecked=true;
  }
}
