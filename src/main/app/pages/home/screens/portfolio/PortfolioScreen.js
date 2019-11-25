import React from 'react';
import './portfolio-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class PortfolioScreen extends React.Component {

  static propTypes = {
    id: string
  };

  render() {
    const {id} = this.props;
    return (
      <div className="portfolio-screen" id={id}>
        <SectionTitle className="portfolio-screen__title">
          Портфолио
        </SectionTitle>
        <BlockText className="portfolio-screen__subtitle">
          Мы работаем над разными задачами, следим за качеством
          и пишем статьи с разборами ошибок или замечаниями по интересным вещам.
          Переходите по ссылкам и смотрите сами.
        </BlockText>
        <div className="portfolio-screen__structure-row">
          <UniversalLink noStyle={true} href="https://www.behance.net/sankinamaria" target="_blank">
            <div className="portfolio-screen__structure-item">
              <Picture className="portfolio-screen__image"
                       imgClassName="portfolio-screen__image-img"
                       forPhoneOnly={[require('./images/designer.png')]}
                       forTabletPortraitUp={[require('./images/designer.png')]}
                       alt="Фигура"/>
              <div className="portfolio-screen__text-row">
                <Picture className="portfolio-screen__image-foreign"
                         imgClassName="portfolio-screen__image-foreign-img"
                         forPhoneOnly={[require('./images/foreign.svg')]}
                         forTabletPortraitUp={[require('./images/foreign.svg')]}
                         alt="Фигура"/>
                <BlockText className="portfolio-screen__structure-text">Дизайн</BlockText>
              </div>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="https://dribbble.com/sanmary" target="_blank">
            <div className="portfolio-screen__structure-item">
              <Picture className="portfolio-screen__image"
                       imgClassName="portfolio-screen__image-img"
                       forPhoneOnly={[require('./images/paint-palette-and-brush.svg')]}
                       forTabletPortraitUp={[require('./images/paint-palette-and-brush.svg')]}
                       alt="Фигура"/>
              <div className="portfolio-screen__text-row">
                <Picture className="portfolio-screen__image-foreign"
                         imgClassName="portfolio-screen__image-foreign-img"
                         forPhoneOnly={[require('./images/foreign.svg')]}
                         forTabletPortraitUp={[require('./images/foreign.svg')]}
                         alt="Фигура"/>
                <BlockText className="portfolio-screen__structure-text">Иллюстрации</BlockText>
              </div>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="https://github.com/furnasteam" target="_blank">
            <div className="portfolio-screen__structure-item">
              <Picture className="portfolio-screen__image"
                       imgClassName="portfolio-screen__image-img"
                       forPhoneOnly={[require('./images/web-programming.svg')]}
                       forTabletPortraitUp={[require('./images/web-programming.svg')]}
                       alt="Фигура"/>
              <div className="portfolio-screen__text-row">
                <Picture className="portfolio-screen__image-foreign"
                         imgClassName="portfolio-screen__image-foreign-img"
                         forPhoneOnly={[require('./images/foreign.svg')]}
                         forTabletPortraitUp={[require('./images/foreign.svg')]}
                         alt="Фигура"/>
                <BlockText className="portfolio-screen__structure-text">Код</BlockText>
              </div>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="https://spark.ru/startup/furnas" target="_blank">
            <div className="portfolio-screen__structure-item">
              <Picture className="portfolio-screen__image"
                       imgClassName="portfolio-screen__image-img"
                       forPhoneOnly={[require('./images/gazette.svg')]}
                       forTabletPortraitUp={[require('./images/gazette.svg')]}
                       alt="Фигура"/>
              <div className="portfolio-screen__text-row">
                <Picture className="portfolio-screen__image-foreign"
                         imgClassName="portfolio-screen__image-foreign-img"
                         forPhoneOnly={[require('./images/foreign.svg')]}
                         forTabletPortraitUp={[require('./images/foreign.svg')]}
                         alt="Фигура"/>
                <BlockText className="portfolio-screen__structure-text">Статьи</BlockText>
              </div>
            </div>
          </UniversalLink>
        </div>
      </div>
    );
  }

}
