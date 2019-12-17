import React from 'react';
import './contact-screen.scss';
import {Input} from '../../../../components/input/Input';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {bool, func, string} from 'prop-types';
import trim from 'lodash/trim';
import {Picture} from '../../../../components/picture/Picture';
import classNames from 'classnames';
import {Radio} from '../../../../components/radio/Radio';

const CONTACT_OPTIONS = [
  {
    name: 'Позвонить',
    value: 'phone'
  },
  {
    name: 'WhatsApp',
    value: 'whatsapp'
  },
  {
    name: 'Telegram',
    value: 'telegram'
  }
];

export class ContactScreen extends React.Component {

  static propTypes = {
    requestSent: bool,
    onSendContactClick: func,
    onCloseButtonClick: func,
    id: string
  };

  state = {
    inputValue: '',
    inputIsValid: true,
    contactOption: CONTACT_OPTIONS[0]
  };

  handlePhoneClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked phone link"
    );
  };

  handleEmailClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked phone link"
    );
  };

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value, inputIsValid: true})
  };

  handleSendContactClick = () => {
    const {onSendContactClick} = this.props;
    const {inputValue, contactOption} = this.state;
    if (!trim(inputValue)) {
      this.setState({inputIsValid: false});
    } else {
      onSendContactClick(inputValue, contactOption);
    }
  };

  handleContactOptionChange = (option) => {
    this.setState({contactOption: option});
  };

  render() {
    const {requestSent, onCloseButtonClick, id} = this.props;
    const {inputValue, inputIsValid, contactOption} = this.state;

    return (
      <div className={classNames('contact-screen', requestSent ? 'contact-screen_sent' : '')} id={id}>
        <div className="contact-screen__form">
          {!requestSent &&
          <SectionTitle className="contact-screen__title">
            Как связаться?
          </SectionTitle>}
          {requestSent &&
          <SectionTitle className="contact-screen__title">
            Письмо отправлено!
          </SectionTitle>}
          {!requestSent &&
          <div>
            <div>
              <BlockText className="contact-screen__text">
                Оставьте номер телефона и укажите способ связи:
              </BlockText>
            </div>
            <div className="contact-screen__radio">
              <Radio options={CONTACT_OPTIONS}
                     className="contact-screen__radio-component"
                     selectedObject={contactOption}
                     onChange={this.handleContactOptionChange}/>
            </div>
            <div className="contact-screen__group">
              <Picture className="contact-screen__input-arrow"
                       imgClassName="contact-screen__input-arrow-img"
                       forPhoneOnly={[require('./images/input-arrow.svg')]}
                       forTabletPortraitUp={[require('./images/input-arrow.svg')]}
                       alt="Стрелка"/>
              <Input className="contact-screen__input"
                     placeholder="Телефон"
                     value={inputValue}
                     isValid={inputIsValid}
                     onChange={this.handleInputChange}/>
              <Button className="contact-screen__button"
                      buttonStyle={ButtonStyle.BIG_PINK_FULL}
                      onClick={this.handleSendContactClick}>
                Отправить
              </Button>
            </div>
          </div>}
          {requestSent &&
          <div>
            <div className="contact-screen__image">
            </div>
            <BlockText>
              Мы свяжемся с вами в
            </BlockText>
            <BlockText>
              ближайшее время.
            </BlockText>
            <Button className="contact-screen__button-back"
                    buttonStyle={ButtonStyle.BIG_PINK_FULL}
                    onClick={onCloseButtonClick}>
              Еще отправить
            </Button>
          </div>}
        </div>
        {/*{!requestSent &&*/}
        {/*<div className="contact-screen__links">*/}
        {/*  <SectionTitle className="contact-screen__title">*/}
        {/*    Контакты*/}
        {/*  </SectionTitle>*/}
        {/*  <div className="contact-screen__link">*/}
        {/*    <Link href="tel:+7(915)682-19-55"*/}
        {/*          onClick={this.handlePhoneClick}>*/}
        {/*      +7(915) 682-19-55*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*  <div className="contact-screen__link">*/}
        {/*    <Link onClick={this.handleEmailClick}>*/}
        {/*      furnasteam@gmail.com*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>}*/}
      </div>
    );
  }

}
