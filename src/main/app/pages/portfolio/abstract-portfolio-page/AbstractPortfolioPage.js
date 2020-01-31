import React from 'react';
import {Helmet} from 'react-helmet';
import {string} from 'prop-types';
import './abstract-portfolio-page.scss';
import {ThemeName, ThemeProvider} from '../../../components/theme-context/ThemeContext';
import {Header} from '../../../components/header/Header';
import {Navigation} from '../components/navigation/Navigation';
import map from 'lodash/map';
import find from 'lodash/find';
import indexOf from 'lodash/indexOf';
import {Footer} from '../../../components/footer/Footer';
import {UniversalLink} from '../../../components/universal-link/UniversalLink';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import classNames from 'classnames';
import {Picture} from '../../../components/picture/Picture';
import {SectionTitle} from '../../../components/screen-title/ScreenTitle';

export const PortfolioCode = {
  TEA_SHOP: 'TEA_SHOP',
  CODE_FIGHTER: 'CODE_FIGHTER',
  LIVEN_HOUSE: 'LIVEN_HOUSE',
  SARAGH: 'SARAGH',
  FINANSIST: 'FINANSIST',
  SMIKWELL: 'SMIKWELL',
  VISA: 'VISA',
  WORK: 'WORK',
  FURNAS: 'FURNAS'
};

const portfolioOrder = [
  PortfolioCode.FINANSIST,
  PortfolioCode.TEA_SHOP,
  PortfolioCode.SARAGH,
  PortfolioCode.LIVEN_HOUSE,
  PortfolioCode.CODE_FIGHTER,
  PortfolioCode.SMIKWELL,
  PortfolioCode.VISA,
  PortfolioCode.FURNAS,
  PortfolioCode.WORK
];

const portfolioItems = [
  {name: 'Tea Shop', code: PortfolioCode.TEA_SHOP, url: '/portfolio/tea', img: require('./images/teashop-main_mob_2x.png'), imgClassName: 'abstract-portfolio-page__image-img_tea-shop'},
  {name: 'CodeFighter', code: PortfolioCode.CODE_FIGHTER, url: '/portfolio/codefighter', img: require('./images/codefighter-ipad-iphone_mob_2x.png')},
  {name: 'LivenHouse', code: PortfolioCode.LIVEN_HOUSE, url: '/portfolio/livenhouse', img: require('./images/livenhouse-laptop-1_mob_2x.png')},
  {name: 'Saragh', code: PortfolioCode.SARAGH, url: '/portfolio/saragh', img: require('./images/saragh-main_mob_2x.png')},
  {name: 'Финансист', code: PortfolioCode.FINANSIST, url: '/portfolio/finansist', img: require('./images/finansist-main_mob.png')},
  {name: 'Smikwell', code: PortfolioCode.SMIKWELL, url: '/portfolio/smikwell', img: require('./images/smikwell-macbook_mob.png')},
  {name: 'Visa.Furnas', code: PortfolioCode.VISA, url: '/portfolio/visa', img: require('./images/visa-main_mob.png')},
  {name: 'Тест о профессиях', code: PortfolioCode.WORK, url: '/portfolio/work', img: require('./images/profession-main_mob.png')},
  {name: 'Furnas', code: PortfolioCode.FURNAS, url: '/portfolio/furnas', img: require('./images/furnas-team-macbook_mob_new.png')}
];

const navigationItems = map(portfolioOrder, code => find(portfolioItems, {code}));

export class AbstractPortfolioPage extends React.Component {

  static propTypes = {
    code: string
  };

  state = {
    nextPortfolioShown: false
  };

  portfolioRef = React.createRef();
  nextScreenRef = React.createRef();

  lastScrollTop = 0;

  handleScroll = () => {
    const {nextPortfolioShown} = this.state;
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > this.lastScrollTop && !nextPortfolioShown) {
      if (document.body.scrollHeight - st < this.nextScreenRef.current.offsetHeight + 100) {
        this.setState({
          nextPortfolioShown: true
        });
      }
    } else if (nextPortfolioShown) {
      if (document.body.scrollHeight - st > this.nextScreenRef.current.offsetHeight + 100) {
        this.setState({
          nextPortfolioShown: false
        });
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.getNextPortfolioItem()) {
      window.addEventListener('scroll', this.handleScroll, false);
    }
  }

  componentWillUnmount() {
    if (this.getNextPortfolioItem()) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  getNextPortfolioItem = () => {
    const {code} = this.props;
    const currentPortfolioIndex = indexOf(portfolioOrder, code);
    if (currentPortfolioIndex === -1) {
      return null;
    }
    const nextPortfolioCode = portfolioOrder[currentPortfolioIndex + 1];
    return find(navigationItems, {code: nextPortfolioCode});
  };

  handleContactClick = () => {
  };

  render() {
    const {children, code} = this.props;
    const {nextPortfolioShown} = this.state;
    const nextPortfolioItem = this.getNextPortfolioItem();
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Дизайн портфолио | Furnas</title>
          <meta name="description" content="Веб проекты, выполненные командой furnasteam"/>
          <link rel="canonical" href="https://furnas.ru/portfolio/furnas"/>
        </Helmet>
        <div className="abstract-portfolio-page">
          <Header onContactClick={this.handleContactClick}
                  items={navigationItems}
                  portfolioMode={true}/>
          <Navigation items={navigationItems}
                      active={find(portfolioItems, {code})}
                      onChange={this.handleActiveItemChange}/>
          <div ref={this.portfolioRef}
               className="abstract-portfolio-page__content">
            {children}
          </div>
          {nextPortfolioItem &&
          <div className={classNames('abstract-portfolio-page__blank', nextPortfolioShown ? 'abstract-portfolio-page__blank_shown' : null)} ref={this.nextScreenRef}>
            <UniversalLink href={nextPortfolioItem.url}
                           noStyle={true}>
              <div className="abstract-portfolio-page__next-work">
                <PortfolioTitle className="abstract-portfolio-page__next-title"
                                additionalText="Следующий проект">
                  {nextPortfolioItem.name}
                </PortfolioTitle>
                <Picture className={classNames('abstract-portfolio-page__image', nextPortfolioItem.imageClassName)}
                         imgClassName={classNames('abstract-portfolio-page__image-img', nextPortfolioItem.imgClassName)}
                         forPhoneOnly={[nextPortfolioItem.img]}
                         forTabletPortraitUp={[nextPortfolioItem.img]}/>
                <div className="abstract-portfolio-page__next-row">
                  <SectionTitle className="abstract-portfolio-page__continue">Продолжить</SectionTitle>
                  <Picture className="abstract-portfolio-page__right-arrow"
                           imgClassName="abstract-portfolio-page__right-arrow-img"
                           forPhoneOnly={[require('./images/right-arrow.svg')]}
                           forTabletPortraitUp={[require('./images/right-arrow.svg')]}/>
                </div>
              </div>
            </UniversalLink>
          </div>}
          {!nextPortfolioItem &&
          <Footer/>}
        </div>
      </ThemeProvider>
    );
  }

}
