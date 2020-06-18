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
      email: ['', Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])]

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
  get formsControl(){
    return this.insuringParty.controls
  }
}
