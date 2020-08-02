import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


interface Package{
  value:number;
  viewValue:string;
}


@Component({
  selector: 'app-choose-policy',
  templateUrl: './choose-policy.component.html',
  styleUrls: ['./choose-policy.component.css']
})
export class ChoosePolicyComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  selected = 'Annual';
  travelAssistance='750';
  hotelAssistance='750';
  consumerFraudSpecialist='1000';
  packages:Package[]=[{value:1000,viewValue:'$1000'},{value:2000,viewValue:'$2000'}]
  lawyerExpertFees='250';
  lostWages='1500';
  stolenIdentity='400';
  domesticTravel='1250';




  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

}
