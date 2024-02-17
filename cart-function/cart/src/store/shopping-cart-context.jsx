import { createContext } from 'react';

export const Cartcontext = createContext({
    items: [],
    addItemToCart: () => {},
    updatedItemQuantity: ()=> {}
});

