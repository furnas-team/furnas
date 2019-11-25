import React from 'react';
import './money-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';

export class MoneyScreen extends React.Component {

  render() {
    return (
      <div className="money-screen">
        <div className="money-screen__text">
          <SectionTitle className="money-screen__title">
            А сколько стоит?
          </SectionTitle>
          <Picture className="money-screen__image-mob"
                   imgClassName="money-screen__image-mob-img"
                   forPhoneOnly={[require('./images/franklin.svg')]}
                   forTabletPortraitUp={[require('./images/franklin.svg')]}
                   alt="Франклин иллюстрация" />
          <BlockText className="money-screen__block-text">
            В среднем, час работы стоит&nbsp;~&nbsp;1500&nbsp;руб.
            Цена проекта зависит от его сложности и обговаривается индивидуально.
          </BlockText>
        </div>
        <Picture className="money-screen__image"
                 dataAos="fade-up"
                 dataAosDuration="2000"
                 imgClassName="money-screen__image-img"
                 forPhoneOnly={[require('./images/franklin.svg')]}
                 forTabletPortraitUp={[require('./images/franklin.svg')]}
                 alt="Франклин иллюстрация" />
      </div>
    );    
  }

}
