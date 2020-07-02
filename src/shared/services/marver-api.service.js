import axios from 'axios';
import { Config } from '../../config/config';

export function getCharacterComics(heroId) {
  return axios.get(
    `${Config.API_URL}/v1/public/characters/${heroId}/comics?orderBy=-focDate&apikey=${Config.PUBLIC_KEY}&hash=${Config.HASH}&limit=${Config.LIMIT}`
  );
}
