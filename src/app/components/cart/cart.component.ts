import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, PanelModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private cartService: CartService) { }

  get cartItems() {
    return this.cartService.cart();
  }

  get cartSubTotal() {
    return this.cartService.cartSubTotalSignal();
  }

  get cartTaxRate() {
    return this.cartService.taxRate() * 100;
  }

  get cartTaxes() {
    return this.cartService.cartTaxesSignal();
  }

  get cartTotal() {
    return this.cartService.cartTotalSignal();
  }
}
