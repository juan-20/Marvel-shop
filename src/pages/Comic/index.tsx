import md5 from 'md5';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  let characters = "";
  return (
    <Container>
      {comics.map(comic => {
        return (
          <ComicMain>
            <ComicHeader key={comic.id} >

              <h1>{comic.title}</h1>

              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />

              <p>Formato: {comic.format}</p>

              {comic.characters.available ?
                <p>Quantidade de personagens: {comic.characters.available}</p>
                :
                <p>Nenhum personagem informado</p>
              }

              {comic.characters.available ?
                <img src={`${comic.characters.items[9].resourceURI}.png`} alt={comic.title} />
                : <p>Sem imagens de personagens </p>
              }

            </ComicHeader>

            <ComicBody>
              <div className="price">
                <h6>R$:{comic.prices[0].price}</h6>
                <p>Entrega em 4 dias após a compra</p>
                <p className="stock">Em estoque</p>
                <button>Adicionar ao carrinho</button>
              </div>

              <div className="description">

                <table>
                  <tr>
                    <td>Descrição</td>
                    <td>{comic.description}</td>
                  </tr>
                </table>

              </div>
            </ComicBody>
          </ComicMain>
        );
      })}
    </Container>
  );
};

export default ComicPage;
