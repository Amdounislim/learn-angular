import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  stat = true
  tableCar:any = []
  constructor(private Cartable : ProductServiceService){}

  ngOnInit(){
    this.getCar()
  }

  changeColor() {
    this.stat= !this.stat
  }

  getCar(){
    this.tableCar = this.Cartable.CarTable
  }
}
