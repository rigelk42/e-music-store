import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { CartItem } from '../../types/cart-item';
import { Album } from '../../types/album';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  const cartItem: CartItem = {
    album: {
      title: "Stone Gon'",
      artist: "Barry White",
      year: "1973",
      image:"stone-gon.jpg",
      genres: [
        "disco",
        "R&B",
        "soul"
      ],
      price: 125.00
    } as Album,
    quantity: 1,
    totalPrice: 125.00
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    fixture.componentRef.setInput('cartItem', cartItem);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
