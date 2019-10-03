import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './steps-explanations-screen.scss';
import {BlockTitle} from '../../../../components/block-title/BlockTitle';
import {TextUnderline} from '../../../../components/text-underline/TextUnderline';
import {Picture} from '../../../../components/picture/Picture';
import anime from 'animejs';


let turnsCount = 1;

export class StepsExplanationScreen extends React.Component {

  handleBigFlowerMouseOver = () => {
    anime({
      targets: '.steps-explanation-screen__big-flower-img',
      rotate: `${turnsCount}turn`,
      easing: 'easeInOutCubic',
      duration: 1000
    });

    turnsCount++;
  };

  render() {
    return (
      <div className="steps-explanation-screen">
        <div className="steps-explanation-screen__text">
          <div className="steps-explanation-screen__text-mobile">
            <SectionTitle className="steps-explanation-screen__title">
              Что делаете?
            </SectionTitle>
            <BlockText>
              Занимаемся веб-разработкой
            </BlockText>
            <BlockText>
              и дизайном на заказ
            </BlockText>
          </div>
          <div className="steps-explanation-screen__text-desktop">
            <SectionTitle className="steps-explanation-screen__title">
              Что делаете?
            </SectionTitle>
            <BlockText>
              Занимаемся веб-разработкой
            </BlockText>
            <BlockText>
              и дизайном на заказ
            </BlockText>
          </div>
        </div>
        <div className="steps-explanation-screen__schema">
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Сайты</TextUnderline>
                </BlockTitle>
                <BlockText>
                  веб-приложения, лендинги, корпоративные сайты
                </BlockText>
              </div>
            </div>
            <div className="steps-explanation-screen__right-arrow">
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__left-arrow">
            </div>
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Дизайн</TextUnderline>
                </BlockTitle>
                <BlockText>
                  ui/ux дизайн, иллюстрации, инфорграфика
                </BlockText>
              </div>
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>MVP</TextUnderline>
                </BlockTitle>
                <BlockText>
                  разработка MVP для стартапов
                </BlockText>
              </div>
            </div>
            <div className="steps-explanation-screen__right-arrow">
            </div>
          </div>
          <div className="steps-explanation-screen__schema-row">
            <div>
            </div>
            <div className="steps-explanation-screen__schema-block">
              <div className="steps-explanation-screen__schema-block-text">
                <BlockTitle className="steps-explanation-screen__schema-block-title">
                  <TextUnderline>Разработка</TextUnderline>
                </BlockTitle>
                <BlockText>
                  react&nbsp;js, node&nbsp;js, c#, asp.net, java, php
                </BlockText>
              </div>
            </div>
          </div>
        </div>
        <div className="steps-explanation-screen__schema-desktop">
          <div className="steps-explanation-screen__big-flower">
            <Picture forTabletPortraitUp={[require('./images/big-flower.svg')]}
                     onMouseOver={this.handleBigFlowerMouseOver}
                     imgClassName="steps-explanation-screen__big-flower-img"
                     alt="Дизайн-студия Furnas цветок"/>
            <div className="steps-explanation-screen__flower-top">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  Дизайн
                </BlockTitle>
                <div className="steps-explanation-screen__flower-top-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-top-text">ui/ux дизайн, иллюстрации, инфорграфика</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-bottom">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  Разработка
                </BlockTitle>
                <div className="steps-explanation-screen__flower-bottom-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-bottom-text">react&nbsp;js, node&nbsp;js, c#, asp.net, java, php</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-left">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  Сайты
                </BlockTitle>
                <div className="steps-explanation-screen__flower-left-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-left-text">веб-приложения, лендинги, корпоративные сайты</BlockText>
            </div>
            <div className="steps-explanation-screen__flower-right">
              <div>
                <BlockTitle className="steps-explanation-screen__flower-title">
                  MVP
                </BlockTitle>
                <div className="steps-explanation-screen__flower-right-border">

                </div>
              </div>
              <BlockText className="steps-explanation-screen__flower-right-text">разработка MVP для&nbsp;стартапов</BlockText>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
