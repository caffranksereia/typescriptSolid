import { Messaging } from "./interfaces/message-interface";
import { Persisting } from "./interfaces/persistency-interface";
import { Order } from "./order";
import { Products } from "./products";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
const message = new Messaging();
const persistency = new Persisting();
const order = new Order(shoppingCart, message, persistency);

shoppingCart.AddItems(new Products('Camiseta', 50.0));
shoppingCart.AddItems(new Products('alface', 4.0));
shoppingCart.AddItems(new Products('pimentao', 8.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
