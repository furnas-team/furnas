import React from 'react';
import {ThemeName, ThemeProvider} from '../../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {ContactScreen} from '../../home/screens/contact/ContactScreen';
import {Popup} from '../../../components/Popup/Popup';
import './work-portfolio.scss';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';

export class WorkPortfolioPage extends React.Component {

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  handleContactClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked contact button"
    );
    this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.mixpanel.track(
        "Furnas | added user contact",
        {contact}
      );
      this.setState({contactPopupShown: true, requestSent: true});
    }
  };

  handleCloseButtonClick = () => {
    this.setState({contactPopupShown: false, requestSent: false});
  };

  render() {
    const {contactPopupShown, requestSent} = this.state;
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Тест о профессиях | Furnas</title>
          <meta name="description" content="Дизайн портфолио. Веб проекты, выполненные командой furnasteam"/>
        </Helmet>
        <div className="work-portfolio">
          {/*<Header onContactClick={this.handleContactClick}*/}
          {/*contactPopupShown={contactPopupShown}/>*/}
          <div className="work-portfolio__main-screen">
            <PortfolioContainer>
              <PortfolioTitle className="work-portfolio__title">Тест о профессиях</PortfolioTitle>
            </PortfolioContainer>
            <PortfolioContainer>
              <Picture className="work-portfolio__main-picture"
                       forPhoneOnly={[require('./images/profession-main_mob.png')]}
                       forTabletPortraitUp={[require('./images/profession-main.png')]}/>
            </PortfolioContainer>
            <PortfolioContainer>
              <div className="work-portfolio__idea-block">
                <PortfolioSubtitle>Идея эксперимента</PortfolioSubtitle>
                <PortfolioText>
                  <p>
                    Идея состояла в проверке собственных сил в следующих областях:
                  </p>
                  <ul>
                    <li>проверка теории «Сделать сайт, на который перейдут пользователи»;</li>
                    <li>создать с нуля UX-структуру и UI-дизайн;</li>
                    <li>получить отклик пользователей на баннеры;</li>
                    <li>впервые настроить рекламу в инстаграме.</li>
                  </ul>
                </PortfolioText>
              </div>
            </PortfolioContainer>
            <PortfolioContainer>
              <div className="work-portfolio__structure-block">
                <PortfolioSubtitle>Проработка структуры сайта</PortfolioSubtitle>
                <PortfolioText>
                  <p>Идея сайта простая, поэтому даем пользователю достичь цель максимально быстро.</p>
                  <p>Путь пользователя:</p>
                  <p>Баннер —> страница с одним вопросом —> страница с email.</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer className="work-portfolio__design-block-container">
            <div className="work-portfolio__design-block">
              <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Работа была эксперементная, поэтому просмотрев много дизайнов сайтов, взяли несколько разных тем с разными настроениями. Отрисовали все варианты и выбрали самый подходящий для
                  данной тематики.</p>
              </PortfolioText>
            </div>
            <div className="work-portfolio__colors-block">
              <PortfolioColors portfolioType={PortfolioType.WORK}/>
            </div>
          </PortfolioContainer>
          <div className="work-portfolio__iphone-block">
            <PortfolioContainer>
              <div className="work-portfolio__iphone-image-block">
                <Picture className="work-portfolio__iphone-picture"
                         imgClassName="work-portfolio__iphone-img"
                         forPhoneOnly={[require('./images/profession-iphone_mob.png')]}
                         forTabletPortraitUp={[require('./images/profession-iphone.png')]}/>
              </div>
              <div className="work-portfolio__iphone-text-block">
                <PortfolioSubtitle>Реклама</PortfolioSubtitle>
                <PortfolioText>
                  <p>Рекламу пустили только в инстаграме.</p>
                  <p>Отрисовали баннеры и пустили первые показы.</p>
                  <p>Два дня изменяли настройки, искали целевую группу. Отобрали самый результативный баннер и оставили только один.</p>
                  <p>Рекламный период: 2 недели.</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <Picture className="work-portfolio__mac-picture"
                     imgClassName="work-portfolio__mac-img"
                     forPhoneOnly={[require('./images/profession-macbook_mob.png')]}
                     forTabletPortraitUp={[require('./images/profession-macbook.png')]}/>
          </PortfolioContainer>
          <div className="work-portfolio__result-block">
            <PortfolioContainer>
              <div className="work-portfolio__result">
                <PortfolioSubtitle>Результат эксперимента</PortfolioSubtitle>
                <PortfolioText>
                  <p>Бюджет на рекламу: 30$</p>
                  <p>Переходов по банеру: 560 шт</p>
                  <p>Прохождения теста: 490 шт</p>
                  <p>Кол-во оставленных email: 240 шт</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
        </div>
      </ThemeProvider>
    );
  }


}
