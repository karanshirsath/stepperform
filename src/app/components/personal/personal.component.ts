import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();

  @Input() lnch:String;
  @Input() firstname:String;
  @Input() lastname:String;
  @Input() surname:String;

  @Input() firstnameeng:String;
  @Input() lastnameeng:String;
  @Input() surnameeng:String;
  @Input() citizen:String;
  @Input() dob:Date;
  personalForm:FormGroup;
  citizens=['Indian','American','African'];
  constructor(private formBuilder:FormBuilder, private GAService: GoogleAnalyticsService,private commonDataService:CommonDataService) { }
  success(){
    this.GAService.event('Next Button clicked','Personal Details','Next')
    //console.log(this.personalForm.value);
    //console.log(this.personalForm.value,"vehicle Info");
    // this.OnToggle.emit(true)
    this.commonDataService.personalinformation.next(this.personalForm.value)
    this.OnRegister.emit(this.personalForm.value);
    this.OnSubmission.emit('Personal Details form is submitted!')
  }
  change=()=>{
      
    if(this.personalForm.valid){
      this.OnToggle.emit(true)
      this.commonDataService.personalinformation.next(this.personalForm.value)
      this.OnRegister.emit(this.personalForm.value);
    }else{
      this.OnToggle.emit(false)
      // this.OnRegister.emit(this.personalForm.value);
    }
  }

  ngOnInit(): void {
    this.personalForm=this.formBuilder.group({
      lnch:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      fullname:this.formBuilder.group({
        firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastname:['',Validators.pattern("^[a-zA-Z]*$")],
        surname:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      fullnameeng:this.formBuilder.group({
        firstnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]],
        lastnameeng:['',Validators.pattern("^[a-zA-Z]*$")],
        surnameeng:['',[Validators.required,Validators.pattern("^[a-zA-Z]*$"),Validators.maxLength(20)]]
      }),
      citizen:['',Validators.required],
      birth:['',Validators.required]
    });
  }

}
