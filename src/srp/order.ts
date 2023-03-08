import { Messaging } from "./interfaces/message-interface";
import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { Persisting } from "./interfaces/persistency-interface";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatusType = 'open';

  constructor(// injecao de independencia
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persisting: Persisting,
  ) {}

  get orderStatus(): OrderStatusType {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    this.messaging
      .sendMessage(`Seu pedido com os produtos com total de ${this.cart.total()}
    wfoi recebido`);
    this.persisting.saveOrder();
    this.cart.clear();
  }
}
