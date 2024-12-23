import { Album } from "./album";

export interface CartItem {
  album: Album;
  quantity: number;
  totalPrice: number;
}
