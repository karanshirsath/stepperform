import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-insuring-party',
  templateUrl: './insuring-party.component.html',
  styleUrls: ['./insuring-party.component.css']
})
export class InsuringPartyComponent implements OnInit {
  @Output() OnRegister= new EventEmitter()
  @Output() OnToggle=new EventEmitter()
  @Input() egn: string;
  @Input() address: string;
  @Input() email: string;
  insuringParty: FormGroup;
  addressList=['Sofia','Varna','Burgas']
  constructor(private router: Router, private fb: FormBuilder, private GAService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.insuringParty = this.fb.group({
      egn: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      address: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])]
    });
  }

  submit = () => {
    this.GAService.event('Next Button clicked', 'Insuring Party', 'Next')
    console.log(this.insuringParty.value, "insuring party");
    this.OnRegister.emit(this.insuringParty.value);
  }
  change = () => {

    if (this.insuringParty.valid) {
      this.OnToggle.emit(true)
      this.OnRegister.emit(this.insuringParty.value);
    } else {
      this.OnToggle.emit(false)
    }
  }
  get formsControl() {
    return this.insuringParty.controls
  }
}
