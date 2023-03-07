type ItemType = {
  name: string;
  price: number;
};
type OrderStatusType = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: ItemType[] = [];
  private _orderStatus: OrderStatusType = 'open';

  AddItems(product: ItemType): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<ItemType[]> {
    return this._items;
  }

  get orderStatus(): OrderStatusType {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkOut(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    this.orderStatus = 'closed';
    this.sendMessage(`Seu pedido com os produtos com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo');
  }

  clear(): void {
    console.log('Vazio');
    this._items.length === 0;
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
shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkOut();
console.log(shoppingCart.orderStatus);
