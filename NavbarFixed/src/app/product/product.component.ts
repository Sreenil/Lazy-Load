import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { P1Component } from '../p1/p1.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, RouterOutlet, P1Component, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {


}