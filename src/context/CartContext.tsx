import React, {useState, createContext, ReactNode, useEffect} from 'react';
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

    useEffect(() => {
        const amount = cart.reduce((a: any, b: any) => {
            return a + b.amount
        }, 0)
        setItemsAmount(amount)
    }, [cart])

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

    const removeFromCart = (id: number) => {
        const newCart = cart.filter((item: any) => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const handleInput = (e: any, id: any) => {
        const value = parseInt(e.target.value)
        const cartItem = cart.find((item: any) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map((elem: any) => {
                if (elem.id === id) {
                    if (isNaN(value)) {
                        setAmount(1)
                        return {...elem, amount: 1}
                    } else {
                        setAmount(value)
                        return {...elem, amount: value}
                    }
                } else {
                    return elem
                }
            })
            setCart(newCart)
        }
        setIsOpen(true)
    }

    const handleSelected = (e: any, id: unknown) => {
        const value = parseInt(e.target.value)
        const cartItem = cart.find((elem: any) => {
            return elem.id === id
        })
        if (cartItem) {
            const newCart = [...cart].map(item => {
                // @ts-ignore
                if (item.id === id) {
                    setAmount(value)
                    return {...item, amount: value}
                } else {
                    return item
                }
            });
            setCart(newCart)
        }
    }


    const cartContextValue: CartContextType = {
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelected,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;