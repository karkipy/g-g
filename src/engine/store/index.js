import { START_GAME, NEXT_WORD } from './type';

const initalState = {
  game: false,
  completed: -1,
};


const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        game: true,
        completed: 0,
        current: payload,
      };

    case NEXT_WORD:
      return {
        ...state,
        completed: payload.completed,
        current: payload.word,
      };
    default:
      return state;
  }
};

export default reducer;
