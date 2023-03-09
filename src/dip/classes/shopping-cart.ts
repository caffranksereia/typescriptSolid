import { Discount } from "./discount";
import { CardItemInterface } from "./interfaces/card-item-interface";
import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { ShoppingCartProcotolInterface } from "./interfaces/shopping-cart-protocol-interface";


export class ShoppingCart implements ShoppingCartProcotolInterface {
  // Alto nivel
  private readonly _items: CardItemInterface[] = [];

  constructor(private readonly discount: Discount) {}

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

  totalWithDicount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Vazio...');
    this._items.length === 0;
  }
}
