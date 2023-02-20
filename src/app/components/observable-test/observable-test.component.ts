import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent {

  second: number = 20;


  ngOnInit() {
    // const counter = Observable.interval(1000);
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.second = value;
      }
    )
  }

}
