import { Orders } from '@/components';
import { getOrders } from '@/services/cart/get-orders';

const OrdersPage = async () => {
  const { data } = await getOrders();

  if (!data.orders) return 'Сторінка з замовленнями - порожня';

  return <Orders orders={data.orders} />;
};

export default OrdersPage;
