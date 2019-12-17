import React from 'react';
import './code-fighter-portfolio.scss';
import {object} from 'prop-types';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {Picture} from '../../../components/picture/Picture';
import {NextPortfolioScreen} from '../components/next-portfolio-screen/NextPortfolioScreen';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';

export class CodeFighterPortfolioPage extends React.Component {

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
      <div className="code-fighter-portfolio" ref={this.props.refProp}>
        <div className="code-fighter-portfolio__main-screen">
          <PortfolioContainer className="code-fighter-portfolio__title-container">
            <PortfolioTitle additionalText="проект" className="code-fighter-portfolio__title">CodeFighter</PortfolioTitle>
          </PortfolioContainer>
          <PortfolioContainer className="code-fighter-portfolio__idea-container">
            <div className="code-fighter-portfolio__idea-image-block">
              <Picture imgClassName="code-fighter-portfolio__idea-image-img"
                       forPhoneOnly={[require('./images/codefighter-ipad-iphone_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/codefighter-ipad-iphone_2x.png')]}/>
            </div>
          </PortfolioContainer>
        </div>
        <PortfolioContainer>
          <div className="code-fighter-portfolio__task-image-block">
            <Picture className="code-fighter-portfolio__task-picture"
                     imgClassName="code-fighter-portfolio__task-image-img"
                     forPhoneOnly={[require('./images/codefighter-iphone-1_mob_2x.png')]}
                     forTabletPortraitUp={[require('./images/codefighter-iphone-1_2x.png')]}/>
          </div>
          <div className="code-fighter-portfolio__task-block">
            <PortfolioSubtitle>Задача проекта</PortfolioSubtitle>
            <PortfolioText className="code-fighter-portfolio__task-text">
              <p className="code-fighter-portfolio__paragraph">
                Заказчик — команда разработчиков, работающая с российскими и иностранными компаниями.
                Разработать дизайн сайта в строгом, минималистичном стиле.
                Продумать структуру по предоставлению информации и написать тексты.</p>
            </PortfolioText>
          </div>
        </PortfolioContainer>
        <PortfolioContainer className="code-fighter-portfolio__mood-block-container">
          <div className="code-fighter__mood-block">
            <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
            <PortfolioText>
              <p>Два основных цвета — белый и чёрный.
                Так как дизайн должен быть строгим, добавляем мягкий красный цвет как акцентный.
                Серый — дополнительный, нейтральный цвет.</p>
            </PortfolioText>
          </div>
          <div className="code-fighter-portfolio__colors-block">
            <PortfolioColors portfolioType={PortfolioType.CODE_FIGHTER}/>
          </div>
        </PortfolioContainer>
        <div className="code-fighter-portfolio__structure-container">
          <PortfolioContainer>
            <div className="code-fighter-portfolio__structure-image-block">
              <Picture className="code-fighter-portfolio__structure-picture"
                       imgClassName="code-fighter-portfolio__structure-image-img"
                       forPhoneOnly={[require('./images/codefighter-ipad-1_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/codefighter-ipad-1_2x.png')]}/>
            </div>
            <div className="code-fighter-portfolio__structure-block">
              <PortfolioSubtitle>Структура</PortfolioSubtitle>
              <PortfolioText className="code-fighter-portfolio__structure-text">
                <p className="code-fighter-portfolio__paragraph">
                  Чистая структура сайта даёт пользователю быстрее осознать информацию и оценить команду.</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
        </div>
        <PortfolioContainer>
          <div className="code-fighter-portfolio__prepare-block">
            <PortfolioSubtitle>Реализация</PortfolioSubtitle>
            <PortfolioText className="code-fighter-portfolio__prepare-text">
              <p className="code-fighter-portfolio__paragraph">
                К сайту добавили новые пункты и также отобразили лучшие качества команды.
                Дизайн сайта разработан под десктопную, планшетную и мобильную версии.</p>
            </PortfolioText>
          </div>
          <div className="code-fighter-portfolio__prepare-image-block">
            <Picture className="code-fighter-portfolio__prepare-picture"
                     imgClassName="code-fighter-portfolio__prepare-image-img"
                     forPhoneOnly={[require('./images/codefighter-iphone-2_mob_2x.png')]}
                     forTabletPortraitUp={[require('./images/codefighter-iphone-2_2x.png')]}/>
          </div>
        </PortfolioContainer>
        <div className="code-fighter-portfolio__result-container">
          <PortfolioContainer>
            <Picture className="code-fighter-portfolio__big-tablet-picture"
                     imgClassName="code-fighter-portfolio__big-tablet-img"
                     forPhoneOnly={[require('./images/codefighter-ipad-2_mob_2x.png')]}
                     forTabletPortraitUp={[require('./images/codefighter-ipad-2_2x.png')]}/>
          </PortfolioContainer>
        </div>
        <NextPortfolioScreen nextPageHref="/portfolio"/>
      </div>
    );
  }


}
