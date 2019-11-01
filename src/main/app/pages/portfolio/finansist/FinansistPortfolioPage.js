import React from 'react';
import {ThemeName, ThemeProvider} from '../../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import './finansist-portfolio.scss';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';
import {Header} from '../../../components/header/Header';

export class FinansistPortfolioPage extends React.Component {

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
    const {contactPopupShown, requestSent} = this.state;
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Дизайн портфолио | Furnas</title>
          <meta name="description" content="Веб проекты, выполненные командой furnasteam"/>
          <link rel="canonical" href="https://furnas.ru/portfolio/furnas"/>
        </Helmet>
        <div className="furnas-portfolio">
          <Header onContactClick={this.handleContactClick} contactPopupShown={contactPopupShown}/>
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
          <PortfolioContainer>
            <div className="finansist-portfolio__task-block">
              <PortfolioSubtitle>Задача</PortfolioSubtitle>
              <PortfolioText>
                <p className="finansist-portfolio__paragraph">У заказчика был сайт, который не работал.</p>
                <p className="finansist-portfolio__paragraph">Заказчик нанял маркетолога, который </p>
                <p className="finansist-portfolio__paragraph">построил структуру, а нам доверил UI дизайн.</p>
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
                <PortfolioSubtitle>Задача</PortfolioSubtitle>
                <PortfolioText>
                  <p className="finansist-portfolio__paragraph">У заказчика был сайт, который не работал.</p>
                  <p className="finansist-portfolio__paragraph">Заказчик нанял маркетолога, который </p>
                  <p className="finansist-portfolio__paragraph">построил структуру, а нам доверил UI дизайн.</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer className="finansist-portfolio__mood-block-container">
            <div className="finansist-portfolio__mood-block">
              <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Работа была эксперементная, поэтому просмотрев много дизайнов сайтов, взяли несколько разных тем с разными настроениями. Отрисовали все варианты и выбрали самый подходящий для данной тематики.</p>
              </PortfolioText>
            </div>
            <div className="finansist-portfolio__colors-block">
              <PortfolioColors portfolioType={PortfolioType.FINANSIST}/>
            </div>
          </PortfolioContainer>
          <PortfolioContainer className="finansist-portfolio__old-version-container">
            <div className="finansist-portfolio__old-colors-block">
              <PortfolioColors portfolioType={PortfolioType.OLD_FURNAS}/>
            </div>
            <div className="finansist-portfolio__old-version-block">
              <PortfolioSubtitle>Предыдущая версия сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Стиль сайта: тёмный дизайн, дополнительные цвета небесно-голубой и приглушенно-коралловый. Их мало, из-за чего экран матово-тёмный, но с яркими акцентами.</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <div className="finansist-portfolio__idea-block">
            <PortfolioContainer>
              <div className="finansist-portfolio__idea-text-block">
                <PortfolioSubtitle>Идея</PortfolioSubtitle>
                <PortfolioText>
                  <p className="finansist-portfolio__paragraph">
                    Решение проблемы — разрушить недоверие пользователя к маленькой студии без готовых работ в дизайне.
                  </p>
                  <p className="finansist-portfolio__paragraph">
                    Для этого:
                  </p>
                  <p className="finansist-portfolio__paragraph">
                    1) Ответить на все вопросы и проговорить неудобные ситуации;
                  </p>
                  <p>
                    2) Сделать дизайн лёгким и дерзким, соответствуя возрасту студии;
                  </p>
                </PortfolioText>
              </div>
              <div className="finansist-portfolio__idea-image-block">
                <Picture imgClassName="finansist-portfolio__idea-image"
                         forPhoneOnly={[require('./images/furnas-team-franklin_mob.png')]}
                         forTabletPortraitUp={[require('./images/furnas-team-franklin.png')]}/>
              </div>
            </PortfolioContainer>
          </div>
          <div className="finansist-portfolio__design-block">
            <PortfolioContainer>
              <div className="finansist-portfolio__design-image-block">
                <Picture imgClassName="finansist-portfolio__design-image"
                         forPhoneOnly={[require('./images/furnas-team-iphone_mob.png')]}
                         forTabletPortraitUp={[require('./images/furnas-team-iphone.png')]}/>
              </div>
              <div className="finansist-portfolio__design-text-block">
                <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
                <PortfolioText>
                  <p>
                    Фон делаем белым, с аналогией на лист бумаги. Рисуем тематические картинки к каждому вопросу и разукрашиваем вспомогательными цветами.
                  </p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <Picture className="finansist-portfolio__mac-picture"
                     imgClassName="finansist-portfolio__mac-img"
                     forPhoneOnly={[require('./images/furnas-team-macbook_mob.png')]}
                     forTabletPortraitUp={[require('./images/furnas-team-macbook.png')]}/>
          </PortfolioContainer>
          <NextPortfolioScreen nextPageHref="/portfolio/furnas"/>
        </div>
      </ThemeProvider>
    );
  }


}
