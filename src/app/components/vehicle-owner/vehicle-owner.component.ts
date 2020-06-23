import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-vehicle-owner',
  templateUrl: './vehicle-owner.component.html',
  styleUrls: ['./vehicle-owner.component.css']
})
export class VehicleOwnerComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()

  // Input fields
  @Input() lnch:String;
  @Input() firstname:String;
  @Input() lastname:String;
  @Input() surname:String;

  @Input() firstnameeng:String;
  @Input() lastnameeng:String;
  @Input() surnameeng:String;
  @Input() citizen:String;
  @Input() dob:Date;
  @Input() city:String;
  @Input() pincode:String;
  @Input() street:String;
  @Input() No:String;
  @Input() block:String;
  @Input() entrance:String;
  @Input() appartment:String;

  Details: FormGroup;
  citizens = ['Indian', 'American', 'African'];
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

  // success() {
  //   console.log(this.Details.value);
  // }


  ngOnInit(): void {
    this.Details = this.formBuilder.group({
      lnch: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      fullname: this.formBuilder.group({
        firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastname:['',Validators.pattern("^[a-zA-Z]*$")],
        surname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      fullnameeng: this.formBuilder.group({
        firstnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastnameeng:['',Validators.pattern("^[a-zA-Z]*$")],
        surnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      citizen: ['', Validators.required],
      birth: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: [''],
      No: [''],
      block:[''],
      entrance:[''],
      appartment:[''],
    });
  }

  private selectedLink: string = "Yes";

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) {
      return false;
    }

    return (this.selectedLink === name);
  }

  submit=()=>{
    this.GAService.event('Next Button clicked','Vehicle Owner','Next')
    console.log(this.Details.value, "vehicle owner");
    this.OnRegister.emit(this.Details.value);
  }
  gaTrigger=()=>{
    this.GAService.event('Next Button clicked','Vehicle Owner','Next')
  }
  change=()=>{
    if(this.Details.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.Details.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
  button=false
  toggle=(data)=>{
    if(data){
      this.OnToggle.emit(true)
      this.OnRegister.emit("Yes");
      this.button=true
    }else{
      this.change()
    }
  }
  // next=()=>{
  //   console.log(this.selectedLink, "vehicle owner");
  //   this.OnRegister.emit(10);
  // }

}
