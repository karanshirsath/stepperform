import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @Output() OnRegister= new EventEmitter();
  @Output() OnToggle=new EventEmitter();
 @Input() fullName:String;
  @Input() city:string;
  @Input() pincode:String;
  @Input() street:String;
  @Input() number :String;
  @Input() block:String;
  @Input() entrance:String;
  @Input() appt:String;
  @Input() notes:String;
  @Input() business:String;
  @Input() contact:String;
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
      fullName: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z ]+")])],
      city: ['', Validators.required],
      pincode: ['', Validators.compose([Validators.required,Validators.maxLength(6)])],
      street: [''],
      number: [''],
      block: [''],
      entrance: [''],
      appt: [''],
      contact: ['', Validators.compose([Validators.required,Validators.max(999999999),Validators.min(10000000)])],
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
