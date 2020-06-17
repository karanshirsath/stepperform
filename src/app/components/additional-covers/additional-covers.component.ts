import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  imageUrl="./assets/carlogo.jpeg ";;
  tickimage="./assets/tick.jpg";
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      none: ['', Validators.requiredTrue],
      premium: ['', Validators.requiredTrue],
      vip: ['', Validators.requiredTrue],
    });
 }
  submit=()=>{
    console.log(this.registerForm.value, "policy details");
  }

 
}
