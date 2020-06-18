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
policyDetailsData: {policyDate: "", policyLength: "", check1: true, check2: true},
vehicleData: {registrationNumber: "", certificateNumber: "", purpose: "", yesNo: ""},

}
  constructor() { }
  formData=new BehaviorSubject<any>(this.defaultData);

}
