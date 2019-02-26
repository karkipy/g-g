import { PREV_WORD } from '../type';
import { mapper, DB, ImageMapper } from '../../gameEngine/db';

export default function nextWord(completed) {
  return {
    type: PREV_WORD,
    payload: {
      word: DB[mapper[completed - 1]],
      completed: completed - 1,
      image: ImageMapper[mapper[completed - 1]],
    },
  };
}
