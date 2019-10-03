import React from 'react';
import {string} from 'prop-types';
import './specialists-carousel.scss';
import {SpecialistCard} from '../specialist-card/SpecialistCard';
import classNames from 'classnames';

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

  getActiveSpecialistCard() {
    const {activeIndex} = this.state;
    switch (activeIndex) {
      case 0:
        return (
          <SpecialistCard name="Maрия"
                          imageUrl={require('./images/masha-2.png')}
                          previousWorks={['Ingate', 'Rembot']}
                          onImageClick={this.handleRightClick}
                          experienceYears={7}
                          profession="UX/UI дизайнер"/>
        );
      case 1:
        return (
          <SpecialistCard name="Сергей"
                          imageUrl={require('./images/sergey-1.png')}
                          profession="разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
                          previousWorks={['IIG', 'Ingate', 'Grabr']}/>
        );
      case 2:
        return (
          <SpecialistCard name="Мария"
                          imageUrl={require('./images/masha-1.png')}
                          profession="Мобильный дизайнер"
                          onImageClick={this.handleRightClick}
                          experienceYears={7}
                          previousWorks={['IIG', 'Ingate']}/>
        );
      case 3:
        return (
          <SpecialistCard name="Юрий"
                          imageUrl={require('./images/yura.png')}
                          profession="разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
                          previousWorks={['IIG', 'Ingate']}/>
        );
      case 4:
        return (
          <SpecialistCard name="Елена"
                          imageUrl={require('./images/elena.png')}
                          profession="аналитик"
                          onImageClick={this.handleRightClick}
                          experienceYears={12}
                          previousWorks={['Ingate', 'Rambler Group']}/>
        );
      case 5:
        return (
          <SpecialistCard name="Сергей"
                          imageUrl={require('./images/sergey-2.png')}
                          profession="разработчик"
                          onImageClick={this.handleRightClick}
                          experienceYears={8}
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
        {this.getActiveSpecialistCard()}
        <div className="specialists-carousel__right-arrow"
             onClick={this.handleRightClick}>
        </div>
      </div>
    );
  }

}
