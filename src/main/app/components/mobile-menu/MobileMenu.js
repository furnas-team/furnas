import React from 'react';
import {string, func} from 'prop-types';
import './mobile-menu.scss';
import {Popup} from '../Popup/Popup';
import {Picture} from '../picture/Picture';
import {UniversalLink} from '../universal-link/UniversalLink';
import {BlockText} from '../block-text/BlockText';
import {Button} from '../button/Button';

export const MobileMenuType = {
  HOME: 'HOME',
  PORTFOLIO: 'PORTFOLIO'
};

export class MobileMenu extends React.Component {

  static propTypes = {
    menuType: string,
    onContactClick: func
  };

  static defaultProps = {
    menuType: MobileMenuType.HOME
  };

  state = {
    popupShown: false,
  };

  handleHamburgerClick = () => {
    this.setState({popupShown: true});
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  };

  handleItemClick = () => {
    this.setState({popupShown: false});
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  handleCloseClick = () => {
    this.setState({popupShown: false});
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  handleContactClick = () => {
    const {onContactClick} = this.props;
    this.setState({popupShown: false});
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    onContactClick();
  };

  render() {
    const {menuType, onContactClick} = this.props;
    const {popupShown} = this.state;
    return (
      <div className="mobile-menu">
        <div className="mobile-menu__hamburger"
             onClick={this.handleHamburgerClick}>
        </div>
        <Popup shown={popupShown}>
          <div className="mobile-menu__content">
            <Picture className="mobile-menu__close-image"
                     imgClassName="mobile-menu__close-image-img"
                     forPhoneOnly={[require('./images/close.svg')]}
                     forTabletPortraitUp={[require('./images/close.svg')]}
                     onClick={this.handleCloseClick}
                     alt="Закрыть меню"/>
            <UniversalLink noStyle={true} href="/">
              <div className="mobile-menu__title-with-logo">
                <div className="mobile-menu__logo-image">
                </div>
                <div className="mobile-menu__title">
                  Furnas
                </div>
              </div>
            </UniversalLink>
            {menuType === MobileMenuType.HOME && <div>
              <UniversalLink noStyle={true} href="#do" onClick={this.handleItemClick}>
                <BlockText className="mobile-menu__item">Что делаем</BlockText>
              </UniversalLink>
              <UniversalLink noStyle={true} href="#how" onClick={this.handleItemClick}>
                <BlockText className="mobile-menu__item">Как работаем</BlockText>
              </UniversalLink>
              <UniversalLink noStyle={true} href="#portfolio" onClick={this.handleItemClick}>
                <BlockText className="mobile-menu__item">Портфолио</BlockText>
              </UniversalLink>
            </div>}
            <Button onClick={this.handleContactClick} className="mobile-menu__contact-button">
              Связаться
            </Button>
          </div>
        </Popup>
      </div>
    );
  }

}
