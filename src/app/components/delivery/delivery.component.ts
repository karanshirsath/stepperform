import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  @Input() DfullName: String;
  @Input() Dcity: string;
  @Input() Dpincode: String;
  @Input() Dstreet: String;
  @Input() Dnumber: String;
  @Input() Dblock: String;
  @Input() Dentrance: String;
  @Input() Dappt: String;
  @Input() Dnotes: String;
  @Input() Dtype: String;
  @Input() Dcontact: String;
  detailsForm: FormGroup;

  cities: String[] = ["New Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Mysore", "Pune", "Jaipur"];

  codes: number[] = [55, 86, 33, 49, 91];

  submitted: boolean = false;

  change = () => {
    if (this.detailsForm.valid) {
      this.OnToggle.emit(true)
      this.commonDataService.deliveryinformation.next(this.detailsForm.value)
    } else {
      this.OnToggle.emit(false)
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
      fullName: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+")])],
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
  };

  register() {
    this.GAService.event('Next Button clicked', 'Delivery', 'Next')
    this.commonDataService.deliveryinformation.next(this.detailsForm.value)
    this.OnSubmission.emit('Delivery form is submitted!')
  }
  get formControls() {
    return this.detailsForm.controls
  }
}
