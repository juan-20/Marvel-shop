import { ReactNode, useEffect, useState } from 'react';
import { Container, ProductList } from './styles';
import Header from '../../components/Header';
import { api } from '../../service/api';
import { Comic, LocalStorage, Product } from '../../types/types';
import { useCart } from '../../hook/useCart';


function Checkout() {

  const { cart, GetComic } = useCart();
  console.log(cart);
  const cartFormatted = (cart)

  console.log(cartFormatted);

  function handleget() {
    let id: any = cartFormatted;
    GetComic(id);
  }

  return (
    <Container>
      <Header />
      {cartFormatted ?
        <p>Existe HQ</p>
        :
        <p>Nada no carrinho</p>
      }
    </Container>
  );
};

export default Checkout;
