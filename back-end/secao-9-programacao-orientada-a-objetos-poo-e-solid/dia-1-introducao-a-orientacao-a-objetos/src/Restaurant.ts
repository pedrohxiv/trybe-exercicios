class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }
  public set items(value: OrderItem[]) {
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount() {
    return this._discount;
  }
  public set discount(value) {
    this._discount = value;
  }

  public calculateTotalWithoutDiscount(): number {
    return this.items.reduce((total, currentValue) => total + currentValue.price, 0);
  }

  public calculateTotalWithDiscount(): number {
    return this.calculateTotalWithoutDiscount() * (1 - this.discount);
  }
}

const client1 = new Client('Pedro');
const client2 = new Client('Maria');
const client3 = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.0);
const juice = new OrderItem('Suco de Abacaxi', 5.0);
const dessert = new OrderItem('Gelatina de Uva', 2.5);

const order1 = new Order(client1, [sandwich, juice, dessert], 'dinheiro', 0.1);
const order2 = new Order(client3, [sandwich], 'cartão de crédito', 0.2);
const order3 = new Order(client2, [sandwich, juice], 'dinheiro', 0.1);

console.log(order1);

console.log('Valor total sem desconto: ', order1.calculateTotalWithoutDiscount());

console.log('Valor total com desconto: ', order1.calculateTotalWithDiscount());
