import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { api } from '../../service/api';

import md5 from 'md5';
import { useEffect, useState } from 'react';
import { Comic, LocalStorage, Product } from '../../types/types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartProvider, useCart } from '../../hook/useCart';
import Header from '../../components/Header';

const publicKey = '178c96387633a76bfe6461e044aa2b1b';
const privateKey = '52415cf01d67ce75facf0c02cf7a8eae5e482402';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

function Home() {
  const [comics, setComics] = useState<Comic[]>([])
  const { addProduct } = useCart();

  useEffect(() => {
    api.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
    ).then(response => {
      setComics(response.data.data.results)
    })
      .catch(error => console.log(error))
  }, []);


  function HandleAddProduct(id: Comic) {

    addProduct([id]);
    toast.success('Produto adicionado', {
      theme: 'dark'
    });
  }
  return (
    <>
      <Header />

      <ProductList>


        {comics.map(comic => {
          return (
            <li key={comic.id}>
              <div className="basic-information">
                <Link to={`comic/${comic.id}`}>
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa da HQ ${comic.title}`} />
                  <div className="basic-information-text">
                    <strong>{comic.title}</strong>
                    <span>R$ {comic.prices[0].price || 'Preço indisponivel'}</span>
                  </div>

                </Link>
                <button
                  type="button"
                  onClick={() => HandleAddProduct(comic)}
                >
                  <div data-testid="cart-product-quantity">
                    <MdAddShoppingCart size={16} color="#FFF" />
                  </div>

                  <span>ADICIONAR</span>
                </button>
              </div>
            </li>
          )

        })}

      </ProductList>
    </>
  );
};

export default Home;