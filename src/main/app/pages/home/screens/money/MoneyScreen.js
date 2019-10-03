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
          <BlockText>
            В среднем, час стоит ~ 1500₽
          </BlockText>
          <BlockText>
            Цена проекта зависит от его сложности
          </BlockText>
          <BlockText>
            и обговаривается индивидуально.
          </BlockText>
        </div>
        <Picture className="money-screen__image"
                 imgClassName="money-screen__image-img"
                 forPhoneOnly={[require('./images/franklin_mob.png'), require('./images/franklin_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/franklin_mob_2x.png'), require('./images/franklin_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/franklin.png'), require('./images/franklin.webp')]}
                 forTabletPortraitUpRetina={[require('./images/franklin_2x.png'), require('./images/franklin_2x.webp')]}
                 alt="Франклин иллюстрация" />
      </div>
    );    
  }

}
