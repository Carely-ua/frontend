import { GetCartQuery } from './graphql/__generated__/GetCart';

export type CartItem = NonNullable<NonNullable<GetCartQuery['cart']>[number]>;
