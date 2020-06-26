import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() fullName:String;
  @Input() email:String;
  @Input() password:String;
  @Input() confirmPassword:String;
  @Input() mobile:Number;
  signUpForm:FormGroup
  errorMessage
  constructor(private fb:FormBuilder, private router:Router, private signUpService:SignUpService) { }



  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      // fullName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    },{validator:passwordValidator})
  }

  register=()=>{
    // if(this.signUpForm.value.password==this.signUpForm.value.confirmPassword){
    //   console.log(this.signUpForm.value);
    //   this.router.navigate(["/signIn"]);
    // }
    // else{
    //   alert('password should be same')
    // }
    console.log(this.signUpForm.value);
    
    // this.router.navigate(["/signIn"])
    this.signUpService.registerUser(this.signUpForm.value).subscribe((res)=>{
      console.log(res);
      var response=JSON.parse(JSON.stringify(res))
      // sessionStorage.setItem("id",response.id)
      // sessionStorage.setItem("token",response.token)
      alert("You are registered Succussfully")
      setTimeout(()=>{
      this.router.navigate(["/signIn"])
      })
    },(err)=>{
      this.errorMessage=err.error.error.errors[0].message
      console.log(this.errorMessage);     
      
      
    })
    
  }

  

}
function passwordValidator(c:AbstractControl) {
  const password=c.get('password')
  const confirmPassword=c.get('confirmPassword')
  if(password.pristine || confirmPassword.pristine){
    return null
  }
  return password.value != confirmPassword.value ? {'misMatch':true} : null
  
  
}