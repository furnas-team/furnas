import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './team-screen.scss';
import {TextUnderline, UnderlineColor} from '../../../../components/text-underline/TextUnderline';
import {RegularText} from '../../../../components/regular-text/RegularText';
import {Picture} from '../../../../components/picture/Picture';
import {SpecialistsCarousel} from './components/specialists-carousel/SpecialistsCarousel';

export class TeamScreen extends React.Component {

  render() {
    return (
      <div className="team-screen">
        <div className="team-screen__text">
          <SectionTitle className="team-screen__title">
            А кто делает?
          </SectionTitle>
          <BlockText>
            Команда дизайнеров, разработчиков и аналитиков.
          </BlockText>
          <BlockText>
            У нас нет менеджеров, продажников и бухгалтеров.
          </BlockText>
          <BlockText>
            Вы общаетесь напрямую с теми, кто делает ваш заказ.
          </BlockText>
          <BlockText>
            Опыт работы всех сотрудников более 7 лет.
          </BlockText>
        </div>
        <SpecialistsCarousel className="team-screen__carousel"/>
      </div>
    );
  }

}
