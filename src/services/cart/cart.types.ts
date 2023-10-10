import { GetCartQuery } from './graphql/__generated__/GetCart';
import { GetOrdersQuery } from './graphql/__generated__/GetOrders';

export type CartItem = NonNullable<
  NonNullable<NonNullable<GetCartQuery['cart']>['cartItems']>[number]
>;
export type Orders = NonNullable<GetOrdersQuery['orders']>;
export type Order = NonNullable<Orders[number]>;
export type OrderItem = NonNullable<NonNullable<Order['orderItems']>[number]>;
