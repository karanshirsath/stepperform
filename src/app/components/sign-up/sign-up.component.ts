import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup

  constructor(private fb:FormBuilder) { }



  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      phoneNo:['',[Validators.required]]
    })
  }

  register=()=>{
    if(this.signUpForm.value.password==this.signUpForm.value.confirmPassword){
      console.log(this.signUpForm.value);
    }
    else{
      alert('password should be same')
    }
   
    
  }

}
