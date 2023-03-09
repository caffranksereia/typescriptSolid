import { CardItemInterface } from "./interfaces/card-item-interface";

export class Products implements CardItemInterface {
  constructor(public name: string, public price: number) {}
}
