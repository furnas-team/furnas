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
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';

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
          <title>Дизайн портфолио | Furnas</title>
          <meta name="description" content="Дизайн портфолио. Веб проекты, выполненные командой furnasteam"/>
          <link rel="canonical" href="https://furnas.ru/portfolio/work"/>
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
                    <li className="work-portfolio__paragraph">проверка теории «Сделать сайт, на который перейдут пользователи»;</li>
                    <li className="work-portfolio__paragraph">создать с нуля UX-структуру и UI-дизайн;</li>
                    <li className="work-portfolio__paragraph">получить отклик пользователей на баннеры;</li>
                    <li className="work-portfolio__paragraph">впервые настроить рекламу в инстаграме.</li>
                  </ul>
                </PortfolioText>
              </div>
            </PortfolioContainer>
            <PortfolioContainer>
              <div className="work-portfolio__structure-block">
                <PortfolioSubtitle>Проработка структуры сайта</PortfolioSubtitle>
                <PortfolioText>
                  <p className="work-portfolio__paragraph">Идея сайта простая, поэтому даем пользователю возможность достичь цель максимально быстро.</p>
                  <p className="work-portfolio__paragraph">Путь пользователя:</p>
                  <p className="work-portfolio__paragraph">Баннер —> страница с одним вопросом —> страница с email.</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer className="work-portfolio__design-block-container">
            <div className="work-portfolio__design-block">
              <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Работа была экспериментальная, поэтому просмотрев много дизайнов сайтов, взяли несколько разных тем с разными настроениями. Отрисовали все варианты и выбрали самый подходящий для
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
                  <p className="work-portfolio__paragraph">Рекламу пустили только в инстаграме.</p>
                  <p className="work-portfolio__paragraph">Отрисовали баннеры и пустили первые показы.</p>
                  <p className="work-portfolio__paragraph">Два дня изменяли настройки, искали целевую группу. Отобрали самый результативный баннер и оставили только один.</p>
                  <p className="work-portfolio__paragraph">Рекламный период: 2 недели.</p>
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
                  <p className="work-portfolio__paragraph">Бюджет на рекламу: 30$</p>
                  <p className="work-portfolio__paragraph">Переходов по банеру: 560 шт</p>
                  <p className="work-portfolio__paragraph">Прохождения теста: 490 шт</p>
                  <p className="work-portfolio__paragraph">Кол-во оставленных email: 240 шт</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <NextPortfolioScreen nextPageHref="/portfolio/furnas"/>
          {/*<Popup shown={contactPopupShown}>*/}
            {/*<ContactScreen requestSent={requestSent}*/}
                           {/*onCloseButtonClick={this.handleCloseButtonClick}*/}
                           {/*onSendContactClick={this.handleSendContactClick}/>*/}
          {/*</Popup>*/}
        </div>
      </ThemeProvider>
    );
  }


}
