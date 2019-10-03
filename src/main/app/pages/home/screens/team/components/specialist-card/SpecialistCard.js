import React from 'react';
import {array, func, number, string} from 'prop-types';
import classNames from 'classnames';
import './specialist-card.scss';
import {Picture} from '../../../../../../components/picture/Picture';

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
    sex: string,
    imageUrl: string,
    onImageClick: func
  };

  render() {
    const {className, name, previousWorks, profession, experienceYears, sex, imageUrl, onImageClick} = this.props;
    return (
      <div className={classNames('specialist-card', className)}>
        <Picture className="specialist-card__image"
                 onClick={onImageClick}
                 imgClassName="specialist-card__image-img"
                 forPhoneOnly={[imageUrl]}
                 forTabletPortraitUp={[imageUrl]}
        />
        <div className="specialist-card__info">
          <div className="specialist-card__name">{name}</div>
          <div className="specialist-card__profession">{profession}</div>
          <div className="specialist-card__previous-works">
            <div className="specialist-card__previou-works-icon"></div>
            <div className="specialist-card__previous-works-text">
              {sex === SpecialistSex.MALE ? 'Работал' : 'Работала'} в {previousWorks.join(', ')}
            </div>
          </div>
          <div className="specialist-card__experience-years">Опыт работы {experienceYears} лет</div>
        </div>
      </div>
    );
  }

}
