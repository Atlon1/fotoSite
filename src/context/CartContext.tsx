import React, {useState, createContext} from 'react';
import {CartContextType} from "../@types/context";

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider = ({children} : any) => {

    const [isOpen, setIsOpen] = useState<Boolean>(false)


    return (
        <CartContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;