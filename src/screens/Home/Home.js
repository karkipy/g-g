// @flow
import React from 'react';
import { connect } from 'react-redux';
import startGame from '../../engine/store/actions/startGame';

// Images
import Horse from '../../images/horse.png';
import Plane from '../../images/plane.png';
import Rocket from '../../images/rocket.png';
import Logo from '../../images/typekids_logo.png';
import RainBow from '../../images/rainbow.png';
import Background from '../../images/background.png';

type Props = {
  start: () => void,
}

const Home = ({ start }: Props) => (
  <div className="background">
    <img src={Background} alt="background" id="bg" height="900" />
    <div className="randomKidOne">
      <img src={Rocket} alt="Kid in a rocket" height="150" />
    </div>
    <div className="randomKidTwo">
      <img src={Plane} alt="Kid in a plane" height="150" />
    </div>
    <div className="rainbow">
      <img src={RainBow} alt="Rainbow" height="150" />
    </div>
    <div className="logo">
      <img src={Logo} alt="Logo" width="500" />
    </div>
    <div className="playButton">
      <button id="play" type="button" onClick={() => start()} />
    </div>
    <div className="randomKidThree">
      <img src={Horse} alt="Kid in a horse" height="200" />
    </div>
  </div>
);

const mapStateToDispatch = dispatch => ({
  start: () => dispatch(startGame()),
});

export default connect(null, mapStateToDispatch)(Home);
