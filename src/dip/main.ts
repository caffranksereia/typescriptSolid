/*
Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender de abstracoes.
DEnda de abstracoes, nao de implementacoes.
Abstracoes nao devem depdneer de detalhes. detalhes devm depender de abstracoes.

Classes de baixo nivel soa classes que executam tarefgas (os detalhes)
Classes de alto nivel sao classes que gerenciam as classes de baixo nivel.
*/

import { Messaging } from "./services/message-interface";
import { Persisting } from "./services/persistency-interface";
import { Order } from "./entities/order";
import { Products } from "./products";
import { ShoppingCart } from "./shopping-cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustumer, IndividualCustumer } from "./classes/customer";
import { MessagingInterface } from "./classes/interfaces/messaging-interface";

const noDiscount = new NoDiscount();
const individualCustumer = new IndividualCustumer(
  'Fabio Eduardo',
  'Circuncisao',
  '111.111.111-11',
);
const enterpriseCustumer = new EnterpriseCustumer(
  'Fabio Eduardo',
  '111.111.111.11.1',
);
const shoppingCart = new ShoppingCart(noDiscount);

const persistency = new Persisting();

class MessagingMock implements MessagingInterface {
  sendMessage(msg: string): void {
    console.log('aaaaa lunaaaaa ');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustumer,
  individualCustumer,
);

shoppingCart.AddItems(new Products('Camiseta', 50.0));
shoppingCart.AddItems(new Products('alface', 4.0));
shoppingCart.AddItems(new Products('pimentao', 8.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
