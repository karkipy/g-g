// @flow
// @global window
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Words from './Words';
import nextWord from '../../engine/store/actions/nextWord';
import { PrevButton, NextButton } from './Buttons';
import PrevImages from './Images';

type Props = {
  current: string,
  next: () => void,
  completed: number,
  image: string,
}
class Game extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: props.current,
      words: props.current.split('').map(m => ({
        completed: false,
        word: m,
      })),
    };
    this.nextWord = this.nextWord.bind(this);
  }

  static getDerivedStateFromProps(props, prevState) {
    if (props.current.toUpperCase() !== prevState.currentWord.toUpperCase()) {
      return {
        currentWord: props.current,
        words: props.current.split('').map(m => ({
          completed: false,
          word: m,
        })),
      };
    }
    return null;
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
      if (m.word.toUpperCase() === e.key.toUpperCase() && count < 1 && m.completed === false) {
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

  nextWord() {
    const { completed, next } = this.props;
    this.setState({
      words: [],
    }, () => next(completed));
  }

  render() {
    const { words } = this.state;
    const totalLength = words.length;
    const { image, current } = this.props;
    const completedLength = words.filter(m => m.completed).length;
    return (
      <div>
        <PrevButton />
        {totalLength === completedLength ? <NextButton onClick={() => this.nextWord()} /> : null}
        <div className="container">
          <PrevImages />
          <div className="picture">
            <img alt={current} src={image} />
          </div>
          <Words words={words} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ current, completed, image }) => ({ current, completed, image });
const mapApiToProps = dispatch => ({ next: completed => dispatch(nextWord(completed)) });

export default connect(mapStateToProps, mapApiToProps)(Game);
