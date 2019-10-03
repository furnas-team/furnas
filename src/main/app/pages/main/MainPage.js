import React from 'react';
import './main.scss';

export class MainPage extends React.Component {

  render() {
    return (
      <div className="main">
        <header className="main__header">
          <div className="main__header-container">
            <h1 className="main__title">
              Студия веб дизайна и разработки <a className="main__furnas-link" href='/about'>Furnas</a>
              <a className="main__contact-link" href="javasript://void()">Связаться</a>
            </h1>
          </div>
        </header>
        <section className="main__help-section main__links-section">
          <div className="main__links-container">
            <div className="main__link-row">
              <a href="/startups" className="main__link">Стартапам</a>
            </div>
            <div className="main__link-row">
              <a href="/it-companies" className="main__link">IT Компаниям</a>
            </div>
            <div className="main__link-row">
              <a href="/events" className="main__link">Организаторам мероприятий</a>
            </div>
            <div className="main__link-row">
              <a href="/companies" className="main__link">Бизнесу</a>
            </div>
          </div>
        </section>
        <section className="main__do-section main__links-section">
        </section>
      </div>
    );
  }

}
