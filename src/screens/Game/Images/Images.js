import React from 'react';
import { connect } from 'react-redux';

const Images = ({ images }) => images && images.map(
  (img, idx) => <img className="prev-image" style={{ zIndex: `-${25 - idx}` }} key={img} src={img} alt="BackGround " />,
);

const mapStateToProps = ({ images }) => ({ images });

export default connect(mapStateToProps)(Images);
