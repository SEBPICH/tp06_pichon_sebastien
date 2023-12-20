import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from '../shared/models/product';
import { delFormCart } from '../shared/actions/cart-action';
import { CartState } from '../shared/states/cart-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private store: Store) {}

  @Select(CartState.getProductsList) liste$!: Observable<Product[]>;
  ngOnInit() {}

  delFormCart(p: Product): void {
    function showMessage() {

      const messageContainer = document.getElementById("MessageDelete") as HTMLDivElement;
      messageContainer.innerText = `'${p.name}' a été supprimé du panier.`;
      setTimeout(() => {
          messageContainer.innerText = "";
      }, 3000);
  }
    this.store.dispatch(new delFormCart(p));
    showMessage();
  }
}
