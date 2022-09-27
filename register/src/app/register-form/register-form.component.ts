import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    contact: new FormControl('',[Validators.required,Validators.minLength(10)]),
  })


  getInputValue(input:string){
    return this.registerForm.get(input);
  }

  checkIsValid(input:string, error:string){
    return this.registerForm.get(input)?.errors?.[error];
    
  }

  onSubmit(){
    if(this.registerForm.valid)
    {
      alert("Okay");
    }
    else{
      alert("Not valid");
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
