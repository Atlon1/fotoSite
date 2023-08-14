import React, {useState, createContext, ReactNode} from 'react';
import {CartContextType} from '../@types/context';


export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cart, setCart] = useState<object[]>([]);
    const [itemsAmount, setItemsAmount] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const addToCart = (item: any, id: string) => {
        const itemID = parseInt(id)
        const newItem = {...item[0], amount: 1}
        setCart([...cart, newItem])
        const cartItem = cart.find((item: any) => {
            return item.id === itemID
        })
        if (cartItem) {
            const newCart = cart.map((item: any) => {
                if (item.id === itemID) {
                    // @ts-ignore
                    setAmount(cartItem.amount + 1)
                    // @ts-ignore
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
        setIsOpen(true)
    };




    const cartContextValue: CartContextType = {
        isOpen,
        setIsOpen,
        addToCart,
        cart,

    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;