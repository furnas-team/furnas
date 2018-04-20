import React from 'react';
import './home.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {SectionTitle} from '../../components/section-title/SectionTitle';
import {BlockTitle} from '../../components/block-title/BlockTitle';
import {BlockText} from '../../components/block-text/BlockText';
import {InputLabel} from '../../components/input-label/InputLabel';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {BlockSubtitle} from '../../components/block-subtitle/BlockSubtitle';
import {Link} from '../../components/link/Link';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleName} from '../../common/models/ArticleName';
import {ArticleLink, ArticleLinkSize} from '../../components/article-link/ArticleLink';
import {Helmet} from 'react-helmet';

export class HomePage extends React.Component {

  state = {
    userContact: ''
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

  render() {
    return (
      <ThemeProvider value={ThemeName.DARK}>
        <Helmet>
          <title>Дизайн и верстка Landing pages | Furnas</title>
          <meta name="description" content="Создаем Landing page поэтапно.  Показываем вам результат на каждом шаге и вы платите только в том случае, если он вам нравится."/>
        </Helmet>
        <div className="home">
          <div itemScope itemType="http://schema.org/LocalBusiness" className="home__container">
          <span itemProp="name">
          <Title className="home__title">
            Furnas
          </Title>
          <Subtitle className="home__subtitle">
            Дизайн и верстка Landing page
          </Subtitle>
          <div className="home__mobile-explain-text">
            Создаем Landing page поэтапно.  Показываем вам результат
            на каждом шаге и вы платите
            только в том случае, если он вам
            нравится.
          </div>
          <a href="#contact-us-section">
            <Button className="home__contact-us-mobile-button">
              Связаться с нами
            </Button>
          </a>
          </span>
            <SectionTitle className="home__process-section-title">
              Процесс
            </SectionTitle>
            <div className="home__process">
              <div className="home__process-block">
                <BlockTitle className="home__process-block-title">
                  Интервью
                </BlockTitle>
                <BlockText>
                  Общаемся, документируем требования к будущему прототипу.
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Время выполнения
                </BlockSubtitle>
                <BlockText>
                  1 день
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Стоимость
                </BlockSubtitle>
                <BlockText>
                  Платите в конце этапа, только если довольный работой: 5&nbsp;000&nbsp;руб.
                </BlockText>
                <div className="home__expamle-link">
                <Link href="https://drive.google.com/file/d/1gAhHYEyBYqPLLLfKc-w4446bDYgpVzYz/view?usp=sharing" target="_blank">
                Пример документации
                </Link>
                </div>
              </div>
              <div className="home__process-block">
                <BlockTitle className="home__process-block-title">
                  Прототип
                </BlockTitle>
                <BlockText className="home__process-block-text-with-margin">
                  Схематично рисуем Landing page.
                </BlockText>
                <BlockText className="home__process-block-text-with-margin">
                  Определяем расположение информационных блоков, их содержание.
                </BlockText>
                <BlockText>
                  Показываем, обсуждаем.
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Время выполнения
                </BlockSubtitle>
                <BlockText>
                  2 дня
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Стоимость
                </BlockSubtitle>
                <BlockText>
                  Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.
                </BlockText>
                <div className="home__expamle-link">
                <Link href="https://drive.google.com/file/d/1CWc_lmUYfTYll3a6D1EugHbWLjk1oe1p/view?usp=sharing">
                Пример прототипа
                </Link>
                </div>
              </div>
              <div className="home__process-block">
                <BlockTitle className="home__process-block-title">
                  Дизайн
                </BlockTitle>
                <BlockText>
                  Вы получаете полностью готовый дизайн в виде sketch файла и png.
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Время выполнения
                </BlockSubtitle>
                <BlockText>
                  3 дня
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Стоимость
                </BlockSubtitle>
                <BlockText>
                  Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.
                </BlockText>
                <div className="home__expamle-link">
                <Link href="https://drive.google.com/file/d/1xnE4ifqIChav1WbuAeZ55qsVgMr9jB0n/view?usp=sharing">
                Пример дизайна
                </Link>
                </div>
              </div>
              <div className="home__process-block">
                <BlockTitle className="home__process-block-title">
                  Разработка
                </BlockTitle>
                <BlockText className="home__process-block-text-with-margin">
                  Получаете разработанный Landing page в виде архива с html, js и css кодом.
                </BlockText>
                <BlockText>
                  Поможем разместить на хостинге, купить домен и разместить рекламу.
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Время выполнения
                </BlockSubtitle>
                <BlockText>
                  2 - 3 дня
                </BlockText>
                <BlockSubtitle className="home__process-block-subtitle">
                  Стоимость
                </BlockSubtitle>
                <BlockText>
                  Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.&nbsp;&mdash;&nbsp;30&nbsp;000&nbsp;руб.
                </BlockText>
                <div className="home__expamle-link">
                <Link href="https://drive.google.com/file/d/1IjFCFFExWlXotDTfHR5cDdWA82-tw8F_/view?usp=sharing" target="_blank">
                Пример кода
                </Link>
                </div>
              </div>
            </div>
            <a href="#contact-us-section">
              <Button className="home__contact-us-button">
                Связаться с нами
              </Button>
            </a>
            <SectionTitle className="home__blog-section-title">
              Полезные статьи
            </SectionTitle>
            <ArticleLink articleName={ArticleName.DO_I_NEED_LANDING_PAGE}
                         size={ArticleLinkSize.SMALL}
                         className="home__article-link"/>
            <ArticleLink articleName={ArticleName.WHAT_IS_LANDING_PAGE}
                         size={ArticleLinkSize.SMALL}
                         className="home__article-link"/>
            <ArticleLink articleName={ArticleName.DO_I_NEED_SEO_EXPERT}
                         size={ArticleLinkSize.SMALL}
                         className="home__article-link"/>
            <ArticleLink articleName={ArticleName.HOW_USERS_FIND_LANDING_PAGE}
                         size={ArticleLinkSize.SMALL}
                         className="home__article-link"/>
            <ArticleLink articleName={ArticleName.WHERE_BUY_ADS_FOR_LANDING_PAGE}
                         size={ArticleLinkSize.SMALL}
                         className="home__article-link"/>
            <div className="home__more-articles-row">
              Больше статей на <Link href="/learn">furnas.ru/learn</Link>
            </div>
            <SectionTitle className="home__contact-us-section-title" id="contact-us-section">
              Контакты
            </SectionTitle>
            <div className="home__phone-contact">
              <Link href="tel:+7(919)081-68-22">
              <span itemProp="telephone">
              +7(919)081-68-22
              </span>
              </Link>
            </div>
            <div className="home__email-contact">
              <Link href="mailto:furnasteam@gmail.com">
              <span itemProp="email">
              furnasteam@gmail.com
              </span>
              </Link>
            </div>
            <InputLabel className="home__contact-input-label">
              Или оставьте свои контактные данные (телефон, почта или skype)
            </InputLabel>
            <div className="home__contact-us-row">
              <Input className="home__contact-us-input"
                     value={this.state.userContact}
                     onChange={this.handleUserContactInputChange}/>
              <Button className="home__send-contact"
                      onClick={this.handleSendContact}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

}
