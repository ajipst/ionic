import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Burger',
      expanded: true,
      products: [
        { id: 0, name: 'Deluxe Burger', price: '8' },
        { id: 1, name: 'Colonel Burger', price: '9' },
        { id: 2, name: 'Fish Burger', price: '10' },
        { id: 3, name: 'Zuper krunch Burger', price: '15' }
      ]
    },
    {
      category: 'Dessert',
      products: [
        { id: 4, name: 'McFlurry Ice Cream', price: '8' },
        { id: 5, name: 'Puding', price: '6' }
      ]
    },
    {
      category: 'Drink',
      products: [
        { id: 6, name: 'Coca Cola', price: '7' },
        { id: 7, name: 'Fanta', price: '7' },
        { id: 8, name: 'Sprite', price: '9' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}