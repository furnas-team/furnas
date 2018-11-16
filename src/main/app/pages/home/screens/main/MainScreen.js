import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {Input} from '../../../../components/input/Input';
import './main-screen.scss';
import classNames from 'classnames';
import {firstScreenAnimation} from './animation/first-screen';
import {init} from './animation/animation';
import {func} from 'prop-types';
import ReactDOM from 'react-dom';

export class MainScreen extends React.Component {

  static propTypes = {
    onSendContactClick: func
  };

  state = {
    animationFinished: false,
  };

  inputRef = React.createRef();
  desktopInputRef = React.createRef();

  componentDidMount() {
    const AdobeAn = window.AdobeAn = {};
    firstScreenAnimation(window.createjs, AdobeAn);
    init();
    setTimeout(() => this.setState({animationFinished: true}), 2000)
  }

  render() {
    const {onSendContactClick} = this.props;
    const {animationFinished} = this.state;
    return (
      <div className={classNames("main-screen", {"main-screen_animation-finished": animationFinished})}>
        <div id="animation_container">
          <canvas id="canvas" width="320" height="560"></canvas>
          <div id="dom_overlay_container">
          </div>
        </div>
        <div className="main-screen__form">
          <SectionTitle className="main-screen__title">
            <span className="main-screen__pink-word">Дизайн</span> и <span className="main-screen__blue-word">вёрстка</span> лендинга в 4 шага
          </SectionTitle>
          <BlockText>
            Красивые лендинги,
          </BlockText>
          <BlockText>
            оригинальные идеи, чистый код.
          </BlockText>
          <Input className="main-screen__input"
                 placeholder="Телефон, почта или скайп"
                 ref={this.inputRef}/>
          <Button className="main-screen__button"
                  buttonStyle={ButtonStyle.BIG_BLUE}
                  onClick={() => onSendContactClick(ReactDOM.findDOMNode(this.inputRef.current).value)}>
            Связаться
          </Button>
        </div>
        <div className="main-screen__form-desktop">
          <SectionTitle className="main-screen__title">
            Дизайн и вертска лендинга в 4 шага
          </SectionTitle>
          <div className="main-screen__desktop-contact-row">
            <Input className="main-screen__input"
                   placeholder="Телефон, почта или скайп"
                   ref={this.desktopInputRef}/>
            <Button className="main-screen__button"
                    buttonStyle={ButtonStyle.BIG_BLUE}
                    onClick={() => onSendContactClick(ReactDOM.findDOMNode(this.desktopInputRef.current).value)}>
              Связаться
            </Button>
          </div>
        </div>
      </div>
    );
  }

}
