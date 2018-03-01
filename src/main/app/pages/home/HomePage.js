import React from 'react';
import './home.scss';

export function HomePage() {
  return (
    <div className="home">
      <a className="home__link home__link_work" href="http://work.furnas.ru">
        <div className="home__text home__text_work">
          Скучно всю жизнь работать на одной работе.
        </div>
        <div className="home__text home__text_work">
          Попробуй себя в новых профессиях.
        </div>
      </a>
      <a className="home__link home__link_blog" href="http://blog.furnas.ru">
        <div className="home__text home__text_blog">
          Читайте наш блог обо всем.
        </div>
        <div className="home__text home__text_blog">
          Но он пока в разработке...
        </div>
      </a>
    </div>
  );

}
