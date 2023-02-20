import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  CarTable = [
    { name: "Ford", price: 123000, quantity: 35 },
    { name: "Peugeot", price: 112000, quantity: 65 },
    { name: "Fiat", price: 120000, quantity: 30 },
    { name: "Kia", price: 150000, quantity: 26 },
    { name: "Skooda", price: 140000, quantity: 20 },
  ]

  constructor() { }
}
