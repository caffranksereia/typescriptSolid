import { Messaging } from "../services/message-interface";
import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { Persisting } from "../services/persistency-interface";
import { ShoppingCart } from "./shopping-cart";
import { CustumerOrder } from "./interfaces/custumer-protocol-interface";

export class Order {
  //Alto nivel
  private _orderStatus: OrderStatusType = 'open';

  constructor(
    // injecao de independencia
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persisting: Persisting,
    private readonly customer: CustumerOrder,
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
    foi recebido com desconto fica ${this.cart.totalWithDicount()}`);
    this.persisting.saveOrder();
    this.cart.clear();
    console.log('O cliente e:', this.customer.getName(), this.customer.getIdN);
  }
}
