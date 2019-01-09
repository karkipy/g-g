import { START_GAME } from '../type';
import { mapper, DB } from '../../gameEngine/db';

export default function startGame() {
  return {
    type: START_GAME,
    payload: DB[mapper[0]],
  };
}
