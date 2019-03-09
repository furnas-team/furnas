import React from 'react';
import {ThemeName, ThemeProvider} from '../../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import './smikwell-portfolio.scss';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';

export class SmikwellPortfolioPage extends React.Component {

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
          <meta name="description" content="Веб проекты, выполненные командой furnasteam"/>
          <link rel="canonical" href="https://furnas.ru/portfolio/smikwell"/>
        </Helmet>
        <div className="smikwell-portfolio">
          <PortfolioContainer className="smikwell-portfolio__title-container">
            <PortfolioTitle>Шкаф-кровати Smikwell</PortfolioTitle>
          </PortfolioContainer>
          <PortfolioContainer className="smikwell-portfolio__task-container">
            <div className="smikwell-portfolio__task-text-block">
              <PortfolioSubtitle>Задача</PortfolioSubtitle>
              <PortfolioText>
                <p className="furnas-portfolio__paragraph">Создать дизайн и разработать сайт для компании собирающей шкаф-кровать. </p>
                <p>Компания новая, мало фотографий для сайта.</p>
              </PortfolioText>
            </div>
            <div className="smikwell-portfolio__task-image-block">
              <Picture imgClassName="smikwell-portfolio__task-image-img"
                       forPhoneOnly={[require('./images/smikwell-macbook_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-macbook.png')]}/>
            </div>
          </PortfolioContainer>
          <PortfolioContainer>
            <div className="smikwell-portfolio__idea-image-block">
              <Picture className="smikwell-portfolio__idea-picture"
                       imgClassName="smikwell-portfolio__idea-image-img"
                       forPhoneOnly={[require('./images/smikwell-iphone-text_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-iphone-text_mob.png')]}/>
            </div>
            <div className="smikwell-portfolio__idea-block">
              <PortfolioSubtitle>Идея</PortfolioSubtitle>
              <PortfolioText>
                <p>Фотогорафий мало, поэтому большой сайт с примерами работ сделать не выйдет. Решаем сделать сайт в стиле рекламного буклета, где указываем все плюсы данных шкаф-кроватей. Учитываем пожелания заказчика разместить все имеющиеся фотографии. </p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <div className="smikwell-portfolio__design-block">
            <PortfolioContainer>
              <div className="smikwell-portfolio__design-text-block">
                <PortfolioSubtitle>Дизайн</PortfolioSubtitle>
                <PortfolioText className="smikwell-portfolio__design-text">
                  <p>
                    Дизайн делаем незаметным. Белый фон и фоторгафии кроватей. Весь акцент делаем на кровати, чтобы ничего не отвлекало
                  </p>
                </PortfolioText>
              </div>
              <div className="smikwell-portfolio__design-image-block">
                <Picture imgClassName="smikwell-portfolio__design-image"
                         forPhoneOnly={[require('./images/smikwell-ipad_mob.png')]}
                         forTabletPortraitUp={[require('./images/smikwell-ipad.png')]}/>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <div className="smikwell-portfolio__instagram-image-block">
              <Picture className="smikwell-portfolio__instagram-picture"
                       imgClassName="smikwell-portfolio__instagram-image-img"
                       forPhoneOnly={[require('./images/smikwell-iphone-instagram_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-iphone-instagram.png')]}/>
            </div>
            <div className="smikwell-portfolio__instagram-block">
              <PortfolioSubtitle>Реклама и разработка</PortfolioSubtitle>
              <PortfolioText>
                <p className="furnas-portfolio__paragraph">Рекламу запускали в инстаграме с одним баннером. Пользователи хорошо реагировали и задавали много вопросов.</p>
                <p>Сайт разрабатывали адаптивным для телефона и десктопа</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <NextPortfolioScreen nextPageHref="/portfolio/visa"/>
        </div>
      </ThemeProvider>
    );
  }


}
