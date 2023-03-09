import { OrderStatusType } from "./interfaces/orderStatus-interface";
import { CustumerOrder } from "./interfaces/custumer-protocol-interface";
import { ShoppingCartProcotolInterface } from "./interfaces/shopping-cart-protocol-interface";
import { MessagingInterface } from "./interfaces/messaging-interface";
import { PersistingInterface } from "./interfaces/persistency-inteface";

export class Order {
  //Alto nivel
  private _orderStatus: OrderStatusType = 'open';

  constructor(
    // injecao de independencia
    private readonly cart: ShoppingCartProcotolInterface,
    private readonly messaging: MessagingInterface,
    private readonly persisting: PersistingInterface,
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
