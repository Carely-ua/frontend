import { useCallback } from 'react';

const CART_IDS = 'cartIds';

export const useCartForUnAuthUser = () => {
  const getCartIds = useCallback<() => Array<string>>(() => {
    const res = localStorage.getItem(CART_IDS);

    if (!res) return [];

    return JSON.parse(res);
  }, []);

  const deleteCartItem = useCallback(
    (id: string) => {
      const ids = getCartIds() || [];
      const filteredIds = ids.filter((currentId: string) => currentId !== id);
      localStorage.setItem(CART_IDS, JSON.stringify(filteredIds));
      window.dispatchEvent(new Event('storage'));
    },
    [getCartIds],
  );

  const addNewItem = useCallback(
    (id?: string) => {
      if (!id) return null;
      const ids = getCartIds() || [];
      localStorage.setItem(CART_IDS, JSON.stringify([id, ...ids]));
      window.dispatchEvent(new Event('storage'));
    },
    [getCartIds],
  );

  const clearIds = useCallback(async () => {
    localStorage.removeItem(CART_IDS);
  }, []);

  return { addNewItem, getCartIds, deleteCartItem, clearIds };
};
