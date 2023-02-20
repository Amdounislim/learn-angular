import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  table:any = []

  constructor(private CarTable : ProductServiceService){}

  ngOnInit(){
    this.getProduct()
  }


  getProduct(){
    this.table = this.CarTable.CarTable
    console.log(this.table)
  }

}
