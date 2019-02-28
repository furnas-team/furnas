import React from 'react';
import './portfolio-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {Link} from '../../../../components/link/Link';

export class PortfolioScreen extends React.Component {

  render() {
    return (
      <div className="portfolio-screen">
        <div className="portfolio-screen__text">
          <SectionTitle className="portfolio-screen__title">
            А портфолио есть?
          </SectionTitle>
          <BlockText>
            Переходите по <Link href="/portfolio" target="_blank">ссылке</Link> и смотрите примеры наших работ.
          </BlockText>
        </div>
        <Picture className="portfolio-screen__image"
                 imgClassName="portfolio-screen__image-img"
                 forPhoneOnly={[require('./images/box_mob.png'), require('./images/box_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/box_mob_2x.png'), require('./images/box_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/box.png'), require('./images/box.webp')]}
                 forTabletPortraitUpRetina={[require('./images/box_2x.png'), require('./images/box_2x.webp')]}
                 alt="Портфолио иллюстрация" />
      </div>
    );    
  }

}
