import React from 'react';
import './share-master.scss';
import {Helmet} from 'react-helmet';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Header} from '../../components/header/Header';
import {Footer} from '../../components/footer/Footer';
import {Button, ButtonStyle} from '../../components/button/Button';

export class ShareMasterPage extends React.Component {

  handleContactClick = () => {

  };

  render() {
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Как подключить картинку для шаринга сайта | Furnas </title>
          <meta name="description" content="Инструкция по добавлению мета тегов для подключения сниппетов сайта в facevook и vk"/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div className="share-master">
          <Header onContactClick={this.handleContactClick}
                  portfolioMode={true}/>
          <div className="share-master__content">
            <h1 className="share-master__title">Вот ваша картинка</h1>
            <img src="https://sharemaster.furnas.ru/labo2fvrczu.png"
                 className="share-master__picture"/>
            <Button buttonStyle={ButtonStyle.BIG_PINK}>Скачать файлы</Button>
            <h2 className="share-master__instruction-title">Как добавить картинку на сайт</h2>
          </div>
          <Footer/>
        </div>
      </ThemeProvider>
    );
  }

}
