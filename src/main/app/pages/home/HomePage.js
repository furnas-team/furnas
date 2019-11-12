import React from 'react';
import './home.scss';
import classNames from 'classnames';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {MainScreen} from './screens/main/MainScreen';
import {StepsExplanationScreen} from './screens/steps-explanation/StepsExplanationScreen';
import {TeamScreen} from './screens/team/TeamScreen';
import {MoneyScreen} from './screens/money/MoneyScreen';
import {DislikeScreen} from './screens/dislike/DislikeScreen';
import {ContactScreen} from './screens/contact/ContactScreen';
import {Popup} from '../../components/Popup/Popup';
import {RevolutionScreen} from './screens/revolution/RevolutionScreen';
import {PortfolioScreen} from './screens/portfolio/PortfolioScreen';
import {Footer} from '../../components/footer/Footer';

export class HomePage extends React.Component {

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
          <title>Студия дизайна и веб-разработки | Furnas | Furnas</title>
          <meta name="description" content="Разработка сайтов, ux/ui дизайн, отрисовка рекламных баннеров, иллюстрации, настройка рекламы"/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div className="home">
          <Header onContactClick={this.handleContactClick}
                  contactPopupShown={contactPopupShown}/>
          <MainScreen onSendContactClick={this.handleSendContactClick}/>
          <StepsExplanationScreen/>
          <div className="home__blue-divider">
          </div>
          <div className="home__team-screen">
            <TeamScreen/>
          </div>
          <MoneyScreen/>
          <div className="home__pink-divider">
          </div>
          <div className="home__dislike-screen">
            <DislikeScreen/>
          </div>
          <PortfolioScreen/>
          <div className="home__blue-divider">
          </div>
          <div className="home__revolution-screen">
            <RevolutionScreen/>
          </div>
          <ContactScreen onSendContactClick={this.handleSendContactClick}/>
          <Footer/>
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
