import md5 from 'md5';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import { useCart } from '../../hook/useCart';
import { api } from '../../service/api';
import { RoomParams, Comic } from '../../types/types';

import { Container, ComicHeader, ComicBody, ComicMain } from './styles';

const publicKey = '178c96387633a76bfe6461e044aa2b1b';
const privateKey = '52415cf01d67ce75facf0c02cf7a8eae5e482402';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


function ComicPage() {
  const params = useParams<RoomParams>();

  const comicId = params.id;

  const [comics, setComics] = useState<Comic[]>([])


  useEffect(() => {
    api.get(
      `http://gateway.marvel.com/v1/public/comics/${comicId}?ts=${time}&apikey=${publicKey}&hash=${hash}`
    ).then(response => {
      setComics(response.data.data.results)
      console.log(response.data.data.results)
    })
      .catch(error => console.log(error))
  }, []);


  const { addProduct } = useCart();

  function HandleAddProduct(id: any) {

    addProduct([id]);
    toast.success('Produto adicionado', {
      theme: 'dark'
    });
  }

  return (
    <>
      <Header />
      <Container>


        {comics.map(comic => {
          return (
            <ComicMain key={comic.id}>
              <ComicHeader  >

                <h1>{comic.title}</h1>

                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />

                {/* {comic.characters.available ?
                <img src={`${comic.characters.items[9].resourceURI}.png`} alt={comic.title} />
                : <p>Sem imagens de personagens </p>
              } */}

              </ComicHeader>

              <ComicBody>
                <div className="price">
                  <h6>R$: {comic.prices[0].price}</h6>
                  <p>Entrega em 4 dias após a compra</p>
                  <p className="stock">Em estoque</p>
                  <button onClick={() => HandleAddProduct(comic.id)} >Adicionar ao carrinho</button>
                </div>

                <div className="description">

                  <table>
                    <tr>
                      <td>Descrição</td>
                      <th>{comic.description}</th>
                    </tr>
                    {comic.characters.available ?
                      <tr>
                        <td>Quantidade de personagens:</td>
                        <th>{comic.characters.available}</th>
                      </tr>
                      :
                      <tr>
                        <td>Nenhum personagem informado</td>
                        <th>--</th>
                      </tr>
                    }
                    {comic.characters.available ?
                      <tr>
                        <td>{comic.creators.items[0].role || "--"}</td>
                        <th>{comic.creators.items[0].name || "--"}</th>
                      </tr>
                      :
                      <tr>
                        <td>Nenhum personagem informado</td>
                        <th>--</th>
                      </tr>
                    }
                    <tr>
                      <td>Formato:</td>
                      <th>{comic.format}</th>
                    </tr>
                  </table>

                </div>
              </ComicBody>
            </ComicMain>
          );
        })}
      </Container>
    </>
  );
};

export default ComicPage;
