import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  optradio:boolean;
  @Input() payment: string;
  @Output() OnSubmission = new EventEmitter<any>();
  enable:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  check(){
    this.optradio=true;
  }
  box(e){
   if(e.target.checked){
    this.enable=false;
   }
   else{
     this.enable=true;
   }
  }
  action(){
    this.OnSubmission.emit('Payment method selected!')
  }

}
