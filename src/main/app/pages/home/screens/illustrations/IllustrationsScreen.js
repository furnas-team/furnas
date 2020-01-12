import React from 'react';
import './illustrations-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class IllustrationsScreen extends React.Component {

  static propTypes = {
    id: string
  };

  render() {
    const {id} = this.props;
    return (
      <div className="illustrations-screen" id={id}>
        <SectionTitle className="illustrations-screen__title2">
          Иллюстрации
        </SectionTitle>
        <div className="illustrations-screen__portfolio">
          <UniversalLink noStyle={true} target="_blank" href="https://dribbble.com/shots/6738382-New-main-screen-web-studio-Furnas-ru">
            <div className="illustrations-screen__card">
              {/*<div className="illustrations-screen__card-name">Финансист</div>*/}
              {/*<div className="illustrations-screen__card-type">UI дизайн</div>*/}
              <Picture className="illustrations-screen__image"
                       imgClassName="illustrations-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-mountain_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-mountain_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-mountain_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-mountain_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-mountain.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-mountain_2x.png')]}
                       alt="Финансист"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://dribbble.com/shots/7194070-Family-walking">
            <div className="illustrations-screen__card">
              {/*<div className="illustrations-screen__card-name illustrations-screen__card-name_white">Saragh</div>*/}
              {/*<div className="illustrations-screen__card-type illustrations-screen__card-type_white">UI дизайн</div>*/}
              <Picture className="illustrations-screen__image"
                       imgClassName="illustrations-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-dental_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-dental_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-dental_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-dental_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-dental.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-dental_2x.png')]}
                       alt="Saragh"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://dribbble.com/shots/7857147-Stockholm-Postcard">
            <div className="illustrations-screen__card">
              {/*<div className="illustrations-screen__card-name illustrations-screen__card-name_white">CodeFighter</div>*/}
              {/*<div className="illustrations-screen__card-type illustrations-screen__card-type_white">UI дизайн</div>*/}
              <Picture className="illustrations-screen__image"
                       imgClassName="illustrations-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-stockholm_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-stockholm_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-stockholm_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-stockholm_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-stockholm.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-stockholm_2x.png')]}
                       alt="CodeFighter"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://dribbble.com/shots/6327383-Leon-and-Matilda">
            <div className="illustrations-screen__card">
              {/*<div className="illustrations-screen__card-name illustrations-screen__card-name_blue">LivenHouse</div>*/}
              {/*<div className="illustrations-screen__card-type illustrations-screen__card-type_blue">UI дизайн</div>*/}
              <Picture className="illustrations-screen__image"
                       imgClassName="illustrations-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-leon_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-leon_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-leon_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-leon_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-leon.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-leon_2x.png')]}
                       alt="LivenHouse"/>
            </div>
          </UniversalLink>
        </div>
        <div className="illustrations-screen__row">
          <BlockText>
            Еще больше примеров работ
          </BlockText>
          <UniversalLink noStyle={true} target="_blank" href="https://dribbble.com/sanmary">
            <div className="illustrations-screen__text-row">
              <Picture className="illustrations-screen__image-foreign"
                       imgClassName="illustrations-screen__image-foreign-img"
                       forPhoneOnly={[require('./images/foreign.svg')]}
                       forTabletPortraitUp={[require('./images/foreign.svg')]}
                       alt="Фигура"/>
              <BlockText className="illustrations-screen__structure-text">Иллюстрации</BlockText>
            </div>
          </UniversalLink>
        </div>
      </div>
    );
  }

}
