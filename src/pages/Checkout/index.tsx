import { ReactNode, useEffect, useState } from 'react';
import { Container, ProductList, Purchased } from './styles';
import Header from '../../components/Header';
import { api } from '../../service/api';
import { Comic, LocalStorage, Product } from '../../types/types';
import { useCart } from '../../hook/useCart';
import { GiSpiderWeb } from 'react-icons/gi';

function Checkout() {

  const { cart, GetComic } = useCart();

  // const [cartFormatted, cartFormatteds] = useState < [] > ()

  const cartFormatted = cart;

  return (
    <Container>
      <Header />
      <ProductList>
        {cartFormatted ?
          <>
            {cartFormatted.map(cartFormatteds => {
              return (
                <Purchased key={cartFormatteds.id}>
                  <div className="content">
                    <h1>Suas compras:</h1>
                    <h3>Revistas: {cartFormatteds.title}</h3>
                    {cartFormatteds.thumbnail ?
                      <img src={`${cartFormatteds.thumbnail.path}.${cartFormatteds.thumbnail.extension}`} alt={cartFormatteds.title} />
                      :
                      <p>Sem imagem</p>
                    }
                  </div>
                  <div className="price">
                    <h6>R$: {cartFormatteds.prices[0].price}</h6>
                    <button>Comprar</button>
                  </div>
                </Purchased>
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
