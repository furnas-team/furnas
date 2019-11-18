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
                     imgClassName="team-screen__image-img"
                     forPhoneOnly={[require('./images/designer.png')]}
                     forTabletPortraitUp={[require('./images/designer.png')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 2 дизайнера</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img"
                     forPhoneOnly={[require('./images/frontend.png')]}
                     forTabletPortraitUp={[require('./images/frontend.png')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 2 фронтенд разработчика</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img"
                     forPhoneOnly={[require('./images/backend.png')]}
                     forTabletPortraitUp={[require('./images/backend.png')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 1 бекенд разработчик</BlockText>
          </div>
          <div className="team-screen__structure-item">
            <Picture className="team-screen__image"
                     imgClassName="team-screen__image-img"
                     forPhoneOnly={[require('./images/analytics.png')]}
                     forTabletPortraitUp={[require('./images/analytics.png')]}
                     alt="Фигура"/>
            <BlockText className="team-screen__structure-text"> 1 аналитик</BlockText>
          </div>
        </div>
        <SpecialistsCarousel className="team-screen__carousel"/>
      </div>
    );
  }

}
