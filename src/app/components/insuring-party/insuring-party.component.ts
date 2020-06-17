import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insuring-party',
  templateUrl: './insuring-party.component.html',
  styleUrls: ['./insuring-party.component.css']
})
export class InsuringPartyComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
  insuringParty: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.insuringParty = this.fb.group({
      egn: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // next() {
  //   this.router.navigate(['/policy_details']);
  // }
  submit=() => {
    console.log(this.insuringParty.value,"insuring party");
    this.OnRegister.emit(this.insuringParty.value);

  }
  change=()=>{
    
    if(this.insuringParty.valid){
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.insuringParty.value);
    }else{
      this.OnToggle.emit(false)
    }
  }
}
