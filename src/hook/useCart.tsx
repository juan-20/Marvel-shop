import md5 from 'md5';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../service/api';
import { CartContextData, CartProviderProps, Comic, LocalStorage } from '../types/types';

// import { Container } from './styles';

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<any>(() => {
        const storagedCart: any = localStorage.getItem('@Marvel:cart');
        console.log(storagedCart);
        console.log(JSON.parse(storagedCart));

        // if (storagedCart) {
        return JSON.parse(storagedCart);
        // }

        return [];
    });

    const addProduct: any = async (id: any) => {
        // try {
        debugger
        let updatedCart: any = localStorage.getItem('@Marvel:cart');
        console.log(updatedCart);
        console.log(id)
        updatedCart = [...id]
        console.log(updatedCart)
        localStorage.setItem('@Marvel:cart', JSON.stringify(updatedCart))
        toast.success('Produto adicionado');
        // } catch {
        // toast.error('Erro na adição do produto');
        // }
    };

    const GetComic = async (productId: LocalStorage[]) => {
        console.log(cart);
        console.log("alo");

        const publicKey = '178c96387633a76bfe6461e044aa2b1b';
        const privateKey = '52415cf01d67ce75facf0c02cf7a8eae5e482402';
        const time = Number(new Date());
        const hash = md5(time + privateKey + publicKey);

        {
            productId.map(id => {

                api.get(
                    `http://gateway.marvel.com/v1/public/comics/${productId}?ts=${time}&apikey=${publicKey}&hash=${hash}`
                ).then(response => {
                    const setComics = (response.data.data.results)
                    console.log(response.data.data.results)
                })

            })
        }
    };

    return (
        <CartContext.Provider
            value={{ addProduct, cart, GetComic }}
        >
            {children}
        </CartContext.Provider>
    );


}
export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}