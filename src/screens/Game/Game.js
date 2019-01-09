// @flow
// @global window
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Words from './Words';

type Props = {
  current: string,

}
class Game extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      words: props.current.split('').map(m => ({
        completed: false,
        word: m,
      })),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    window.addEventListener('keydown', this.eventHandler);
  }


  componentWillUnmount() {
    // eslint-disable-next-line
    window.removeEventListener('keydown', this.eventHandler);
  }

  eventHandler = (e) => {
    // eslint-disable-next-line
    const { words } = this.state;
    let count = 0;
    const newWord = words.map((m) => {
      if (m.word === e.key && count < 1 && m.completed === false) {
        count += 1;
        return {
          ...m,
          completed: true,

        };
      }
      return m;
    });
    this.setState({
      words: newWord,
    });
  }

  render() {
    const { words } = this.state;
    return (<Words words={words} />);
  }
}


const mapStateToProps = ({ current }) => ({ current });

export default connect(mapStateToProps)(Game);
