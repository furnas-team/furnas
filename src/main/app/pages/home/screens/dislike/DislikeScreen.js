import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './dislike-screen.scss';
import {Picture} from '../../../../components/picture/Picture';

export class DislikeScreen extends React.Component {

  render() {
    return (
      <div className="dislike-screen">
        <div className="dislike-screen__text">
          <SectionTitle className="dislike-screen__title">
            А если не понравится?
          </SectionTitle>
          <Picture className="dislike-screen__image-mob"
                   imgClassName="dislike-screen__image-mob-img"
                   forPhoneOnly={[require('./images/scrooge_mob.png'), require('./images/scrooge_mob.webp')]}
                   forPhoneOnlyRetina={[require('./images/scrooge_mob_2x.png'), require('./images/scrooge_mob_2x.webp')]}
                   forTabletPortraitUp={[require('./images/scrooge.png'), require('./images/scrooge.webp')]}
                   forTabletPortraitUpRetina={[require('./images/scrooge_2x.png'), require('./images/scrooge_2x.webp')]}
                   alt="Скрудж иллюстрация" />
          <BlockText className="dislike-screen__block-text">
            Результат каждого этапа обсуждаем. Если работа не нравится, то за неё можно не платить.
          </BlockText>
        </div>
        <Picture className="dislike-screen__image"
                 imgClassName="dislike-screen__image-img"
                 forPhoneOnly={[require('./images/scrooge_mob.png'), require('./images/scrooge_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/scrooge_mob_2x.png'), require('./images/scrooge_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/scrooge.png'), require('./images/scrooge.webp')]}
                 forTabletPortraitUpRetina={[require('./images/scrooge_2x.png'), require('./images/scrooge_2x.webp')]}
                 alt="Скрудж иллюстрация" />
      </div>
    );    
  }

}
