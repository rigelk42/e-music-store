import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../types/cart-item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  constructor(private cartService: CartService) { }

  removeItem(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem);
  }
}
