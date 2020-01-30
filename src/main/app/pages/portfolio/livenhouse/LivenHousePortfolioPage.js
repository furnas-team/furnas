import React from 'react';
import './livenhouse-portfolio.scss';
import { object } from 'prop-types';
import { PortfolioContainer } from '../components/portfolio-container/PortfolioContainer';
import { PortfolioTitle } from '../components/portfolio-title/PortfolioTitle';
import { PortfolioSubtitle } from '../components/portfolio-subtitle/PortfolioSubtitle';
import { Picture } from '../../../components/picture/Picture';
import { PortfolioText } from '../components/portfolio-text/PortfolioText';
import { Popup } from '../../../components/Popup/Popup';
import { ContactScreen } from '../../home/screens/contact/ContactScreen';
import { NextPortfolioScreen } from '../components/next-portfolio-screen/NextPortfolioScreen';
import { PortfolioColors, PortfolioType } from '../components/portfolio-colors/PortfolioColors';

export class LivenHousePortfolioPage extends React.Component {

  static propTypes = {
    refProp: object
  };

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  handleContactClick = () => {
    if (window.yaCounter) {
      window.yaCounter.reachGoal('ClickedContactButton');
    }
    window.mixpanel.track(
      "Furnas | user clicked contact button"
    );
    this.setState({ contactPopupShown: !this.state.contactPopupShown, requestSent: false });
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.fetch('https://api.furnas.ru/requests', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: contact })
      });
      if (window.yaCounter) {
        window.yaCounter.reachGoal('AddedContact', { email: contact });
      }
      window.mixpanel.track(
        "Furnas | added user contact",
        { email: contact }
      );
      this.setState({ contactPopupShown: true, requestSent: true });
    }
  };

  handleCloseButtonClick = () => {
    this.setState({ contactPopupShown: false, requestSent: false });
  };

  render() {
    const { contactPopupShown, requestSent } = this.state;
    return (
      <div className="livenhouse-portfolio" ref={this.props.refProp}>
        <PortfolioContainer className="livenhouse-portfolio__title-container">
          <PortfolioTitle additionalText="проект">LivenHouse</PortfolioTitle>
        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__main-container">
          <div className="livenhouse-portfolio__main-image-block">
            <Picture imgClassName="livenhouse-portfolio__main-image-img"
              forPhoneOnly={[require('./images/livenhouse-laptop-1_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-laptop-1_2x.png')]} />
          </div>
        </PortfolioContainer>

        <div className="livenhouse-portfolio__task-screen">
          <PortfolioContainer className="livenhouse-portfolio__task-container">
            <div className="livenhouse-portfolio__task-text-block">
              <PortfolioSubtitle>Задача проекта</PortfolioSubtitle>
              <PortfolioText>
                <p>Для стартапа умного дома LivenHouse разработать дизайн сайта. Фирменный стиль уже был, но можно было вводить корректировки. Продумать позиционирование и объяснить пользователям зачем им нужен умный дом.</p>
              </PortfolioText>
            </div>
            <div className="livenhouse-portfolio__task-image-block">
              <Picture imgClassName="livenhouse-portfolio__task-image-img"
                forPhoneOnly={[require('./images/livenhouse-iphone-1_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/livenhouse-iphone-1_2x.png')]} />
            </div>
          </PortfolioContainer>
        </div>

        <PortfolioContainer className="livenhouse-portfolio__design-container">
          <div className="livenhouse-portfolio__design-text-block">
            <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
            <PortfolioText>
              <p>Основным цветом был выбран индиго. Акцентный цвет — спелый апельсин. Страницы разбиты на экраны, с чередованием белых и чёрных экранов, для отображения, что умный дом LivenHouse работает как днём, так и ночью. </p>
            </PortfolioText>
          </div>
          <div className="livenhouse-portfolio__colors-block">
            <PortfolioColors portfolioType={PortfolioType.LIVENHOUSE} />
          </div>
        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__photo-container">
          <div className="livenhouse-portfolio__photo-text-block">
            <PortfolioSubtitle>Фотографии</PortfolioSubtitle>
            <PortfolioText>
              <p>Умный дом — это про людей, квартиры, быт, а потом уже про технологии, которые всё это поддерживают.
            Фотографии людей и животных помогоают пользователю проецировать продукт на себя.</p>
            </PortfolioText>
          </div>
          <Picture className="livenhouse-portfolio__photo-picture"
            imgClassName="livenhouse-portfolio__photo-image-img"
            forPhoneOnly={[require('./images/livenhouse-girl_2x.png')]}
            forTabletPortraitUp={[require('./images/livenhouse-girl_mob_2x.png')]} />
        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__faсts-container">
          <div className="livenhouse-portfolio__faсts-text-block">
            <PortfolioSubtitle>Факты</PortfolioSubtitle>
            <PortfolioText className="livenhouse-portfolio__faсts-text">
              <p>
                Воспринимать текст быстро — не легкая задача. Зацепить пользователя есть всего несколько минут. Сложные данные отображаем легкопонятными графиками.
              </p>
            </PortfolioText>
          </div>
          <div className="livenhouse-portfolio__faсts-image-block">
            <Picture imgClassName="livenhouse-portfolio__facts-image-img"
              forPhoneOnly={[require('./images/livenhouse-laptop-2_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-laptop-2_2x.png')]} />
          </div>
        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__simplification-container">
          <div className="livenhouse-portfolio__simplification-text-block">
            <PortfolioSubtitle>Упрощение</PortfolioSubtitle>
            <PortfolioText className="livenhouse-portfolio__faсts-text">
              <p>
                Узкая доля людей понимает что такое умный дом. Все возможности технологии умный дом упрощаем до реальных фактов и объясняем простыми словами.
              </p>
            </PortfolioText>
          </div>
          <div className="livenhouse-portfolio__simplification-image-block">
            <Picture imgClassName="livenhouse-portfolio__simplification-image-img"
              forPhoneOnly={[require('./images/livenhouse-ipad_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-ipad_2x.png')]} />
          </div>
        </PortfolioContainer>
 
        <PortfolioContainer className="livenhouse-portfolio__adaptation-container">
          <div className="livenhouse-portfolio__adaptation-image-block">
            <Picture imgClassName="livenhouse-portfolio__adaptation-image-img"
              forPhoneOnly={[require('./images/livenhouse-iphone-3_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-iphone-3_2x.png')]} />
          </div>
          <div className="livenhouse-portfolio__adaptation-text-block">
            <PortfolioSubtitle>Адаптация</PortfolioSubtitle>
            <PortfolioText className="livenhouse-portfolio__faсts-text">
              <p>
                Дизайн разработан для десктопной и мобильной версии сайта. Проработана структура для возможности добавления новых страниц, без изменения архитектуры сайта.
              </p>
            </PortfolioText>
          </div>
        </PortfolioContainer>

        {/* отсутствует livenhouse-laptop-3_mob.png */}
        <PortfolioContainer className="livenhouse-portfolio__kettle-container">
          <Picture imgClassName="livenhouse-portfolio__kettle-image-img"
            forPhoneOnly={[require('./images/livenhouse-laptop-3_2x.png')]}
            forTabletPortraitUp={[require('./images/livenhouse-laptop-3_2x.png')]} />

        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__interactive-container">
          <div className="livenhouse-portfolio__interactive-image-block">
            <Picture imgClassName="livenhouse-portfolio__interactive-image-img"
              forPhoneOnly={[require('./images/livenhouse-room_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-room_2x.png')]} />
          </div>
          <div className="livenhouse-portfolio__interactive-text-block-mobile">
            <PortfolioSubtitle className="livenhouse-portfolio__interactive-text-block-mobile-subtitle">Умный дом</PortfolioSubtitle>
          </div>
          <div className="livenhouse-portfolio__interactive-text-block">
            <PortfolioSubtitle>Интерактив</PortfolioSubtitle>
            <PortfolioText className="livenhouse-portfolio__interactive-text">
              <p>
                Оживляем сайт с помощью интерактивного экрана. Пользователь может посмотреть где устанавливаются приборы умного дома и почитать их характеристики.
              </p>
            </PortfolioText>
          </div>
        </PortfolioContainer>

        <PortfolioContainer className="livenhouse-portfolio__breeze-container">
          <div className="livenhouse-portfolio__breeze-image-block">
            <Picture imgClassName="livenhouse-portfolio__breeze-image-img"
              forPhoneOnly={[require('./images/livenhouse-laptop-4_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/livenhouse-laptop-4_2x.png')]} />
          </div>
        </PortfolioContainer> 

        <NextPortfolioScreen nextPageHref="/portfolio/work" />
        <Popup shown={contactPopupShown}>
          <ContactScreen requestSent={requestSent}
            onCloseButtonClick={this.handleCloseButtonClick}
            onSendContactClick={this.handleSendContactClick} />
        </Popup>
      </div>
    );
  }


}
