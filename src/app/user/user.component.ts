import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name = "Slim"
  email = "amdouni.slim@gmail.com"
  data: string = "";
  dataList = [
    { name: "Slim", email: "slim@gmail.com", phone: 123456 },
    { name: "Karim", email: "Karim@gmail.com", phone: 1111111 },
    { name: "Med", email: "Med@gmail.com", phone: 444444444 }
  ]

  constructor(private route: Router) { }

  getEmail() {
    return this.email
  }
  getMsg() {
    console.log("My new message")
  }

  goToRegister() {
    this.route.navigate(["/register"])
  }

}
