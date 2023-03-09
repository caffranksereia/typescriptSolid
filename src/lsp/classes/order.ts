import { Messaging } from "../services/message-interface";
import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { Persisting } from "../services/persistency-interface";
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
    this._orderStatus = 'closed';
    this.messaging
      .sendMessage(`Seu pedido com os produtos com total de ${this.cart.total()}
    foi recebido com desconto fica ${this.cart.totalWithDicount(0.1)}`);
    this.persisting.saveOrder();
    this.cart.clear();
  }
}
