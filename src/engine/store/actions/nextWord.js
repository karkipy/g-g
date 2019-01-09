import { NEXT_WORD } from '../type';
import { mapper, DB } from '../../gameEngine/db';

export default function nextWord(completed) {
  return {
    type: NEXT_WORD,
    payload: {
      word: DB[mapper[completed + 1]],
      completed: completed + 1,
    },
  };
}
