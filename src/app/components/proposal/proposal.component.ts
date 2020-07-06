import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/common-data.service';
import { MtplCalculatorService } from '../mtpl-calculator/mtpl-calculator.service';
import { MtplPolicyService } from '../mtpl-policy/mtpl-policy.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  constructor(private fb: FormBuilder, private commonDataService: CommonDataService,
              private mtplCalculatorService: MtplCalculatorService, private mtplPolicyService: MtplPolicyService) { }

  summaryForm: FormGroup;
  first = '170.27 BGN';
  secondI = '182.40 BGN';
  third = '';
  fourth = 'abcd';
  sdate = '04-03-54';
  mtplCalculatorData;
  mtplPolicyData;
  installmentData;
  @Output() changeStep = new EventEmitter();
  @Output() moveTab = new EventEmitter();
  @Output() OnInstallment = new EventEmitter<any>();
  @Output() OnAdditionalCovers = new EventEmitter<any>();
  @Output() OnVehicleInfo = new EventEmitter<any>();
  @Output() OnInsuringParty = new EventEmitter<any>();
  @Output() OnVehicleOwner = new EventEmitter<any>();
  @Output() OnDelivery = new EventEmitter<any>();
  @Output() OnPolicyDates = new EventEmitter<any>();

  vehicleinfo;
  insuringparty;
  policy;
  installment;
  additionalcovers;
  contactinformation;
  deliveryinformation;
  personalinformation;
  vehicleownerinformation;
  moveToCalculator = (index) => {
    this.moveTab.emit(index);
    if (index === 0) {
      this.OnVehicleInfo.emit('Vehicle edit button clicked');
    }
    if (index === 1) {
      this.OnInsuringParty.emit('Insuring Party edit button clicked');
    }
    if (index === 2) {
      this.OnPolicyDates.emit('Policy Dates edit button clicked');
    }
    if (index === 3) {
      this.OnInstallment.emit('Installment edit button clicked');
    }
    if (index === 4) {
      this.OnAdditionalCovers.emit('Additional Covers edit button clicked');
    }
  }

  ngOnInit(): void {
    this.commonDataService.vehicleinfo.subscribe(data => { console.log(data); this.vehicleinfo = data; });
    this.commonDataService.insuringparty.subscribe(data => { console.log(data); this.insuringparty = data; });
    this.commonDataService.policy.subscribe(data => { console.log(data); this.policy = data; });
    this.commonDataService.installment.subscribe(data => { console.log(data); this.installment = data; });
    this.commonDataService.additionalcovers.subscribe(data => { console.log(data); this.additionalcovers = data; });
    this.commonDataService.contactinformation.subscribe(data => { console.log(data); this.contactinformation = data; });
    this.commonDataService.deliveryinformation.subscribe(data => { console.log(data); this.deliveryinformation = data; });
    this.commonDataService.personalinformation.subscribe(data => { console.log(data); this.personalinformation = data; });
    this.commonDataService.vehicleownerinformation.subscribe(data => { console.log(data); this.vehicleownerinformation = data; });

    this.summaryForm = this.fb.group({
      AgreeToAll: [false, Validators.requiredTrue],
      receiveNewsletter: [false, Validators.requiredTrue],
      generalTerms: [false, Validators.requiredTrue]
    });
  }
  edit = (index) => {
    console.log('inside edit', index);
    if (index === 2) {
      this.OnVehicleOwner.emit('Vehicle owner edit button clicked');
    }
    if (index === 3) {
      this.OnDelivery.emit('Delivery edit button clicked');
    }
    this.changeStep.emit(index);
  }
  saveData = () => {
    confirm('You are about to save data and proceed to payment');
    const mtplCalculator = {
      id: sessionStorage.getItem('id'),
      vehicleinfo: this.vehicleinfo,
      insuringparty: this.insuringparty,
      policy: this.policy,
      installment: this.installment,
      additionalcovers: this.additionalcovers
    };
    const mtplPolicy = {
      id: sessionStorage.getItem('id'),
      contactinformation: this.contactinformation,
      deliveryinformation: this.deliveryinformation,
      personalinformation: this.personalinformation,
      vehicleownerinformation: this.vehicleownerinformation
    };
    this.mtplCalculatorService.postData(mtplCalculator).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    this.mtplPolicyService.postData(mtplPolicy).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
