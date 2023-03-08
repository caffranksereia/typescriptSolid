import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatusType = 'open';

  constructor(private readonly cart: ShoppingCart) {

  }

  get orderStatus(): OrderStatusType {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    this.sendMessage(`Seu pedido com os produtos com total de ${this.total()}
    wfoi recebido`);
    this.saveOrder();
    this.clear();
  }

   isEmpty(): boolean {
    return this._items.length === 0;
  }
  //
  sendMessage(msg: string): void {
    console.log('Mensagem', msg);
  }
  //
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }


}
