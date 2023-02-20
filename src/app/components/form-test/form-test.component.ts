import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login-model';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {

  public login : LoginModel;
  confirmPass : any;

  constructor(){
    this.login = new LoginModel();
  }

  onSubmit(form: NgForm){
    console.log(this.login)
  }

}
