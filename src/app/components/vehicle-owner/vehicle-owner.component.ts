import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { }

  // success() {
  //   console.log(this.Details.value);
  // }


  ngOnInit(): void {
    this.Details = this.formBuilder.group({
      Number: ['', Validators.required],
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
      No: ['', Validators.required]
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
    console.log(this.Details.value, "vehicle owner");
    this.OnRegister.emit(this.Details.value);
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
