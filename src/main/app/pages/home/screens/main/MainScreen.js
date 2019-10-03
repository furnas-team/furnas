import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {Input} from '../../../../components/input/Input';
import './main-screen.scss';
import classNames from 'classnames';
import {func} from 'prop-types';
import {Picture} from '../../../../components/picture/Picture';
import {Title} from '../../../../components/title/Title';
import trim from 'lodash/trim';
import chance from 'chance';
import anime from 'animejs';

let html2canvas;

if (!SERVER) {
  html2canvas = require('html2canvas');
}

let dustedClicked = false;

function weightedRandomDistrib(peak, canvasCount) {
  var prob = [], seq = [];
  for (let i = 0; i < canvasCount; i++) {
    prob.push(Math.pow(canvasCount - Math.abs(peak - i), 3));
    seq.push(i);
  }
  return (new chance()).weighted(seq, prob);
}

function newCanvasFromImageData(imageDataArray, w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const tempCtx = canvas.getContext("2d");
  tempCtx.putImageData(new ImageData(imageDataArray, w, h), 0, 0);

  return canvas;
}

export class MainScreen extends React.Component {

  static propTypes = {
    onSendContactClick: func
  };

  state = {
    animationFinished: true,//animation switched of
    inputValue: '',
    inputIsValid: true,
    canTitleBeDestroyed: false
  };

  componentDidMount() {
    // const AdobeAn = window.AdobeAn = {};
    // firstScreenAnimation(window.createjs, AdobeAn);
    // init();
    // setTimeout(() => this.setState({animationFinished: true}), 2000);

    const canvasCount = 35;
    const imageDataArray = [];
    html2canvas(window.document.getElementsByClassName('main-screen__desktop-title')[0], {
      ignoreElements: (element) => element.tagName === 'SOURCE',
      backgroundColor: null
    }).then(canvas => {
      try {
        //capture all div data as image
        var ctx = canvas.getContext("2d");
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixelArr = imageData.data;
        //create all layours
        for (let i = 0; i < canvasCount; i++) {
          let arr = new Uint8ClampedArray(imageData.data);
          for (let j = 0; j < arr.length; j++) {
            arr[j] = 0;
          }
          imageDataArray.push(arr);
        }
        for (let i = 0; i < pixelArr.length; i += 4) {
          //find the highest probability canvas the pixel should be in
          let p = Math.floor((i / pixelArr.length) * canvasCount);
          let a = imageDataArray[weightedRandomDistrib(p, canvasCount)];
          a[i] = pixelArr[i];
          a[i + 1] = pixelArr[i + 1];
          a[i + 2] = pixelArr[i + 2];
          a[i + 3] = pixelArr[i + 3];
        }
        for (let i = 0; i < canvasCount; i++) {
          let c = newCanvasFromImageData(imageDataArray[i], canvas.width, canvas.height);
          c.classList.add("dust");
          document.getElementsByClassName('main-screen__desktop-title')[0].appendChild(c);
        }
        for (let el of document.querySelectorAll('.main-screen__desktop-title *:not(.dust)')) {
          el.style.visibility = 'hidden';
        }
        this.setState({canTitleBeDestroyed: true});
      } catch (e) {

      }
    });
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

  handleDesktopTitleClick = () => {
    const {canTitleBeDestroyed} = this.state;
    if (!canTitleBeDestroyed || dustedClicked) {
      return;
    }
    dustedClicked = false;
    let index = 0;
    for (let el of document.querySelectorAll('.dust')) {
      const animation = anime({
        targets: el,
        duration: 1000 + 110 * index,
        easing: 'easeInOutSine',
        filter: ["blur(0px)", "blur(0.8px)"],
        translateX: 40,
        translateY: -40,
        rotate: (new chance()).integer({min: -10, max: 10})
      });
      setTimeout(() => {
        el.classList.add("dust_fade");
      }, 200 + 110 * index);
      index++;
    }

    setTimeout(() => {
      this.setState({canTitleBeDestroyed: false})
    }, 4000)

  };

  render() {
    const {animationFinished, inputValue, inputIsValid, canTitleBeDestroyed} = this.state;
    return (
      <div className={classNames("main-screen", {"main-screen_animation-finished": animationFinished})}>
        <div id="animation_container">
          <canvas id="canvas" width="320" height="560"></canvas>
          <div id="dom_overlay_container">
          </div>
        </div>
        <div className="main-screen__form">
          <SectionTitle className="main-screen__title">
            Студия <span className="main-screen__pink-word">дизайна</span> и&nbsp;<span className="main-screen__blue-word">веб-разработки</span>
          </SectionTitle>
          <BlockText>
            UX/UI дизайн,
          </BlockText>
          <BlockText>
            разработка, иллюстрации
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
            <Title className={classNames('main-screen__title main-screen__desktop-title', {'main-screen__desktop-title_cursor': canTitleBeDestroyed})}
                   onClick={this.handleDesktopTitleClick}>
              <div>Студия</div>
              <div>дизайна Furnas</div>
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
          <Picture forTabletPortraitUp={[require('./images/background.svg')]}
                   imgClassName="main-screen__background-img main-screen__background-img_movement"
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
