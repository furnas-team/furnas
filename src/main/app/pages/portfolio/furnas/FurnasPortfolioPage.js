import React from 'react';
import './furnas-portfolio.scss';
import {object} from 'prop-types';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';
import {Popup} from '../../../components/Popup/Popup';
import {ContactScreen} from '../../home/screens/contact/ContactScreen';
import {AbstractPortfolioPage, PortfolioCode} from '../abstract-portfolio-page/AbstractPortfolioPage';

export class FurnasPortfolioPage extends React.Component {

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
      <AbstractPortfolioPage code={PortfolioCode.FURNAS}>
        <div className="furnas-portfolio" ref={this.props.refProp}>
          <PortfolioContainer className="furnas-portfolio__title-container">
            <PortfolioTitle additionalText="проект">Furnas team</PortfolioTitle>
          </PortfolioContainer>
          <PortfolioContainer>
            <div className="furnas-portfolio__task-block">
              <PortfolioSubtitle>Задача</PortfolioSubtitle>
              <PortfolioText>
                <p className="furnas-portfolio__paragraph">Под редизайн попал одностраничный сайт дизайна лендингов и вёрстки.</p>
                <p className="furnas-portfolio__paragraph">Поставлена задача найти и решить причину низкого посещения сайта.</p>
                <p className="furnas-portfolio__paragraph">У студии мало ярких задизайненых работ, поэтому надо выкручиваться на одном лендинге сайта. </p>
              </PortfolioText>
            </div>
            <div className="furnas-portfolio__task-image-block">
              <Picture className="furnas-portfolio__task-picture"
                       imgClassName="furnas-portfolio__task-image-img"
                       forPhoneOnly={[require('./images/furnas-team-ipad_mob.png')]}
                       forTabletPortraitUp={[require('./images/furnas-team-ipad.png')]}/>
            </div>
          </PortfolioContainer>
          <PortfolioContainer className="furnas-portfolio__old-version-container">
            <div className="furnas-portfolio__old-colors-block">
              <PortfolioColors portfolioType={PortfolioType.OLD_FURNAS}/>
            </div>
            <div className="furnas-portfolio__old-version-block">
              <PortfolioSubtitle>Предыдущая версия сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Стиль сайта: тёмный дизайн, дополнительные цвета небесно-голубой и приглушенно-коралловый. Их мало, из-за чего экран матово-тёмный, но с яркими акцентами.</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <div className="furnas-portfolio__idea-block">
            <PortfolioContainer>
              <div className="furnas-portfolio__idea-text-block">
                <PortfolioSubtitle>Идея</PortfolioSubtitle>
                <PortfolioText>
                  <p className="furnas-portfolio__paragraph">
                    Решение проблемы — разрушить недоверие пользователя к маленькой студии без готовых работ в дизайне.
                  </p>
                  <p className="furnas-portfolio__paragraph">
                    Для этого:
                  </p>
                  <p className="furnas-portfolio__paragraph">
                    1) Ответить на все вопросы и проговорить неудобные ситуации;
                  </p>
                  <p>
                    2) Сделать дизайн лёгким и дерзким, соответствуя возрасту студии;
                  </p>
                </PortfolioText>
              </div>
              <div className="furnas-portfolio__idea-image-block">
                <Picture imgClassName="furnas-portfolio__idea-image"
                         forPhoneOnly={[require('./images/furnas-team-franklin_mob.png')]}
                         forTabletPortraitUp={[require('./images/furnas-team-franklin.png')]}/>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <div className="furnas-portfolio__structure-image-block">
              <Picture className="furnas-portfolio__structure-picture"
                       imgClassName="furnas-portfolio__structure-image-img"
                       forPhoneOnly={[require('./images/furnas-team-4-steps_mob.png')]}
                       forTabletPortraitUp={[require('./images/furnas-team-4-steps.png')]}/>
            </div>
            <div className="furnas-portfolio__structure-block">
              <PortfolioSubtitle>Структура сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Легкая структура «Вопрос — ответ» для быстрого чтения во время пролистывания сайта. Не требует сильного погружения в текст, чтобы понять куда попал пользователь. </p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <PortfolioContainer className="furnas-portfolio__mood-block-container">
            <div className="furnas-portfolio__mood-block">
              <PortfolioSubtitle>Настроение</PortfolioSubtitle>
              <PortfolioText>
                <p>Студия маленькая, новаторская и амбициозная. Светлыми и яркими цветами передаем чистоту и юность. Создаем игривое настроение, что позволяет пользователю не стесняясь задать
                  вопрос.</p>
              </PortfolioText>
            </div>
            <div className="furnas-portfolio__colors-block">
              <PortfolioColors portfolioType={PortfolioType.FURNAS}/>
            </div>
          </PortfolioContainer>
          <div className="furnas-portfolio__design-block">
            <PortfolioContainer>
              <div className="furnas-portfolio__design-image-block">
                <Picture imgClassName="furnas-portfolio__design-image"
                         forPhoneOnly={[require('./images/furnas-team-iphone_mob.png')]}
                         forTabletPortraitUp={[require('./images/furnas-team-iphone.png')]}/>
              </div>
              <div className="furnas-portfolio__design-text-block">
                <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
                <PortfolioText>
                  <p>
                    Фон делаем белым, с аналогией на лист бумаги. Рисуем тематические картинки к каждому вопросу и разукрашиваем вспомогательными цветами.
                  </p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <Picture className="furnas-portfolio__mac-picture"
                     imgClassName="furnas-portfolio__mac-img"
                     forPhoneOnly={[require('./images/furnas-team-macbook_mob.png')]}
                     forTabletPortraitUp={[require('./images/furnas-team-macbook.png')]}/>
          </PortfolioContainer>
          <PortfolioContainer>
            <Picture className="furnas-portfolio__plan-picture"
                     imgClassName="furnas-portfolio__plan-img"
                     forPhoneOnly={[require('./images/furnas-team-macbook-plan_mob.png')]}
                     forTabletPortraitUp={[require('./images/furnas-team-macbook-plan.png')]}/>
          </PortfolioContainer>
          {/*<NextPortfolioScreen nextPageHref="/portfolio/smikwell"/>*/}
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
        </div>
      </AbstractPortfolioPage>
    );
  }


}
