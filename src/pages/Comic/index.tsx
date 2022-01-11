import md5 from 'md5';
import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';
import { RoomParams, Comic } from '../../types';

import { Container, ComicHeader } from './styles';

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
      console.log(response.data.data.results[0].characters)
    })
      .catch(error => console.log(error))
  }, []);

  let characters = "";
  return (
    <Container>
      {comics.map(comic => {
        return (
          <ComicHeader key={comic.id} >
            <h1>{comic.title}</h1>

            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />

            <p>Formato: {comic.format}</p>
            <p>Personagens {comic.characters.available}</p>
            {comic.characters.available ?

              <img src={`${comic.characters.items[9].resourceURI}.${comic.characters}`} alt={comic.title} />

              : <p>lol</p>}
          </ComicHeader>
        );
      })}
    </Container>
  );
};

export default ComicPage;
