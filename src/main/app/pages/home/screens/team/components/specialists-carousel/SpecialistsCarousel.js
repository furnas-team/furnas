import React from 'react';
import {string} from 'prop-types';
import './specialists-carousel.scss';
import {SpecialistCard, SpecialistSex} from '../specialist-card/SpecialistCard';
import classNames from 'classnames';
import map from 'lodash/map';

export class SpecialistsCarousel extends React.Component {

  static propTypes = {
    className: string
  };

  state = {
    activeIndex: 0
  };

  handleLeftClick = () => {
    const {activeIndex} = this.state;
    this.setState({activeIndex: Math.abs((6 + activeIndex - 1) % 6)});
  };

  handleRightClick = () => {
    const {activeIndex} = this.state;
    this.setState({activeIndex: Math.abs((6 + activeIndex + 1) % 6)});
  };

  getSpecialistClassName = (index) => {
    const {activeIndex} = this.state;
    return activeIndex === index ? 'specialists-carousel__specialist-card specialists-carousel__specialist-card_active' : 'specialists-carousel__specialist-card';
  };

  renderSpecialistCard(index) {
    switch (index) {
      case 0:
        return (
          <SpecialistCard name="Maрия"
                          key={index}
                          imageUrl={require('./images/masha-2.png')}
                          previousWorks={['Ingate', 'Rembot']}
                          onImageClick={this.handleRightClick}
                          className={this.getSpecialistClassName(index)}
                          experienceYears={7}
                          sex={SpecialistSex.FEMALE}
                          story={`Люблю работать из кофеен, заниматься йогой и приглашать друзей в гости.`}
                          location="Санкт-Петербург"
                          profession="UX/UI дизайнер"/>
        );
      case 1:
        return (
          <SpecialistCard name="Сергей"
                          key={index}
                          imageUrl={require('./images/sergey-1.png')}
                          profession="Разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
                          sex={SpecialistSex.MALE}
                          location="Санкт-Петербург"
                          story={`Обожаю проводить время на Розе Хутор, играть в футбол и путешествовать по Скандинавским странам.`}
                          className={this.getSpecialistClassName(index)}
                          previousWorks={['IIG', 'Ingate', 'Grabr']}/>
        );
      case 2:
        return (
          <SpecialistCard name="Мария"
                          key={index}
                          imageUrl={require('./images/masha-1.png')}
                          profession="Мобильный дизайнер"
                          onImageClick={this.handleRightClick}
                          experienceYears={7}
                          sex={SpecialistSex.FEMALE}
                          location="Москва"
                          story={`Много путешествую, встречаюсь с друзьями и не пропускаю конференции по дизайну.`}
                          className={this.getSpecialistClassName(index)}
                          previousWorks={['IIG', 'Ingate']}/>
        );
      case 3:
        return (
          <SpecialistCard name="Юрий"
                          key={index}
                          imageUrl={require('./images/yura.png')}
                          profession="Разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
                          sex={SpecialistSex.MALE}
                          location="Тула"
                          story={`В свободное время пишу нейронные сети и читаю научные работы по астрофизике`}
                          className={this.getSpecialistClassName(index)}
                          previousWorks={['IIG', 'Ingate']}/>
        );
      case 4:
        return (
          <SpecialistCard name="Елена"
                          key={index}
                          imageUrl={require('./images/elena.png')}
                          profession="Аналитик"
                          onImageClick={this.handleRightClick}
                          experienceYears={12}
                          sex={SpecialistSex.FEMALE}
                          location="Москва"
                          story={`Отпуска провожу на улицах красивых городов Европы, а свободное время посвещаю фотографии. Люблю фотографировать рок-концерты, за их энергию и мощь.`}
                          className={this.getSpecialistClassName(index)}
                          previousWorks={['Ingate', 'Rambler Group']}/>
        );
      case 5:
        return (
          <SpecialistCard name="Сергей"
                          key={index}
                          imageUrl={require('./images/sergey-2.png')}
                          profession="Разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
                          sex={SpecialistSex.MALE}
                          location="Тула"
                          story={`Завел хаски, поэтому у меня теперь нет свободного времени.`}
                          className={this.getSpecialistClassName(index)}
                          previousWorks={['IIG', 'DevExpress']}/>
        );
    }
  }

  render() {
    const {className} = this.props;
    return (
      <div className={classNames('specialists-carousel', className)}>
        <div className="specialists-carousel__left-arrow"
             onClick={this.handleLeftClick}>
        </div>
        {map([0,1,2,3,4,5], index => this.renderSpecialistCard(index))}
        <div className="specialists-carousel__right-arrow"
             onClick={this.handleRightClick}>
        </div>
      </div>
    );
  }

}
