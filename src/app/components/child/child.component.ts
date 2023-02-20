import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public nameFromParent;
  @Output() childEvent = new EventEmitter();

  public eventChild (){
    this.childEvent.emit('Message from child to parent')
  }
}
