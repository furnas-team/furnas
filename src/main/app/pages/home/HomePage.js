import React from 'react';
import './home.scss';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {MainScreen} from './screens/main/MainScreen';
import {TeamScreen} from './screens/team/TeamScreen';
import {MoneyScreen} from './screens/money/MoneyScreen';
import {DislikeScreen} from './screens/dislike/DislikeScreen';
import {ContactScreen} from './screens/contact/ContactScreen';
import {Popup} from '../../components/Popup/Popup';
import {RevolutionScreen} from './screens/revolution/RevolutionScreen';
import {PortfolioScreen} from './screens/portfolio/PortfolioScreen';
import {Footer} from '../../components/footer/Footer';
import {DoScreen} from './screens/do/DoScreen';
import {OptionsScreen} from './screens/options/OptionsScreen';
import {PriceScreen} from './screens/price/PriceScreen';

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
    // this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
    this.setState({requestSent: false});
    location.hash = 'contact';
    setTimeout(() => {
      location.hash = 'contacts';
    })
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
      //this.setState({contactPopupShown: true, requestSent: true});
      this.setState({requestSent: true});
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
          <DoScreen id="do"/>
          <div className="home__price-screen">
            <PriceScreen/>
          </div>
          <div className="home__options-screen">
            <OptionsScreen id="how"/>
          </div>
          <TeamScreen/>
          <div className="home__portfolio-screen">
            <PortfolioScreen id="portfolio"/>
          </div>
          <RevolutionScreen/>
          <div className="home__money-screen">
            <MoneyScreen/>
          </div>
          <div className="home__dislike-screen">
            <DislikeScreen/>
          </div>
          <ContactScreen id="contact"
                         onSendContactClick={this.handleSendContactClick}
                         onCloseButtonClick={this.handleCloseButtonClick}
                         requestSent={requestSent}/>
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
