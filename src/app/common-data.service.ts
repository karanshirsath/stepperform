import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
defaultData={
coversData: {cover: ""},
installmentsData: {term: ""},
insuringPartyData: {egn: "", address: "mumbai", email: ""},
policyDetailsData: {policyDate: "", policyLength: "", check1: false, check2: false},
vehicleData: {registrationNumber: "", certificateNumber: "", purpose: "", yesNo: ""},

}
defaultData2={
  contactInformation: "",
deliveryInformation:{
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
personalInformation:{
birth: "",
citizen: "",
fullname: {firstname: "", lastname: "", surname: ""},
fullnameeng: {firstnameeng: "", lastnameeng: "", surnameeng: ""},
lnch: ""},

vehicleOwnerInformation: {fullname: {firstname: "", lastname: "", surname: ""},
lnch: ""}
}
  constructor() { }
  formData=new BehaviorSubject<any>(this.defaultData);
  policyData=new BehaviorSubject<any>(this.defaultData2);

}
