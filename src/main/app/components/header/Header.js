import React from 'react';
import './header.scss';
import classNames from 'classnames';
import {array, bool, func, string} from 'prop-types';
import {Button} from '../button/Button';
import {MediumText} from '../medium-text/MediumText';
import {UniversalLink} from '../universal-link/UniversalLink';
import {MobileMenu, MobileMenuType} from '../mobile-menu/MobileMenu';

export class Header extends React.Component {

  static propTypes = {
    className: string,
    onContactClick: func,
    contactPopupShown: bool,
    portfolioMode: bool,
    items: array
  };

  static defaultProps = {
    onContactClick() {
    }
  };

  state = {
    scrollY: 0
  };

  handleScroll = event => {
    this.setState({scrollY: window.scrollY});
  };

  componentDidMount() {
    this.setState({scrollY: window.scrollY});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {scrollY} = this.state;
    const {className, onContactClick, contactPopupShown, portfolioMode, items} = this.props;
    return (
      <div className={classNames('header header_portfolio-mode', {
        'header_header-without-shadow': scrollY === 0 || contactPopupShown,
        'header_contact-popup-shown': contactPopupShown
      }, className)}>
        <div className="header__container"
             data-aos={portfolioMode ? null : 'fade-down'}
             data-aos-duration={portfolioMode ? null : '1000'}>
          <div className="header__menu-container">
            <UniversalLink noStyle={true} href="/">
              <div className="header__title-with-logo">
                <div className="header__logo-image">
                </div>
                <div className="header__title">
                  Furnas
                </div>
              </div>
            </UniversalLink>
            <UniversalLink noStyle={true} href="/#do">
              <MediumText className="header__title header__menu-title">
                Что делаем
              </MediumText>
            </UniversalLink>
            <UniversalLink noStyle={true} href="/#how">
              <MediumText className="header__title header__menu-title">
                Как работаем
              </MediumText>
            </UniversalLink>
            <UniversalLink noStyle={true} href="/#portfolio">
              <MediumText className="header__title header__menu-title">
                Портфолио
              </MediumText>
            </UniversalLink>
          </div>
          <div>
            {contactPopupShown &&
            <div className="header__close-contact-popup-button"
                 onClick={onContactClick}>
            </div>}
            {!contactPopupShown &&
            <UniversalLink noStyle={true} href="/#contact">
              <Button className="header__button">
                Связаться
              </Button>
            </UniversalLink>}
            {!contactPopupShown &&
            <MobileMenu onContactClick={onContactClick}
                        portfolioMode={portfolioMode}
                        menuType={portfolioMode ? MobileMenuType.PORTFOLIO : MobileMenuType.HOME}
                        items={items}/>}
          </div>
        </div>
      </div>
    );
  }

}
