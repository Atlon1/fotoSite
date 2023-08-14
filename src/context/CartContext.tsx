import React, {useState, createContext} from 'react';
import {CartContextType} from "../@types/context";

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider = ({children} : any) => {

    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const [Cart, setCart] = useState<object>([])
    const [itemsAmount, setItemsAmount] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)


    return (
        <CartContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;