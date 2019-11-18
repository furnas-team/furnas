import React from 'react';
import {array, func, number, string} from 'prop-types';
import classNames from 'classnames';
import './specialist-card.scss';
import {Picture} from '../../../../../../components/picture/Picture';
import {SectionTitle} from '../../../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../../../components/block-text/BlockText';

export const SpecialistSex = {
  MALE: 'male',
  FEMALE: 'female'
};

export class SpecialistCard extends React.Component {

  static propTypes = {
    className: string,
    name: string,
    previousWorks: array,
    profession: string,
    experienceYears: number,
    location: string,
    sex: string,
    imageUrl: string,
    onImageClick: func,
    story: string
  };

  render() {
    const {className, name, previousWorks, profession, experienceYears, sex, imageUrl, onImageClick, location, story} = this.props;
    return (
      <div className={classNames('specialist-card', className)}>
        <div className="specialist-card__info">
          <SectionTitle className="specialist-card__name">{name}</SectionTitle>
          <BlockText className="specialist-card__profession">{profession}</BlockText>
          <div className="specialist-card__location">
            <div className="specialist-card__location-icon"></div>
            <BlockText>{location}</BlockText>
          </div>
          <div className="specialist-card__experience-years">
            <div className="specialist-card__experience-icon"></div>
            <BlockText>Опыт {experienceYears} лет</BlockText>
          </div>
          <div className="specialist-card__previous-works">
            <div className="specialist-card__previou-works-icon"></div>
            <BlockText>{previousWorks.join(', ')}</BlockText>
          </div>
          <BlockText className="specialist-card__story">«{story}»</BlockText>
        </div>
        <Picture className="specialist-card__image"
                 onClick={onImageClick}
                 imgClassName="specialist-card__image-img"
                 forPhoneOnly={[imageUrl]}
                 forTabletPortraitUp={[imageUrl]}
        />
      </div>
    );
  }

}
