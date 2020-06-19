import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  summaryForm:FormGroup;
  first:string="170.27 BGN";
  secondI:string="182.40 BGN";
  third:string='';
  fourth:string='abcd';
  sdate:string='04-03-54';
  mtplCalculatorData;
  mtplPolicyData;
  @Output() changeStep = new EventEmitter()
  @Output() moveTab = new EventEmitter()
  moveToCalculator=(index)=>{
    this.moveTab.emit(index)
    }

    
  constructor(private fb: FormBuilder,private _dataService:CommonDataService) { }

  ngOnInit(): void {
    this._dataService.formData.subscribe(data=>{
      this.mtplCalculatorData=data;
      console.log(this.mtplCalculatorData);
     })
     this._dataService.policyData.subscribe(data=>{
       console.log(data);
       
       this.mtplPolicyData=data;
       console.log(this.mtplPolicyData["vehicleOwnerInformation"]);
       
       if(this.mtplPolicyData["vehicleOwnerInformation"]=="Yes"){
         var obj={    fullname: {firstname: this.mtplPolicyData["personalInformation"].fullname.firstname,
          lastname: this.mtplPolicyData["personalInformation"].fullname.lastname, 
          surname: this.mtplPolicyData["personalInformation"].fullname.surname},
          city: this.mtplPolicyData["contactInformation"].city,
          street:this.mtplPolicyData["contactInformation"].street,
     
       lnch: this.mtplPolicyData["personalInformation"].lnch
     
            
         }
         this.mtplPolicyData["vehicleOwnerInformation"]=obj
         
         
         
       }
       

     })
    
    this.summaryForm=this.fb.group({
      firstInstalment:[this.first,Validators.required],
      secondInstalment:[this.secondI,Validators.required],
      thirdInstalment:[this.third,Validators.required],
      fourthInstalment:[this.fourth,Validators.required],
      additionalCover:['',Validators.required],
      startDate:[this.sdate,Validators.required],
      endDate:['',Validators.required],
      vehicleRegistration:['',Validators.required],
      vehiclePurpose:['',Validators.required],
      certificationNumber:['',Validators.required],
      days:['',Validators.required],
      number:['',Validators.required],
      fullName:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',Validators.required],
      cityZipcode:['',Validators.required],
      streetNumber:['',Validators.required],
      apartment:['',Validators.required],
      egnnumber:['',Validators.required],
      fullnamevehicleowner:['',Validators.required],
      cityZipcodevehicleOwner:['',Validators.required],
      streetNumbervehicleowner:['',Validators.required],
      fullNameDelivery:['',Validators.required],
      phoneNumDelivery:['',Validators.required],
      addressType:['',Validators.required],
      cityZipcodeDelivery:['',Validators.required],
      streetNumberDelivery:['',Validators.required],
      block:['',Validators.required],
      apartmentDelivery:['',Validators.required],
      AgreeToAll:[false,Validators.requiredTrue],
      receiveNewsletter:[false,Validators.requiredTrue],
      generalTerms:[false,Validators.requiredTrue]
    })
  }

  edit=(index)=>{
    console.log("inside edit",index);
    
    this.changeStep.emit(index)
  }

  
}
