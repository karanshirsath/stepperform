import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  defaultData = {
    coversData: { cover: "" },
    installmentsData: { term: "" },
    insuringPartyData: { egn: "", address: "mumbai", email: "" },
    policyDetailsData: { policyDate: "", policyLength: "", check1: false, check2: false },
    vehicleData: { registrationNumber: "", certificateNumber: "", purpose: "", yesNo: "" },
  }
  defaultData2 = {
    contactInformation: {
      No: "",
      appartment: "",
      block: "",
      city: "",
      entrance: "",
      phone: "",
      pincode: "",
      street: "",
    },
    deliveryInformation: {
      appt: "",
      block: "",
      business: "",
      city: "",
      contact: null,
      entrance: "",
      fullName: "",
      notes: "",
      number: "",
      pincode: "",
      street: "",
    },
    personalInformation: {
      birth: "",
      citizen: "",
      fullname: { firstname: "", lastname: "", surname: "" },
      fullnameeng: { firstnameeng: "", lastnameeng: "", surnameeng: "" },
      lnch: ""
    },

    vehicleOwnerInformation: {
      fullname: { firstname: "", lastname: "", surname: "" },
      lnch: ""
    }

  }
  //MTPL-Calculator
  vehicleinfoData = {
    registrationNumber: "",
    certificateNumber: "",
    purpose: "",
    yesNo: ""
  }
  insuringpartyData = {
    egn: "",
    address: "mumbai",
    email: ""
  }
  policyData1 = {
    policyDate: "",
    policyLength: "",
    check1: "",
    check2: ""
  }
  installmentData1 = {
    term: ""
  }
  additionalcoversData = {
    cover: ""
  }
  //MTPL-Policy
  contactinformationData = {
    No: "",
    appartment: "",
    block: "",
    city: "",
    entrance: "",
    phone: "",
    pincode: "",
    street: ""
  }
  deliveryinformationData = {
    appt: "",
    block: "",
    business: "",
    city: "",
    contact: "",
    entrance: "",
    fullName: "",
    notes: "",
    number: "",
    pincode: "",
    street: ""
  }
  personalinformationData = {
    birth: "",
    citizen: "",
    fullname: { firstname: "", lastname: "", surname: "" },
    fullnameeng: { firstnameeng: "", lastnameeng: "", surnameeng: "" },
    lnch: ""
  }
  vehicleownerinformationData = {
    fullname: { firstname: "", lastname: "", surname: "" },
    lnch: ""
  }

  constructor() { }
  formData = new BehaviorSubject<any>(this.defaultData);
  policyData = new BehaviorSubject<any>(this.defaultData2);
  installmentData = new BehaviorSubject<any>('');

  //MTPL-Calculator
  vehicleinfo = new BehaviorSubject(this.vehicleinfoData)
  insuringparty = new BehaviorSubject(this.insuringpartyData)
  policy = new BehaviorSubject(this.policyData1)
  installment = new BehaviorSubject(this.installmentData1)
  additionalcovers = new BehaviorSubject(this.additionalcoversData)
  //MTPL-Policy
  contactinformation = new BehaviorSubject(this.contactinformationData)
  deliveryinformation = new BehaviorSubject(this.deliveryinformationData)
  personalinformation = new BehaviorSubject(this.personalinformationData)
  vehicleownerinformation = new BehaviorSubject(this.vehicleownerinformationData)
}
