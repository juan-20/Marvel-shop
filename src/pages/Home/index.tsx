import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { api } from '../../service/api';

import axios from 'axios';
import md5 from 'md5';
import { useEffect, useState } from 'react';
import { Comic } from '../../types';

const publicKey = '178c96387633a76bfe6461e044aa2b1b';
const privateKey = '52415cf01d67ce75facf0c02cf7a8eae5e482402';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

function Home() {
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    api.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
    ).then(response => {
      setComics(response.data.data.results)
      console.log(response.data.data.results)
    })
      .catch(error => console.log(error))
  }, []);

  return (
    <ProductList>
      {comics.map(comic => {
        return (
          <li key={comic.id}>
            <div className="basic-information">
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa da HQ ${comic.title}`} />
              <strong>{comic.title}</strong>
              <span>R$ {comic.prices[0].price || 'Preço indisponivel'}</span>
              <button
                type="button"
              // onClick={() => handleAddProduct(product.id)}
              >
                <div data-testid="cart-product-quantity">
                  <MdAddShoppingCart size={16} color="#FFF" />
                  0
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </div>
            <div className="expanded-information">
              <p>{comic.description}</p>

              {/* <p>{comic.creators.items[0].role || null}</p> */}
            </div>
          </li>
        )

      })}

    </ProductList>
  );
};

export default Home;