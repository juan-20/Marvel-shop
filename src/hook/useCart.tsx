import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { CartContextData, CartProviderProps, LocalStorage } from '../types/types';

// import { Container } from './styles';

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<LocalStorage[]>(() => {
        const storagedCart = localStorage.getItem('@Marvel:cart');

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct: any = async (id: any) => {
        // try {
        debugger
        let updatedCart: any = localStorage.getItem('@Marvel:cart');
        console.log(updatedCart);
        updatedCart = [...id]
        console.log(updatedCart)
        setCart(updatedCart)
        console.log(setCart)
        localStorage.setItem('@Marvel:cart', JSON.stringify(setCart))
        toast.success('Produto adicionado');
        // } catch {
        // toast.error('Erro na adição do produto');
        // }
    };

    return (
        <CartContext.Provider
            value={{ addProduct }}
        >
            {children}
        </CartContext.Provider>
    );


}
export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}