// @flow
import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Game from './Game';

type Props = {
  game: boolean,
}

const TypeKids = ({ game }: Props) => {
  if (game) {
    return <Game />;
  }
  return <Home />;
};

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps)(TypeKids);
