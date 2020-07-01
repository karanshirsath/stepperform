import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MtplCalculatorService } from '../mtpl-calculator/mtpl-calculator.service';
import { MtplPolicyService } from '../mtpl-policy/mtpl-policy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  optradio: boolean;
  @Input() Ppayment: string;
  @Output() OnSubmission = new EventEmitter<any>();
  enable: boolean = true;
  constructor(private mtplCalculatorService:MtplCalculatorService, private mtplPolicyService:MtplPolicyService) { }

  ngOnInit(): void {
  }
  check() {
    this.optradio = true;
  }
  box(e) {
    if (e.target.checked) {
      this.enable = false;
    }
    else {
      this.enable = true;
    }
  }
  action() {
    this.OnSubmission.emit('Payment method selected!')
  }
  getData=()=>{
    alert("Check console for see data saved at Backend")
    let idObj={id:sessionStorage.getItem("id")}
    this.mtplCalculatorService.getData(idObj).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
    this.mtplPolicyService.getData(idObj).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }
}
