import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  Details: FormGroup;
  citizens = ['Indian', 'American', 'African'];
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

  // success() {
  //   console.log(this.Details.value);
  // }


  ngOnInit(): void {
    this.Details = this.formBuilder.group({
      lnch: ['', Validators.required],
      fullname: this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        surname: []
      }),
      fullnameeng: this.formBuilder.group({
        firstnameeng: ['', Validators.required],
        lastnameeng: ['', Validators.required],
        surnameeng: []
      }),
      citizen: ['', Validators.required],
      birth: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      No: ['', Validators.required],
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
