// @flow
import React from 'react';
import Word from './Word';


type WordObj = {
  completed: boolean,
  word: string,
}

type Props = {
  words: Array<WordObj>,
}

const Words = ({ words }: Props) => {
  const allWords = words.map((m, idx) => (
    <Word
      // eslint-disable-next-line
      key={idx}
      word={m.word}
      completed={m.completed}
    />
  ));
  return <div className="words-container">{allWords}</div>;
};

export default Words;
