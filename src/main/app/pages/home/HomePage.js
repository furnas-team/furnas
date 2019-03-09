import React from 'react';
import './home.scss';
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
          <title>Дизайн и верстка лендинга в 4 шага | Furnas</title>
          <meta name="description" content="Создаем Landing page поэтапно.  Показываем вам результат на каждом шаге и вы платите только в том случае, если он вам нравится."/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div className="home">
          <Header onContactClick={this.handleContactClick}
                  contactPopupShown={contactPopupShown}/>
          <MainScreen onSendContactClick={this.handleSendContactClick}/>
          <div className="home__pink-divider">
          </div>
          <div className="home__shadow">
          </div>
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
