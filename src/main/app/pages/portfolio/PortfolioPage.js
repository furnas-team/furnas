import React from 'react';
import {Helmet} from 'react-helmet';
import './portfolio.scss';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {FinansistPortfolioPage} from './finansist/FinansistPortfolioPage';
import {FurnasPortfolioPage} from './furnas/FurnasPortfolioPage';
import {Header} from '../../components/header/Header';
import {Popup} from '../../components/Popup/Popup';
import {ContactScreen} from '../home/screens/contact/ContactScreen';
import {SmikwellPortfolioPage} from './smikwell/SmikwellPortfolioPage';
import {Footer} from '../../components/footer/Footer';
import {VisaPortfolioPage} from './visa/VisaPortfolioPage';
import {WorkPortfolioPage} from './work/WorkPortfolioPage';
import {Navigation} from './components/navigation/Navigation';
import {CodeFighterPortfolioPage} from './code-fighter/CodeFighterPortfolioPage';
import {TeaPortfolioPage} from './tea/TeaPortfolioPage';

const items = [
  {name: 'Финансист'},
  {name: 'LivenHouse'},
  {name: 'Tea Shop'},
  {name: 'CodeFighter'},
  {name: 'Smikwell'},
  {name: 'Visa.Furnas'},
  {name: 'Saragh'}
];

export class PortfolioPage extends React.Component {

  teaRef = React.createRef();
  codeFighterRef = React.createRef();
  finansistRef = React.createRef();
  smikwellRef = React.createRef();
  visaRef = React.createRef();
  workRef = React.createRef();
  furnasRef = React.createRef();

  items = [
    {name: 'Tea Shop', ref: this.teaRef},
    {name: 'CodeFighter', ref: this.codeFighterRef},
    {name: 'Финансист', ref: this.finansistRef},
    {name: 'Smikwell', ref: this.smikwellRef},
    {name: 'Visa.Furnas', ref: this.visaRef},
    {name: 'Тест о профессиях', ref: this.workRef},
    {name: 'Furnas', ref: this.furnasRef}
  ];

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false,
    selectedItem: this.items[0]
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

  handleActiveItemChange = (item) => {
    this.setState({selectedItem: item});
    console.log('item.ref.current.offsetTop', item.ref.current.offsetTop);
    window.scrollTo(0, item.ref.current.offsetTop)
  };

  render() {
    const {contactPopupShown, requestSent, selectedItem} = this.state;
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Дизайн портфолио | Furnas</title>
          <meta name="description" content="Веб проекты, выполненные командой furnasteam"/>
          <link rel="canonical" href="https://furnas.ru/portfolio/furnas"/>
        </Helmet>
        <div className="portfolio">
          <Header onContactClick={this.handleContactClick}
                  portfolioMode={true}
                  contactPopupShown={contactPopupShown}/>
          <Navigation items={this.items} active={selectedItem} onChange={this.handleActiveItemChange}/>
          <TeaPortfolioPage refProp={this.teaRef}/>
          <CodeFighterPortfolioPage refProp={this.codeFighterRef}/>
          <FinansistPortfolioPage refProp={this.finansistRef}/>
          <SmikwellPortfolioPage refProp={this.smikwellRef}/>
          <VisaPortfolioPage refProp={this.visaRef}/>
          <WorkPortfolioPage refProp={this.workRef}/>
          <FurnasPortfolioPage refProp={this.furnasRef}/>
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
          <Footer portfolioMode={false}/>
        </div>
      </ThemeProvider>
    );
  }
}
