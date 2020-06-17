import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent implements OnInit {
  installmentForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit()  {
    this.installmentForm=this.formBuilder.group({
      term: ['',Validators.requiredTrue]
      
    });
    
  }
  submitInstalmentForm(){
    
    this.router.navigate(['/']);
  }
  
}
