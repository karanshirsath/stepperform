import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-owner',
  templateUrl: './vehicle-owner.component.html',
  styleUrls: ['./vehicle-owner.component.css']
})
export class VehicleOwnerComponent implements OnInit {
  
  Details:FormGroup;
  citizens=['Indian','American','African'];
  constructor(private formBuilder: FormBuilder) { }

    success(){
      console.log(this.Details.value);
    }
   

  ngOnInit(): void {
    this.Details = this.formBuilder.group({
      Number: ['', Validators.required],
      fullname:this.formBuilder.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        surname:[]
      }),
      fullnameeng:this.formBuilder.group({
        firstnameeng:['',Validators.required],
        lastnameeng:['',Validators.required],
        surnameeng:[]
      }),
      citizen:['',Validators.required],
      birth:['',Validators.required],
      city:['',Validators.required],
      street:['',Validators.required],
      No:['',Validators.required]
    });
  }
  
  private selectedLink: string="Yes";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { 
            return false;  
  }  
  
        return (this.selectedLink === name);  
    }  
 
 

}
