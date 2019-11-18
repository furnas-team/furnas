import React from 'react';
import './options-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {Picture} from '../../../../components/picture/Picture';
import {BlockText} from '../../../../components/block-text/BlockText';

export class OptionsScreen extends React.Component {

  static propTypes = {
    id: string
  };

  render() {
    const {id} = this.props;
    return (
      <div className="options-screen" id={id}>
        <div>
          <SectionTitle className="options-screen__title">
            Мы работаем как
          </SectionTitle>
        </div>
        <div className="options-screen__list">
          <div className="options-screen__option">
            <Picture className="options-screen__image"
                     imgClassName="options-screen__image-img"
                     forPhoneOnly={[require('./images/cirlce.svg')]}
                     forTabletPortraitUp={[require('./images/cirlce.svg')]}
                     alt="Фигура"/>
            <SectionTitle className="options-screen__option-title">Студия</SectionTitle>
            <BlockText>Обсуждаем задачу, составляем ТЗ, подписываем договор и выполняем работу.</BlockText>
          </div>
          <div className="options-screen__option">
            <Picture className="options-screen__image"
                     imgClassName="options-screen__image-img"
                     forPhoneOnly={[require('./images/square.svg')]}
                     forTabletPortraitUp={[require('./images/square.svg')]}
                     alt="Фигура"/>
            <SectionTitle className="options-screen__option-title">Команда на проект</SectionTitle>
            <BlockText>Если у вас уже есть проект - мы можем влиться в работу и помочь вам быстрее достичь результатов</BlockText>
          </div>
          <div className="options-screen__option">
            <Picture className="options-screen__image"
                     imgClassName="options-screen__image-img"
                     forPhoneOnly={[require('./images/rhombus.svg')]}
                     forTabletPortraitUp={[require('./images/rhombus.svg')]}
                     alt="Фигура"/>
            <SectionTitle className="options-screen__option-title">Проект с нуля</SectionTitle>
            <BlockText>Вы можете нанять нас как команду и мы будем работать над задачей, пока не достигнем запланированных результатов</BlockText>
          </div>
          <div className="options-screen__option">
            <Picture className="options-screen__image"
                     imgClassName="options-screen__image-img"
                     forPhoneOnly={[require('./images/triangle.svg')]}
                     forTabletPortraitUp={[require('./images/triangle.svg')]}
                     alt="Фигура"/>
            <SectionTitle className="options-screen__option-title">Сотрудник в штат</SectionTitle>
            <BlockText>Кто-то из нашей команды может отдельно влиться в ваш коллектив на некоторое время, чтобы закрыть проблемную позицию</BlockText>
          </div>
        </div>
      </div>
    );
  }

}
