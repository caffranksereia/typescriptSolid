import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.AddItems({
  name: 'Abobora',
  price: 3.0,
});
shoppingCart.AddItems({
  name: 'pimentao',
  price: 4.0,
});
shoppingCart.AddItems({
  name: 'alface',
  price: 8.0,
});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkOut();
console.log(shoppingCart.orderStatus);
