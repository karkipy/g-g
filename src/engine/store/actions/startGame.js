import { START_GAME } from '../type';
import { mapper, DB, ImageMapper } from '../../gameEngine/db';

export default function startGame() {
  return {
    type: START_GAME,
    payload: {
      word: DB[mapper[0]],
      image: ImageMapper[mapper[0]],
    },
  };
}
