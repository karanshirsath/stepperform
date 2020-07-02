import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  @Output() OnToggle = new EventEmitter();
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() DfullName: string;
  @Input() Dcity: string;
  @Input() Dpincode: string;
  @Input() Dstreet: string;
  @Input() Dnumber: string;
  @Input() Dblock: string;
  @Input() Dentrance: string;
  @Input() Dappt: string;
  @Input() Dnotes: string;
  @Input() Dtype: string;
  @Input() Dcontact: string;
  detailsForm: FormGroup;

  cities: string[] = ['New Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Mysore', 'Pune', 'Jaipur'];

  codes: number[] = [55, 86, 33, 49, 91];

  submitted = false;

  change = () => {
    if (this.detailsForm.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.deliveryinformation.next(this.detailsForm.value);
    } else {
      this.OnToggle.emit(false);
    }
  }
  toggle() {
    this.submitted = true;
  }

  toggle1() {
    this.submitted = false;
  }

  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService, private commonDataService: CommonDataService) { }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]+')])],
      city: ['', Validators.required],
      pincode: ['', Validators.compose([Validators.required, Validators.maxLength(6)])],
      street: [''],
      number: [''],
      block: [''],
      entrance: [''],
      appt: [''],
      contact: ['', Validators.compose([Validators.required, Validators.max(999999999), Validators.min(10000000)])],
      business: ['', Validators.required],
      notes: ['']
    });
  }

  register() {
    this.GAService.event('Next Button clicked', 'Delivery', 'Next');
    this.commonDataService.deliveryinformation.next(this.detailsForm.value);
    this.OnSubmission.emit('Delivery form is submitted!');
  }
  get formControls() {
    return this.detailsForm.controls;
  }
}
