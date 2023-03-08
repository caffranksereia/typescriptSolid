import { CardItemInterface } from "./interfaces/card-item-interface";
import { OrderStatusType } from "./interfaces/orderStatus-interface";


export class ShoppingCart {
  private readonly _items: CardItemInterface[] = [];
   //

  AddItems(product: CardItemInterface): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CardItemInterface[]> {
    return this._items;
  }



  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  //


  clear(): void {
    console.log('Vazio...');
    this._items.length === 0;
  }
}
