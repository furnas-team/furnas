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
import {Picture} from '../../../../components/picture/Picture';
import {Title} from '../../../../components/title/Title';
import trim from 'lodash/trim';

export class MainScreen extends React.Component {

  static propTypes = {
    onSendContactClick: func
  };

  state = {
    animationFinished: false,
    inputValue: '',
    inputIsValid: true
  };

  componentDidMount() {
    const AdobeAn = window.AdobeAn = {};
    firstScreenAnimation(window.createjs, AdobeAn);
    init();
    setTimeout(() => this.setState({animationFinished: true}), 2000)
  }

  handleSendContactClick = () => {
    const {onSendContactClick} = this.props;
    const {inputValue} = this.state;
    if (!trim(inputValue)) {
      this.setState({inputIsValid: false});
    } else {
      onSendContactClick(inputValue);
    }
  };


  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value, inputIsValid: true});
  };

  render() {
    const {onSendContactClick} = this.props;
    const {animationFinished, inputValue, inputIsValid} = this.state;
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
                 onChange={this.handleInputChange}
                 isValid={inputIsValid}
                 value={inputValue}/>
          <Button className="main-screen__button"
                  buttonStyle={ButtonStyle.BIG_BLUE}
                  onClick={this.handleSendContactClick}>
            Связаться
          </Button>
        </div>
        <div className="main-screen__form-desktop">
          <div>
            <Title className="main-screen__title">
              Студия <br/> дизайна Furnas
            </Title>
            <BlockText>
              Веб-дизайн, разработка, иллюстрации
            </BlockText>
            <div className="main-screen__desktop-contact-row">
              <Input className="main-screen__input"
                     onChange={this.handleInputChange}
                     isValid={inputIsValid}
                     value={inputValue}
                     placeholder="Телефон, почта или скайп"/>
              <Button className="main-screen__button"
                      buttonStyle={ButtonStyle.BIG_BLUE}
                      onClick={this.handleSendContactClick}>
                Связаться
              </Button>
            </div>
          </div>
          {/*<Picture forTabletPortraitUp={[require('./images/main.svg')]}*/}
                   {/*imgClassName="main-screen__img"*/}
                   {/*alt="Дизайн-студия Furnas иллюстрация"/>*/}
          <Picture forTabletPortraitUp={[require('./images/background.svg')]}
                   imgClassName="main-screen__background-img"
                   alt="Дизайн-студия Furnas иллюстрация"/>
          <Picture forTabletPortraitUp={[require('./images/girl.svg')]}
                   imgClassName="main-screen__girl-img main-screen__girl-img_movement"
                   alt="Дизайн-студия Furnas иллюстрация"/>
          <Picture forTabletPortraitUp={[require('./images/boy.svg')]}
                   imgClassName="main-screen__boy-img main-screen__boy-img_movement"
                   alt="Дизайн-студия Furnas иллюстрация"/>
        </div>
      </div>
    );
  }

}
