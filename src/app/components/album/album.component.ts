import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Album } from '../../types/album';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  @Input() album!: Album;

  constructor(private cartService: CartService) { }

  addToCart(album: Album) {
    this.cartService.addToCart(album);
  }
}
