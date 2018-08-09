import React from 'react';
import './contact-screen.scss';
import {Input} from '../../../../components/input/Input';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Link} from '../../../../components/link/Link';
import {Button, ButtonStyle} from '../../../../components/button/Button';

export class ContactScreen extends React.Component {

  render() {
    return (
      <div className="contact-screen">
        <div className="contact-screen__form">
          <SectionTitle className="contact-screen__title">
            Как связаться?
          </SectionTitle>
          <BlockText>
            Оставьте свои контактные данные и
          </BlockText>
          <BlockText>
            мы свяжемся с вами в течение дня
          </BlockText>
          <Input className="contact-screen__input" placeholder="Телефон, почта или скайп"/>
          <Button className="contact-screen__button"
                  buttonStyle={ButtonStyle.BIG_BLUE}>
            Связаться
          </Button>
        </div>
        <div className="contact-screen__links">
          <SectionTitle className="contact-screen__title">
            Контакты
          </SectionTitle>
          <div className="contact-screen__link">
            <Link>
              +7(919) 081-68-22
            </Link>
          </div>
          <div className="contact-screen__link">
            <Link>
              sdaleshin@gmail.com
            </Link>
          </div>
        </div>
      </div>
    );
  }

}
