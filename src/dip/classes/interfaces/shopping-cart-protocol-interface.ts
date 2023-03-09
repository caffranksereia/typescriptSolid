import { CardItemInterface } from "./card-item-interface"

export interface ShoppingCartProcotolInterface {
  items: Readonly<CardItemInterface[]>;
  AddItems(product: CardItemInterface): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}
