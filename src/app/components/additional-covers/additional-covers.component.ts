import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  @Output() NextTab = new EventEmitter()
  imageUrl="./assets/carlogo.jpeg ";;
  tickimage="./assets/tick.jpg";
  additionalcoverForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService) { }

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
    this.GAService.event('Next Button clicked','Additional Covers','Next')
    console.log(this.additionalcoverForm.value, "additional covers");
    this.OnRegister.emit(this.additionalcoverForm.value);
    this.NextTab.emit(1)
  }

}
