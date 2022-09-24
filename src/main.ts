import Address from './entity/address';
import Customer from './entity/customer';
import Order from './entity/order';
import OrderItem from './entity/order_item';

const customer = new Customer('123', 'Raphael Garcia')
const address = new Address(
  'Rua Dr. Baeta neves',
  95,
  '09751-030',
  'São Bernardo do Campo'
)

customer.Address = address

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 20)

const order = new Order('20000054', customer.id, [item1, item2])
console.log(order)
