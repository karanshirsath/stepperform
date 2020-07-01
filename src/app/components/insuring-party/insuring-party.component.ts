import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-insuring-party',
  templateUrl: './insuring-party.component.html',
  styleUrls: ['./insuring-party.component.css']
})
export class InsuringPartyComponent implements OnInit {
  @Output() OnToggle = new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() egn: string;
  @Input() address: string;
  @Input() email: string;
  insuringParty: FormGroup;
  addressList = ['Sofia', 'Varna', 'Burgas']
  constructor(private fb: FormBuilder, private commonDataService: CommonDataService, private GAService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.insuringParty = this.fb.group({
      egn: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      address: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])]
    });
  }

  submit = () => {
    this.GAService.event('Next Button clicked', 'Insuring Party', 'Next')
    this.commonDataService.insuringparty.next(this.insuringParty.value)
    this.OnSubmission.emit('Insuring Party form is submitted!')
  }
  change = () => {
    if (this.insuringParty.valid) {
      this.OnToggle.emit(true)
      this.commonDataService.insuringparty.next(this.insuringParty.value)
    } else {
      this.OnToggle.emit(false)
    }
  }
  get formsControl() {
    return this.insuringParty.controls
  }
}
