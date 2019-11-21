import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './team-screen.scss';
import {SpecialistsCarousel} from './components/specialists-carousel/SpecialistsCarousel';
import {Picture} from '../../../../components/picture/Picture';

export class TeamScreen extends React.Component {

  render() {
    return (
      <div className="team-screen">
        <SectionTitle className="team-screen__title">
          Наша команда
        </SectionTitle>
        <BlockText className="team-screen__subtitle">
          Опыт работы всех сотрудников <b>более&nbsp;7&nbsp;лет</b>
        </BlockText>
        <div className="team-screen__structure-row">
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img team-screen__image-img-designer"
                     forPhoneOnly={[require('./images/designer.svg')]}
                     forTabletPortraitUp={[require('./images/designer.svg')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 2 дизайнера</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img team-screen__image-img-frontend"
                     forPhoneOnly={[require('./images/frontend.svg')]}
                     forTabletPortraitUp={[require('./images/frontend.svg')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 2 фронтенд разработчика</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img team-screen__image-img-backend"
                     forPhoneOnly={[require('./images/backend.svg')]}
                     forTabletPortraitUp={[require('./images/backend.svg')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 1 бекенд разработчик</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img team-screen__image-img-analytics"
                     forPhoneOnly={[require('./images/analytics.svg')]}
                     forTabletPortraitUp={[require('./images/analytics.svg')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 1 аналитик</BlockText>
          </div>
        </div>
        <SpecialistsCarousel className="team-screen__carousel"/>
      </div>
    );
  }

}
