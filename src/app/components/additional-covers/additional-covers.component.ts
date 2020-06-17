import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  imageUrl="./assets/carlogo.jpeg ";;
  tickimage="./assets/tick.jpg";
  registerForm: FormGroup;
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      cover: ['', Validators.required],
  
    });
 }
  
  change=()=>{
    if(this.registerForm.valid){
      this.OnToggle.emit(true);
      this.OnRegister.emit(this.registerForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
  next=()=>{
    this.router.navigate(['/']);
    this.OnRegister.emit(this.registerForm.value);
  }

 
}
