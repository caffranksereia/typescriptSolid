/*
Interface segragation priciple (Principio da segregacao de interface) -
os clinetes nao deve ser forcados a depnder de types,  interfaces ou membros abstratos que nao utilizam
*/

import { Messaging } from "./services/message-interface";
import { Persisting } from "./services/persistency-interface";
import { Order } from "./entities/order";
import { Products } from "./products";
import { ShoppingCart } from "./shopping-cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustumer, IndividualCustumer } from "./classes/customer";

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
const message = new Messaging();
const persistency = new Persisting();
const order = new Order(
  shoppingCart,
  message,
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
