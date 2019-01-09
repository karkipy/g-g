import React from 'react';
import Word from './Word';


const Words = ({ words }) => words.map((m, idx) => (
  <Word
    // eslint-disable-next-line
    key={idx}
    word={m.word}
    completed={m.completed}
  />
));

export default Words;
