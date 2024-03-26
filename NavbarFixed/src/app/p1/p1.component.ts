import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-p1',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.scss'
})
export class P1Component {
 
  static products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1999.99,
      rating: 4.5,
      brand: "Apple"
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      price: 74999,
      rating: 4.7,
      brand: "Samsung"
    },
    {
      id: 3,
      name: "Hp Pavillion",
      price: 54999,
      rating: 4.5,
      brand: "HP"
    },
    {
      id: 4,
      name: "Vivo V15 pro",
      price: 29999,
      rating: 4.8,
      brand: "Vivo"
    },
    {
      id: 5,
      name: "Baleno",
      price: 249999,
      rating: 4.6,
      brand: "Maruti Suzuki"
    },
    {
      id: 6,
      name: "Nike Air Force 1",
      price: 999,
      rating: 4.6,
      brand: "Nike"
    },
    {
      id: 7,
      name: "Canon EOS Rebel T7",
      price: 49999,
      rating: 4.4,
      brand: "Canon"
    },
    {
      id: 8,
      name: "LG OLED C1",
      price: 19999,
      rating: 4.8,
      brand: "LG"
    },
    {
      id: 9,
      name: "Pixel 6a",
      price: 69999,
      rating: 4.8,
      brand: "Pixel"
    },
    {
      id: 10,
      name: "Dell XPS 13",
      price: 35999,
      rating: 4.7,
      brand: "Dell"
    }
  ];


  getProducts() {
    return P1Component.products;
  }



}