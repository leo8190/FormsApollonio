import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  loginForm: FormGroup;

  constructor(){
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexDocumentNumber = '^[0-9]*$';
    let controls: any = {
      email: new FormControl('', [Validators.required, Validators.pattern(regexEmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      documentNumber: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(regexDocumentNumber)]),
      credentialRemember: new FormControl(false)
    }
    this.loginForm = new FormGroup(controls);
  }

  login(){ 
    console.log(this.loginForm);
    if(this.loginForm.controls['password'].valid && this.loginForm.controls['email'].valid && this.loginForm.controls['documentNumber'].valid){
      alert("You are logged in!");       
    }   
    else{
      alert("There are problems with some of the fields");
    }  
  }
}