import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';


@Component({
  selector: 'app-v-info',
  templateUrl: './v-info.component.html',
  styleUrls: ['./v-info.component.css']
})
export class VInfoComponent implements OnInit {
  @Output() OnToggle = new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() registrationNumber: string;
  @Input() certificateNumber: string;
  @Input() purpose: string;
  @Input() yesNo: string;
  vehicleInfoForm: FormGroup;
  purposeList = ['Personal Use', 'Public Use']
  constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService, private GAService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.vehicleInfoForm = this.formBuilder.group({
      registrationNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      certificateNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      purpose: ['', Validators.required],
      yesNo: ['Yes', Validators.required]
    })
  }
  submit = () => {
    this.GAService.event('Next Button clicked', 'Vehicle Infomation', 'Next')
    this.commonDataService.vehicleinfo.next(this.vehicleInfoForm.value)
    this.OnSubmission.emit('Vehicle Information form is submitted!');
  }
  change = () => {
    if (this.vehicleInfoForm.valid) {
      this.OnToggle.emit(true)
      this.commonDataService.vehicleinfo.next(this.vehicleInfoForm.value)
    } else {
      this.OnToggle.emit(false)
    }
  }

  get formsControl() {
    return this.vehicleInfoForm.controls;
  }
}


