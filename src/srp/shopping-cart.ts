type Item = {
  name: string;
  price: number;
};

export class ShoppingCart {
  private readonly _items: Item[] = [];

  AddItems(product: Item): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }
}

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
