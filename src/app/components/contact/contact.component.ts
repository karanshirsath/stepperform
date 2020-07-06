import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';
import { ProvincesService } from '../provinces.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() OnToggle = new EventEmitter();
  @Output() OnSubmission = new EventEmitter<any>();
  @Input() Ccity: string;
  @Input() Cpincode: string;
  @Input() Cstreet: string;
  @Input() CNo: string;
  @Input() Cblock: string;
  @Input() Centrance: string;
  @Input() Cappartment: string;
  @Input() Cphone: string;
  registerForm: FormGroup;
  provincesArray;
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService,
              private provServ: ProvincesService, private commonDataService: CommonDataService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: ['', Validators.required],
      No: ['', Validators.required],
      block: [''],
      entrance: [''],
      appartment: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8), Validators.maxLength(9)]]
    });
    this.getProvinces();
  }
  submit = () => {
    this.GAService.event('Next Button clicked', 'Contact Details', 'Next');
    this.commonDataService.contactinformation.next(this.registerForm.value);
    this.OnSubmission.emit('Contact Details form is submitted!');
  }
  getProvinces = () => {
    this.provServ.getProvinces().subscribe((res) => {
      this.provincesArray = res;
    });

  }
  change = () => {
    if (this.registerForm.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.contactinformation.next(this.registerForm.value);
    } else {
      this.OnToggle.emit(false);
    }
  }
}
