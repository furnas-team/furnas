import React from 'react';
import './design-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class DesignScreen extends React.Component {

  static propTypes = {
    id: string
  };

  render() {
    const {id} = this.props;
    return (
      <div className="design-screen" id={id}>
        <SectionTitle className="design-screen__title">
          Портфолио
        </SectionTitle>
        <BlockText className="design-screen__subtitle">
          Мы работаем над разными задачами, следим за качеством
          и пишем статьи с&nbsp;разборами ошибок или замечаниями по интересным вещам.
          Переходите по ссылкам и смотрите сами.
        </BlockText>
        <SectionTitle className="design-screen__title2">
          UI/UX Дизайн
        </SectionTitle>
        <div className="design-screen__portfolio">
          <UniversalLink noStyle={true} target="_blank" href="https://www.behance.net/gallery/83443803/finansist">
            <div className="design-screen__card">
              <div className="design-screen__card-name">Финансист</div>
              <div className="design-screen__card-type">UI дизайн</div>
              <Picture className="design-screen__image"
                       imgClassName="design-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-finansist_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-finansist_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-finansist_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-finansist_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-finansist.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-finansist_2x.png')]}
                       alt="Финансист"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://www.behance.net/gallery/83377225/UIUX-Design-Saragh">
            <div className="design-screen__card">
              <div className="design-screen__card-name design-screen__card-name_white">Saragh</div>
              <div className="design-screen__card-type design-screen__card-type_white">UI дизайн</div>
              <Picture className="design-screen__image"
                       imgClassName="design-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-saragh_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-saragh_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-saragh_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-saragh_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-saragh.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-saragh_2x.png')]}
                       alt="Saragh"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://www.behance.net/gallery/83376977/UIUX-Design-CodeFighter">
            <div className="design-screen__card">
              <div className="design-screen__card-name design-screen__card-name_white">CodeFighter</div>
              <div className="design-screen__card-type design-screen__card-type_white">UI дизайн</div>
              <Picture className="design-screen__image"
                       imgClassName="design-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-codefighter_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-codefighter_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-codefighter_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-codefighter_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-codefighter.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-codefighter_2x.png')]}
                       alt="CodeFighter"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://www.behance.net/gallery/83376977/UIUX-Design-CodeFighter">
            <div className="design-screen__card">
              <div className="design-screen__card-name design-screen__card-name_blue">LivenHouse</div>
              <div className="design-screen__card-type design-screen__card-type_blue">UI дизайн</div>
              <Picture className="design-screen__image"
                       imgClassName="design-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-livenhouse_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-livenhouse_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-livenhouse_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-livenhouse_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-livenhouse.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-livenhouse_2x.png')]}
                       alt="LivenHouse"/>
            </div>
          </UniversalLink>
        </div>
        <div className="design-screen__row">
          <BlockText>
            Еще больше примеров работ
          </BlockText>
          <UniversalLink noStyle={true} target="_blank" href="https://www.behance.net/sankinamaria">
            <div className="design-screen__text-row">
              <Picture className="design-screen__image-foreign"
                       imgClassName="design-screen__image-foreign-img"
                       forPhoneOnly={[require('./images/foreign.svg')]}
                       forTabletPortraitUp={[require('./images/foreign.svg')]}
                       alt="Фигура"/>
              <BlockText className="design-screen__structure-text">Дизайн</BlockText>
            </div>
          </UniversalLink>
        </div>
      </div>
    );
  }

}
