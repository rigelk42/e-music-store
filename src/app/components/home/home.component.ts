import { Component } from '@angular/core';
import { AlbumBrowserComponent } from '../album-browser/album-browser.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AlbumBrowserComponent, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
