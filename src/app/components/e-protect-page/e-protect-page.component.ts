import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-e-protect-page',
  templateUrl: './e-protect-page.component.html',
  styleUrls: ['./e-protect-page.component.css']
})
export class EProtectPageComponent implements OnInit {

  model:any={};
  disable:boolean=true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  FirstName = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]);
  pincode = new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]);
  LastName = new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')])

  getErrorMessage() {
    if (this.FirstName.hasError('required')) {
      this.disable = true;
      return 'You must enter a value';
    }else if(this.FirstName.hasError('pattern')){
      this.disable = true;
      return 'Not a Valid Name';
    }
    if(this.pincode.dirty&&this.LastName.dirty){
      this.disable=false;
    }
         
  }
  getPinCodeErrorMessage(){
    if(this.pincode.hasError('required')){
      this.disable = true;
      return 'Please enter a value'
    }else if(this.pincode.hasError("pattern")){
      this.disable = true;
      return 'Not a valid PinCode'
    }
    if(this.FirstName.dirty&&this.LastName.dirty){
      this.disable=false;
    }
  }
  getNameErrorMessage(){
    if (this.LastName.hasError('required')) {
      this.disable = true;
      return 'You must enter a value';
    }else if(this.LastName.hasError('pattern')){
      this.disable = true;
      return ' Not a valid Name';
    }
    if(this.FirstName.dirty&&this.pincode.dirty){
      this.disable=false;
    }
  }

  submit(){
    this.router.navigate(['choosePolicy']);
  }

}
