import React from 'react';
import {ContactScreen} from '../../home/screens/contact/ContactScreen';
import {Popup} from '../../../components/Popup/Popup';
import './visa-portfolio.scss';
import {object} from 'prop-types';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {Picture} from '../../../components/picture/Picture';
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';

export class VisaPortfolioPage extends React.Component {

  static propTypes = {
    refProp: object
  };

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
      <div className="visa-portfolio" ref={this.props.refProp}>
        <PortfolioContainer className="visa-portfolio__title-container">
          <PortfolioTitle additionalText="проект">Visa.Furnas</PortfolioTitle>
        </PortfolioContainer>
        <PortfolioContainer className="visa-portfolio__idea-container">
          <div className="visa-portfolio__idea-text-block">
            <PortfolioSubtitle>Идея</PortfolioSubtitle>
            <PortfolioText>
              <p>Visa.Furnas один из наших проектов в стадии разработки. Сервис, где пользователи могут заполнить анкету на визу в Испанию и получить необходимый список документов. </p>
            </PortfolioText>
          </div>
          <div className="visa-portfolio__idea-image-block">
            <Picture imgClassName="visa-portfolio__idea-image-img"
                     forPhoneOnly={[require('./images/visa-main_mob.png')]}
                     forTabletPortraitUp={[require('./images/visa-main.png')]}/>
          </div>
        </PortfolioContainer>
        <PortfolioContainer>
          <div className="visa-portfolio__prepare-block">
            <PortfolioSubtitle>Подготовка</PortfolioSubtitle>
            <PortfolioText className="visa-portfolio__prepare-text">
              <p className="visa-portfolio__paragraph">Делаем разбор анкеты на визу и список документов. Анкету пересобираем в понятные вопросы. Для списка составляем роли пользователей.</p>
              <p className="visa-portfolio__paragraph">Анализируем все сайты с информацией по визе, находим плюсы и минусы. </p>
              <p>Придумываем несколько стилей и выбираем лучший. </p>
            </PortfolioText>
          </div>
          <div className="visa-portfolio__prepare-image-block">
            <Picture className="visa-portfolio__prepare-picture"
                     imgClassName="visa-portfolio__prepare-image-img"
                     forPhoneOnly={[require('./images/visa-doc.png')]}
                     forTabletPortraitUp={[require('./images/visa-doc.png')]}/>
          </div>
        </PortfolioContainer>
        <div className="visa-portfolio__form-block">
          <PortfolioContainer>
            <div className="visa-portfolio__form-image-block">
              <Picture imgClassName="visa-portfolio__form-image"
                       forPhoneOnly={[require('./images/visa-ipad_mob.png')]}
                       forTabletPortraitUp={[require('./images/visa-ipad.png')]}/>
            </div>
            <div className="visa-portfolio__form-text-block">
              <PortfolioSubtitle>Анкета</PortfolioSubtitle>
              <PortfolioText className="visa-portfolio__form-text">
                <p>
                  Анкету создаем в виде поэтапного теста. Вопросы логически пересобраны, сгруппированы для пользователя.
                </p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
        </div>
        <PortfolioContainer>
          <div className="visa-portfolio__documents-block">
            <PortfolioSubtitle>Список документов</PortfolioSubtitle>
            <PortfolioText className="visa-portfolio__documents-text">
              <p>Рисуем иконки для ролей, по которым сформированы списки документов. На главном экране предоставляем пользователю выбрать для кого нужен список документов</p>
            </PortfolioText>
          </div>
          <div className="visa-portfolio__documents-image-block">
            <Picture className="visa-portfolio__documents-picture"
                     imgClassName="visa-portfolio__documents-image-img"
                     forPhoneOnly={[require('./images/visa-iphone_mob.png')]}
                     forTabletPortraitUp={[require('./images/visa-iphone.png')]}/>
          </div>
        </PortfolioContainer>
        <NextPortfolioScreen nextPageHref="/portfolio"/>
        <Popup shown={contactPopupShown}>
          <ContactScreen requestSent={requestSent}
                         onCloseButtonClick={this.handleCloseButtonClick}
                         onSendContactClick={this.handleSendContactClick}/>
        </Popup>
      </div>
    );
  }


}
