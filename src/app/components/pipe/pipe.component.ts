import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  firstName = "Slim";
  title = "Hello i am instructor";

  student ={
    name:"slim",
    email:"slim@gmail.com",
    phone:34567
  };

  MyDate = new Date()
}
