import { START_GAME, NEXT_WORD } from './type';

const initalState = {
  game: false,
  completed: -1,
  images: [],
};


const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        game: true,
        completed: 0,
        current: payload.word,
        image: payload.image,
      };

    case NEXT_WORD:
      const prevImage = state.image;
      return {
        ...state,
        completed: payload.completed,
        current: payload.word,
        images: [...state.images, prevImage],
        image: payload.image,
      };
    default:
      return state;
  }
};

export default reducer;
