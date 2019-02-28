import React from 'react';
import {ThemeName, ThemeProvider} from '../../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {Header} from '../../../components/header/Header';
import {ContactScreen} from '../../home/screens/contact/ContactScreen';
import {Popup} from '../../../components/Popup/Popup';
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';
import './visa-portfolio.scss';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {Picture} from '../../../components/picture/Picture';

export class VisaPortfolioPage extends React.Component {

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
        </Helmet>
        <div className="visa-portfolio">
          <PortfolioContainer className="visa-portfolio__title-container">
            <PortfolioTitle>Visa.Furnas</PortfolioTitle>
          </PortfolioContainer>
          <PortfolioContainer className="visa-portfolio__idea-container">
            <div className="visa-portfolio__idea-text-block">
              <PortfolioSubtitle>Идея</PortfolioSubtitle>
              <PortfolioText>
                <p>Visa.Furnas один из наших проектов в стадии разработки. Сервис, где пользователи могут заполнить анкету на визу в Испанию и получить необходимый список документов. </p>
              </PortfolioText>
            </div>
            <div className="visa-portfolio__idea-image-block">
              <Picture imgClassName="visa-portfolio__idea-image-img"
                       forPhoneOnly={[require('./images/visa-main_mob.png')]}
                       forTabletPortraitUp={[require('./images/visa-main.png')]}/>
            </div>
          </PortfolioContainer>
          <NextPortfolioScreen nextPageHref="/portfolio"/>
        </div>
      </ThemeProvider>
    );
  }


}
