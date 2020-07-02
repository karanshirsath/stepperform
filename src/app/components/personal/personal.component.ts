import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Output() OnToggle = new EventEmitter();
  @Output() OnSubmission = new EventEmitter<any>();

  @Input() plnch: string;
  @Input() pfirstname: string;
  @Input() plastname: string;
  @Input() psurname: string;

  @Input() pfirstnameeng: string;
  @Input() plastnameeng: string;
  @Input() psurnameeng: string;
  @Input() pcitizen: string;
  @Input() pdob: Date;
  personalForm: FormGroup;
  citizens = ['Indian', 'American', 'African'];
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService, private commonDataService: CommonDataService) { }
  success() {
    this.GAService.event('Next Button clicked', 'Personal Details', 'Next');
    this.commonDataService.personalinformation.next(this.personalForm.value);
    this.OnSubmission.emit('Personal Details form is submitted!');
  }
  change = () => {

    if (this.personalForm.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.personalinformation.next(this.personalForm.value);
    } else {
      this.OnToggle.emit(false);
    }
  }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      lnch: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fullname: this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.maxLength(20)]],
        lastname: ['', Validators.pattern('^[a-zA-Z]*$')],
        surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.maxLength(20)]]
      }),
      fullnameeng: this.formBuilder.group({
        firstnameeng: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.maxLength(20)]],
        lastnameeng: ['', Validators.pattern('^[a-zA-Z]*$')],
        surnameeng: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.maxLength(20)]]
      }),
      citizen: ['', Validators.required],
      birth: ['', Validators.required]
    });
  }

}
