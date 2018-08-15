import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {Input} from '../../../../components/input/Input';
import './main-screen.scss';
import classNames from 'classnames';
import {firstScreenAnimation} from './animation/first-screen';
import {init} from './animation/animation';

export class MainScreen extends React.Component {

  state = {
    animationFinished: false
  };

  componentDidMount() {
    const AdobeAn = window.AdobeAn = {};
    firstScreenAnimation(window.createjs, AdobeAn);
    init();
    setTimeout(() => this.setState({animationFinished: true}), 8000)
  }

  render() {
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
            Немного текста о сайте, на который
          </BlockText>
          <BlockText>
            попал пользователь
          </BlockText>
          <Input className="main-screen__input" placeholder="Телефон, почта или скайп"/>
          <Button className="main-screen__button"
                  buttonStyle={ButtonStyle.BIG_BLUE}>
            Отправить
          </Button>
        </div>
      </div>
    );
  }

}
