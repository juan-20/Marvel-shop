import { ReactNode, useEffect, useState } from 'react';
import { Container, ProductList } from './styles';
import Header from '../../components/Header';
import { api } from '../../service/api';
import { Comic, LocalStorage, Product } from '../../types/types';
import { useCart } from '../../hook/useCart';
import { GiSpiderWeb } from 'react-icons/gi';

function Checkout() {

  const { cart, GetComic } = useCart();

  // const [cartFormatted, cartFormatteds] = useState < [] > ()

  const cartFormatted = cart;

  console.log(cart)
  // function handleget() {
  //   let id: Comic[] = cartFormatted;
  //   GetComic(id);
  // }

  return (
    <Container>
      <Header />
      <ProductList>
        {cartFormatted ?
          <>
            {cartFormatted.map(cartFormatteds => {
              return (
                <div key={cartFormatted.id}>
                  <p>Suas compras:</p>
                  <p>Revistas com id: {cartFormatteds.id}</p>
                </div>
              );
            })}
          </>
          :
          <>
            <p>Nada no carrinho</p>
            <GiSpiderWeb size={36} color="#FFF" />
          </>
        }
      </ProductList>
    </Container>
  );
};

export default Checkout;
