import axios from 'axios';
import md5 from 'md5';

const publicKey = '178c96387633a76bfe6461e044aa2b1b';
const privateKey = '52415cf01d67ce75facf0c02cf7a8eae5e482402';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`
});


