import React from 'react';
import './saragh-portfolio.scss';
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

export class SaraghPortfolioPage extends React.Component {

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
      <div className="saragh-portfolio" ref={this.props.refProp}>
        <PortfolioContainer className="saragh-portfolio__title-container">
          <PortfolioTitle additionalText="проект">Saragh</PortfolioTitle>
        </PortfolioContainer>

        <PortfolioContainer className="saragh-portfolio__main-container">
          <div className="saragh-portfolio__main-image-block">
            <Picture imgClassName="saragh-portfolio__main-image-img"
              forPhoneOnly={[require('./images/saragh-main_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/saragh-main_2x.png')]} />
          </div>
        </PortfolioContainer>

        <div className="saragh-portfolio__task-screen">
          <PortfolioContainer className="saragh-portfolio__task-container">
            <div className="saragh-portfolio__task-text-block">
              <PortfolioSubtitle>Задача проекта</PortfolioSubtitle>
              <PortfolioText>
                <p>Saragh управляет процессом создания и реализации дизайна баров, кофеин и ресторанов.</p>
              </PortfolioText>
            </div>
            <div className="saragh-portfolio__task-image-block">
              <Picture imgClassName="saragh-portfolio__task-image-img"
                forPhoneOnly={[require('./images/saragh-iphone-1_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/saragh-iphone-1_2x.png')]} />
            </div>
          </PortfolioContainer>
        </div>

        <PortfolioContainer className="saragh-portfolio__design-container">
          <div className="saragh-portfolio__design-text-block">
            <PortfolioSubtitle>Дизайн продукта</PortfolioSubtitle>
            <PortfolioText>
              <p>Продукт имеет сложную структуру и для облегчения восприятия данных осоновным цветом берём белый цвет. Данные не тесним, а с помощью пустых мест добавляем свободы. Дополнительные цвета яркие и бодрящие: бирюзовый и тепло-жёлтый.</p>
            </PortfolioText>
          </div>
          <div className="saragh-portfolio__colors-block">
            <PortfolioColors portfolioType={PortfolioType.SARAGH}/>
          </div>
        </PortfolioContainer>


        {/* forTabletPortraitUp={[require('./images/saragh-screen-1_mob_2x.png')]} />
        forTabletPortraitUp={[require('./images/saragh-screen-2_mob_2x.png')]} /> */}
        <div className="saragh-portfolio__estimate-screen">
          <PortfolioContainer className="saragh-portfolio__estimate-container">
            <Picture className="saragh-portfolio__estimate-picture"
              imgClassName="saragh-portfolio__estimate-image-img"
              forPhoneOnly={[require('./images/saragh-screen-1_2x.png')]}
              forTabletPortraitUp={[require('./images/saragh-screen-1_2x.png')]} />
            <div className="saragh-portfolio__estimate-image2-block">
              <PortfolioSubtitle >Смета</PortfolioSubtitle>
              <Picture className="saragh-portfolio__estimate-picture2"
                imgClassName="saragh-portfolio__estimate-image-img"
                forPhoneOnly={[require('./images/saragh-screen-1+2_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/saragh-screen-2_2x.png')]} />
            </div>
          </PortfolioContainer>
        </div>

        <PortfolioContainer className="saragh-portfolio__account-container">
          <div className="saragh-portfolio__account-text-block">
            <PortfolioSubtitle>Личный кабинет</PortfolioSubtitle>
            <PortfolioText>
              <p>Личный кабинет упрощаем и делаем похожим на все привычные пользователю личные кабинеты.</p>
            </PortfolioText>
          </div>
          <Picture className="saragh-portfolio__account-picture"
            imgClassName="saragh-portfolio__account-image-img"
            forPhoneOnly={[require('./images/saragh-screen-3_mob_2x.png')]}
            forTabletPortraitUp={[require('./images/saragh-screen-3_2x.png')]} />
        </PortfolioContainer>

        <PortfolioContainer className="saragh-portfolio__data-container">
          <div className="saragh-portfolio__data-text-block">
            <PortfolioSubtitle>Данные</PortfolioSubtitle>
            <PortfolioText>
              <p>В продукте много данных и информацию передём разными способами — от графиков до плашек с иконками. Это не замыливает глаз и мозгу легче различать данные.</p>
            </PortfolioText>
          </div>
          <Picture className="saragh-portfolio__data-picture"
            imgClassName="saragh-portfolio__data-image-img"
            forPhoneOnly={[require('./images/saragh-screen-4_mob_2x.png')]}
            forTabletPortraitUp={[require('./images/saragh-screen-4_2x.png')]} />
        </PortfolioContainer>

        <div className="saragh-portfolio__tables-screen">
          <PortfolioContainer className="saragh-portfolio__tables-container">
            <Picture className="saragh-portfolio__tables-background"
              imgClassName="saragh-portfolio__tables-background-img"
              forPhoneOnly={[require('./images/saragh-background-yellow-dots_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/saragh-background-yellow-dots_2x.png')]} />
            <div className="saragh-portfolio__tables-content-block">
              <div className="saragh-portfolio__tables-text-block">
                <PortfolioSubtitle>Таблицы</PortfolioSubtitle>
                <PortfolioText>
                  <p>Шрифт таблиц не ярко-черный, а сероватый. Это не заваливает пользователя информацией и даёт возможность долго работать с таблицей.</p>
                </PortfolioText>
              </div>

              <Picture className="saragh-portfolio__tables-picture"
                imgClassName="saragh-portfolio__tables-picture-img"
                forPhoneOnly={[require('./images/saragh-screen-5+6_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/saragh-screen-5_2x.png')]} />

              <Picture className="saragh-portfolio__tables-picture2"
                imgClassName="saragh-portfolio__tables-picture-img"
                forPhoneOnly={[require('./images/saragh-screen-5+6_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/saragh-screen-6_2x.png')]} />
            </div>
          </PortfolioContainer>
        </div>

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