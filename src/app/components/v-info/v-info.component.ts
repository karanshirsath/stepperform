import { Component, OnInit, Output,EventEmitter,Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';


@Component({
  selector: 'app-v-info',
  templateUrl: './v-info.component.html',
  styleUrls: ['./v-info.component.css']
})
export class VInfoComponent implements OnInit{
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() registrationNumber:string;
  @Input() certificateNumber:string;
  @Input() purpose:string;
  @Input() yesNo:string;
 vehicleInfoForm:FormGroup;
 purposeList =['Personal Use','Public Use']
  constructor(private router: Router, private formBuilder:FormBuilder, private GAService : GoogleAnalyticsService ) { } 

  ngOnInit(): void {
    this.vehicleInfoForm=this.formBuilder.group({
      registrationNumber:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      certificateNumber:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
      purpose:['',Validators.required],
      yesNo:['Yes',Validators.required]
    })
  }
    submit=() => {
      this.GAService.event('Next Button clicked','Vehicle Infomation','Next')
      //this.router.navigate(['./insuring-party.component']);
      console.log(this.vehicleInfoForm.value,"vehicle Info");
      // this.OnToggle.emit(true)
      this.OnRegister.emit(this.vehicleInfoForm.value);
       // setTimeout(this.OnToggle.emit(true),)
       this.OnSubmission.emit('Vehicle Information form is submitted!');
    }
    change=()=>{
      
      if(this.vehicleInfoForm.valid){
        this.OnToggle.emit(true)
        this.OnRegister.emit(this.vehicleInfoForm.value);
      }else{
        this.OnToggle.emit(false)
        // this.OnRegister.emit(this.vehicleInfoForm.value);
      }
    }

    get formsControl(){
      return this.vehicleInfoForm.controls;
    }
  }


