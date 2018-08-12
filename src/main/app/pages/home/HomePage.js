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

export class HomePage extends React.Component {

  state = {
    userContact: '',
    contactPopupShown: false
  };

  handleSendContact = () => {
    window.mixpanel.track(
      "Furnas | added user contact",
      {contact: this.state.userContact}
    );
  };

  handleUserContactInputChange = event => {
    this.setState({userContact: event.target.value});
  };

  handleContactClick = () => {
    this.setState({contactPopupShown: !this.state.contactPopupShown});
  };

  render() {
    const {contactPopupShown} = this.state;
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Дизайн и верстка лендинга в 4 шага | Furnas</title>
          <meta name="description" content="Создаем Landing page поэтапно.  Показываем вам результат на каждом шаге и вы платите только в том случае, если он вам нравится."/>
        </Helmet>
        <div className="home">
          <Header onContactClick={this.handleContactClick}/>
          <MainScreen/>
          <StepsExplanationScreen/>
          <TeamScreen/>
          <MoneyScreen/>
          <DislikeScreen/>
          <ContactScreen/>
          <Popup shown={contactPopupShown}>
            <ContactScreen/>
          </Popup>
        </div>
      </ThemeProvider>
    );
  }

}
