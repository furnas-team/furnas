import React from 'react';
import './finansist-portfolio.scss';
import {object} from 'prop-types';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';
import {AbstractPortfolioPage, PortfolioCode} from '../abstract-portfolio-page/AbstractPortfolioPage';

export class FinansistPortfolioPage extends React.Component {

  static propTypes = {
    refProp: object
  };

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false,
  };

  handleContactClick = () => {
    if (window.yaCounter) {
      window.yaCounter.reachGoal('ClickedContactButton');
    }
    window.mixpanel.track(
      "Furnas | user clicked contact button"
    );
    this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.fetch('https://api.furnas.ru/requests', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: contact})
      });
      if (window.yaCounter) {
        window.yaCounter.reachGoal('AddedContact', {email: contact});
      }
      window.mixpanel.track(
        "Furnas | added user contact",
        {email: contact}
      );
      this.setState({contactPopupShown: true, requestSent: true});
    }
  };

  handleCloseButtonClick = () => {
    this.setState({contactPopupShown: false, requestSent: false});
  };

  render() {
    return (
      <AbstractPortfolioPage code={PortfolioCode.FINANSIST}>
        <PortfolioContainer className="finansist-portfolio__title-container">
          <PortfolioTitle additionalText="проект">Финансист</PortfolioTitle>
        </PortfolioContainer>
        <PortfolioContainer>
          <Picture className="finansist-portfolio__main-picture"
                   imgClassName="finansist-portfolio__main-img"
                   forPhoneOnly={[require('./images/finansist-main_mob.png')]}
                   forTabletPortraitUp={[require('./images/finansist-main.png')]}/>
        </PortfolioContainer>
        <div className="finansist-portfolio__goal-block">
          <Picture className="finansist-portfolio__goal-picture"
                   imgClassName="finansist-portfolio__goal-img"
                   forPhoneOnly={[require('./images/finansist-goal.svg')]}
                   forTabletPortraitUp={[require('./images/finansist-goal.svg')]}/>
        </div>
        <div className="finansist-portfolio__goal-mob">
          <PortfolioContainer>
            <PortfolioSubtitle>Цель проекта</PortfolioSubtitle>
            <PortfolioText>
              <p className="finansist-portfolio__paragraph">— рассказать о продукте</p>
              <p className="finansist-portfolio__paragraph">— структурировать данные</p>
              <p className="finansist-portfolio__paragraph">— упростить понятия и термины</p>
            </PortfolioText>
          </PortfolioContainer>
        </div>
        <PortfolioContainer>
          <div className="finansist-portfolio__task-block">
            <PortfolioSubtitle>Задача</PortfolioSubtitle>
            <PortfolioText>
              <p className="finansist-portfolio__paragraph">
                Предыдущая версия сайта Финансист не приносила заказов, поэтому было решено обновить сайт.
                Заказчик нанял маркетолога, который построил структуру, а нам доверил UI дизайн.</p>
            </PortfolioText>
          </div>
          <div className="finansist-portfolio__task-image-block">
            <Picture className="finansist-portfolio__task-picture"
                     imgClassName="finansist-portfolio__task-image-img"
                     forPhoneOnly={[require('./images/finansist-task_mob.png')]}
                     forTabletPortraitUp={[require('./images/finansist-task.png')]}/>
          </div>
        </PortfolioContainer>
        <div className="finansist-portfolio__tablet-block">
          <PortfolioContainer>
            <div className="finansist-portfolio__tablet-image-block">
              <Picture className="finansist-portfolio__tablet-picture"
                       imgClassName="finansist-portfolio__tablet-image-img"
                       forPhoneOnly={[require('./images/finansist-tablet_mob.png')]}
                       forTabletPortraitUp={[require('./images/finansist-tablet.png')]}/>
            </div>
            <div className="finansist-portfolio__tablet-text-block">
              <PortfolioSubtitle>Решение</PortfolioSubtitle>
              <PortfolioText>
                <p className="finansist-portfolio__paragraph">Предыдущая версия сайта состояла из текста и скринов продукта.
                  Такой дизайн подходит для инструкций, но не для продажи продукта.
                  «Очеловечиваем» сайт, добавляя реальные фотографии людей и других объектов. </p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
        </div>
        <PortfolioContainer className="finansist-portfolio__mood-block-container">
          <div className="finansist-portfolio__mood-block">
            <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
            <PortfolioText>
              <p>Брендовые цвета — жёлтый и черный.
                Для правильной расстановки акцентов были добавлены нейтральные цвета.
                Сайт становится легче и упрощает восприятие информации.</p>
            </PortfolioText>
          </div>
          <div className="finansist-portfolio__colors-block">
            <PortfolioColors portfolioType={PortfolioType.FINANSIST}/>
          </div>
        </PortfolioContainer>
        <PortfolioContainer>
          <Picture className="finansist-portfolio__mac-picture"
                   imgClassName="finansist-portfolio__mac-img"
                   forPhoneOnly={[require('./images/finansist-mac_mob.png')]}
                   forTabletPortraitUp={[require('./images/finansist-mac.png')]}/>
        </PortfolioContainer>
        <div className="finansist-portfolio__laptop-block">
          <PortfolioContainer>
            <div className="finansist-portfolio__laptop-text-block">
              <PortfolioSubtitle>Иллюстрации</PortfolioSubtitle>
              <PortfolioText>
                <p className="finansist-portfolio__paragraph">Разбавляем сайт иллюстрациями, добавляя в них цветовую гамму сайта.</p>
              </PortfolioText>
            </div>
            <div className="finansist-portfolio__laptop-image-block">
              <Picture className="finansist-portfolio__laptop-picture"
                       imgClassName="finansist-portfolio__laptop-image-img"
                       forPhoneOnly={[require('./images/finansist-laptop_mob.png')]}
                       forTabletPortraitUp={[require('./images/finansist-laptop.png')]}/>
            </div>
          </PortfolioContainer>
        </div>
        <PortfolioContainer>
          <div className="finansist-portfolio__arrows-image-block">
            <Picture className="finansist-portfolio__arrows-picture"
                     imgClassName="finansist-portfolio__arrows-image-img"
                     forPhoneOnly={[require('./images/finansist-arrows_mob.png')]}
                     forTabletPortraitUp={[require('./images/finansist-arrows.png')]}/>
          </div>
          <div className="finansist-portfolio__arrows-text-block">
            <PortfolioSubtitle>Реализация</PortfolioSubtitle>
            <PortfolioText>
              <p className="finansist-portfolio__paragraph">Черновой дизайн накидывался в Sketch, для быстрой подборки цветов, стиля картинок и иллюстраций.
                Потом все версии сайта (десктопная, планшетная, мобильная) разработывались на Тильде так как заказчику необходимо было сделать сайт за малые сроки и иметь возможность изменять тексты
                в дальнейшем.</p>
            </PortfolioText>
          </div>
        </PortfolioContainer>
        <PortfolioContainer>
          <Picture className="finansist-portfolio__big-tablet-picture"
                   imgClassName="finansist-portfolio__big-tablet-img"
                   forPhoneOnly={[require('./images/finansist-big-tablet_mob.png')]}
                   forTabletPortraitUp={[require('./images/finansist-big-tablet.png')]}/>
        </PortfolioContainer>
        <PortfolioContainer>
          <Picture className="finansist-portfolio__team-picture"
                   imgClassName="finansist-portfolio__team-img"
                   forPhoneOnly={[require('./images/finansist-team_mob.png')]}
                   forTabletPortraitUp={[require('./images/finansist-team.png')]}/>
        </PortfolioContainer>
      </AbstractPortfolioPage>
    );
  }


}
