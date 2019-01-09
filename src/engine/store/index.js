import { START_GAME } from './type';

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
    default:
      return state;
  }
};

export default reducer;
