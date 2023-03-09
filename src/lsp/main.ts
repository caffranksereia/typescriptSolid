/*
Liskov substituin priciple (Principio da substituicao de liskov) - Se fi(x) e uma propriedade demostravel dos objetos x de tipo T
Entao fi(y) deve ser verdadeiro para objetos y de tipo S onde s e um sutipo de T.

Mais simples: Subtipos precisam ser substitiveis por seus tipos de base.
mias simples aunida: se um progrma espera uma entrada, algo do tipo exmplo soma de dois number (que herda de Calculadora) deve servir
para qualquer outro calculo
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
