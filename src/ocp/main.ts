/*
Open/closed principle
Entidades devem estar abertas para extensao, mas fechadas para modificacao.
*/

import { Messaging } from "./services/message-interface";
import { Persisting } from "./services/persistency-interface";
import { Order } from "./entities/order";
import { Products } from "./products";
import { ShoppingCart } from "./shopping-cart";
import { NoDiscount } from "./classes/discount";

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const message = new Messaging();
const persistency = new Persisting();
const order = new Order(shoppingCart, message, persistency);

shoppingCart.AddItems(new Products('Camiseta', 50.0));
shoppingCart.AddItems(new Products('alface', 4.0));
shoppingCart.AddItems(new Products('pimentao', 8.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
