import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ProvincesService } from '../provinces.service';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() OnRegister = new EventEmitter()
  @Output() OnToggle = new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() city:string;
  @Input() pincode:String;
  @Input() street:String;
  @Input() No:String;
  @Input() block:String;
  @Input() entrance:String;
  @Input() appartment:String;
  @Input() phone:String;
  registerForm: FormGroup;
  provincesArray
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService,private provServ:ProvincesService, private commonDataService:CommonDataService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: [''],
      No: [''],
      block:[''],
      entrance:[''],
      appartment:[''],
      phone:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.minLength(8),Validators.maxLength(9)]]
    });
    this.getProvinces()
  }
  submit=()=>{
    this.GAService.event('Next Button clicked','Contact Details','Next')
    console.log(this.registerForm.value, "policy details");
    this.commonDataService.contactinformation.next(this.registerForm.value)
    this.OnRegister.emit(this.registerForm.value);  
    this.OnSubmission.emit('Contact Details form is submitted!')
  }
  getProvinces=()=>{
 this.provServ.getProvinces().subscribe((res)=>{
   this.provincesArray=res
   console.log(res[0].pname);
 })

  }
  change=()=>{
    if(this.registerForm.valid){
      this.OnToggle.emit(true)
      this.commonDataService.contactinformation.next(this.registerForm.value)
      this.OnRegister.emit(this.registerForm.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
}
