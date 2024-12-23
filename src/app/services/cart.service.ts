import { computed, Injectable, signal } from '@angular/core';
import { Album } from '../types/album';
import { CartItem } from '../types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private taxRateSignal = signal(.0875);
  readonly taxRate = this.taxRateSignal.asReadonly();
  private cartSignal = signal<CartItem[]>([]);
  readonly cart = this.cartSignal.asReadonly();

  cartSubTotalSignal = computed(() => {
    let subTotal = 0;

    this.cartSignal().map((item: CartItem) => {
      subTotal += item.totalPrice;
    });

    return subTotal.toFixed(2);
  });

  cartTaxesSignal = computed(() => (parseFloat(this.cartSubTotalSignal()) * this.taxRateSignal()).toFixed(2));
  cartTotalSignal = computed(() => (parseFloat(this.cartSubTotalSignal()) + parseFloat(this.cartTaxesSignal())).toFixed(2));

  addToCart(album: Album): void {
    const currIdx = this.cartSignal().findIndex((cartItem: CartItem) => cartItem.album.title === album.title);

    if (currIdx === -1) {
      this.cartSignal.update(items => [...items, {
        album,
        quantity: 1,
        totalPrice: album.price * 1
      } as CartItem]);
    } else {
      this.cartSignal.update(items =>
        items.map((item: CartItem) => {
          const updatedQuantity = item.quantity + 1;

          return item.album.title === album.title ?
            {
              album,
              quantity: updatedQuantity,
              totalPrice: album.price * updatedQuantity,
            } as CartItem : item;
      }));
    }
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartSignal.update(items => items.filter((item: CartItem) => item.album.title !== cartItem.album.title));
  }
}
