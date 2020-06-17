import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  imageUrl="./assets/carlogo.jpeg ";;
  tickimage="./assets/tick.jpg";
  additionalcoverForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.additionalcoverForm = this.formBuilder.group({
      cover: ['', Validators.required],
    });
 }
  
  change=()=>{
    if(this.additionalcoverForm.valid){
      this.OnToggle.emit(true);
      this.OnRegister.emit(this.additionalcoverForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
  next=()=>{
    console.log(this.additionalcoverForm.value, "additional covers");
    this.OnRegister.emit(this.additionalcoverForm.value);
  }

}
