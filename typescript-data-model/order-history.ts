interface Product {
  id: number;
  name: string;
  price: number;
  author?: string;
  returnWindow: string;
}

interface Order {
  orderPlaced: string;
  total: string;
  shipTo: string;
  orderNumber: number;
  deliveredDate: string;
  deliveredMessage?: string;
  items: Product[]; // Array of Product objects
}

const orderHistory: Array<Order> = [
  {
    orderPlaced: '2022-01-01',
    total: '$100.00',
    shipTo: 'John Doe',
    orderNumber: 12345,
    deliveredDate: '2022-01-05',
    items: [
      { id: 1, name: 'Product 1', price: 50, returnWindow: 'August 19, 2020' },
      { id: 2, name: 'Product 2', price: 50, returnWindow: 'August 19, 2020' },
    ],
  },
  {
    orderPlaced: '2022-02-01',
    total: '$200.00',
    shipTo: 'Jane Doe',
    orderNumber: 12346,
    deliveredDate: '2022-02-05',
    items: [
      { id: 3, name: 'Product 3', price: 100, returnWindow: 'August 19, 2020' },
      { id: 4, name: 'Product 4', price: 100, returnWindow: 'August 19, 2020' },
    ],
  },
  // More orders here
];
