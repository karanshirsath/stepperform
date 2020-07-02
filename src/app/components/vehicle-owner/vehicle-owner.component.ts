import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-vehicle-owner',
  templateUrl: './vehicle-owner.component.html',
  styleUrls: ['./vehicle-owner.component.css']
})
export class VehicleOwnerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService, private commonDataService: CommonDataService) { }
  @Output() OnToggle = new EventEmitter();
  @Output() OnSubmission = new EventEmitter<any>();

  // Input fields
  @Input() Vowner: string;
  @Input() Vlnch: string;
  @Input() Vfirstname: string;
  @Input() Vlastname: string;
  @Input() Vsurname: string;

  @Input() Vfirstnameeng: string;
  @Input() Vlastnameeng: string;
  @Input() Vsurnameeng: string;
  @Input() Vcitizen: string;
  @Input() Vdob: Date;
  @Input() Vcity: string;
  @Input() Vpincode: string;
  @Input() Vstreet: string;
  @Input() VNo: string;
  @Input() Vblock: string;
  @Input() Ventrance: string;
  @Input() Vappartment: string;

  Details: FormGroup;
  citizens = ['Indian', 'American', 'African'];

  private selectedLink = 'Yes';
  button = false;

  ngOnInit(): void {
    this.Details = this.formBuilder.group({
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
      birth: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      street: [''],
      No: [''],
      block: [''],
      entrance: [''],
      appartment: [''],
    });
  }

  setradio(e: string): void {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }
    return (this.selectedLink === name);
  }

  submit = () => {
    this.GAService.event('Next Button clicked', 'Vehicle Owner', 'Next');
    this.commonDataService.vehicleownerinformation.next(this.Details.value);
    this.OnSubmission.emit('Vehicle owner information form is submitted!');
  }
  gaTrigger = () => {
    this.GAService.event('Next Button clicked', 'Vehicle Owner', 'Next');
  }
  change = () => {
    if (this.Details.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.vehicleownerinformation.next(this.Details.value);
    } else {
      this.OnToggle.emit(false);
    }
  }
  toggle = (data) => {
    if (data) {
      this.OnToggle.emit(true);
      let personalinformation;
      this.commonDataService.personalinformation.subscribe((data1) => personalinformation = data1);
      let contactinformation;
      this.commonDataService.contactinformation.subscribe(data1 => contactinformation = data1);

      const vehicleOwnerData = {
        lnch: personalinformation.lnch,
        fullname: {
          firstname: personalinformation.fullname.firstname,
          lastname: personalinformation.fullname.lastname,
          surname: personalinformation.fullname.surname
        },
        fullnameeng: {
          firstnameeng: personalinformation.fullnameeng.firstnameeng,
          lastnameeng: personalinformation.fullnameeng.lastnameeng,
          surnameeng: personalinformation.fullnameeng.surnameeng
        },
        citizen: personalinformation.citizen,
        birth: personalinformation.birth,
        city: contactinformation.city,
        pincode: contactinformation.pincode,
        street: contactinformation.street,
        No: contactinformation.No,
        block: contactinformation.block,
        entrance: contactinformation.entrance,
        appartment: contactinformation.appartment,
      };
      this.commonDataService.vehicleownerinformation.next(vehicleOwnerData);
      this.button = true;
    } else {
      this.change();
    }
  }
}
