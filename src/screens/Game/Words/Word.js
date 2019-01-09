// @flow
import React from 'react';

type Props = {
  completed: boolean,
  word: string,
}

const Word = ({ completed, word }: Props) => {
  if (completed) {
    return <span className="completed"> {word} </span>;
  }
  return <span className="inComplete"> {word} </span>;
};

export default Word;
