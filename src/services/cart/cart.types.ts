import { GetCartQuery } from './graphql/__generated__/GetCart';

export type CartItem = NonNullable<
  NonNullable<NonNullable<GetCartQuery['cart']>['cartItems']>[number]
>;
