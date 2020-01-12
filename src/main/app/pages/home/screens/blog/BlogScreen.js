import React from 'react';
import './blog-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class BlogScreen extends React.Component {

  static propTypes = {
    id: string
  };

  render() {
    const {id} = this.props;
    return (
      <div className="blog-screen" id={id}>
        <SectionTitle className="blog-screen__title2">
          Блог
        </SectionTitle>
        <div className="blog-screen__portfolio">
          <UniversalLink noStyle={true} target="_blank" href="https://spark.ru/startup/furnas/blog/46557/kak-sekonomit-na-sozdanii-sajta-i-zapustitsya-bistree">
            <div className="blog-screen__card">
              <div className="blog-screen__card-name">Как сэкономить на создании сайта и запуститься быстрее</div>
              <Picture className="blog-screen__image"
                       imgClassName="blog-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-article-3_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-article-3_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-article-3_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-article-3_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-article-3.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-article-3_2x.png')]}
                       alt="CodeFighter"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://spark.ru/startup/furnas/blog/46941/kak-otsenit-sroki-it-proekta">
            <div className="blog-screen__card">
              <div className="blog-screen__card-name">Как оценить сроки IT-проекта</div>
              <Picture className="blog-screen__image"
                       imgClassName="blog-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-article-2_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-article-2_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-article-2_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-article-2_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-article-2.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-article-2_2x.png')]}
                       alt="Saragh"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://spark.ru/startup/furnas/blog/51069/kogda-zakazivat-dizajn">
            <div className="blog-screen__card">
              <div className="blog-screen__card-name">Когда заказывать дизайн</div>
              <Picture className="blog-screen__image"
                       imgClassName="blog-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-article-4_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-article-4_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-article-4_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-article-4_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-article-4.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-article-4_2x.png')]}
                       alt="LivenHouse"/>
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} target="_blank" href="https://spark.ru/startup/furnas/blog/51211/kak-sdelat-horoshij-sajt-esli-net-deneg">
            <div className="blog-screen__card">
              <div className="blog-screen__card-name">Как сделать хороший сайт, если нет денег</div>
              <Picture className="blog-screen__image"
                       imgClassName="blog-screen__image-img"
                       forPhoneOnly={[require('./images/portfolio-article-1_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/portfolio-article-1_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/portfolio-article-1_tab.png')]}
                       forTabletPortraitUpRetina={[require('./images/portfolio-article-1_tab_2x.png')]}
                       forTabletLandscapeUp={[require('./images/portfolio-article-1.png')]}
                       forTabletLandscapeUpRetina={[require('./images/portfolio-article-1_2x.png')]}
                       alt="Финансист"/>
            </div>
          </UniversalLink>
        </div>
        <div className="blog-screen__row">
          <BlockText>
            Еще больше статей
          </BlockText>
          <UniversalLink noStyle={true} target="_blank" href="https://spark.ru/startup/furnas/blog">
            <div className="blog-screen__text-row">
              <Picture className="blog-screen__image-foreign"
                       imgClassName="blog-screen__image-foreign-img"
                       forPhoneOnly={[require('./images/foreign.svg')]}
                       forTabletPortraitUp={[require('./images/foreign.svg')]}
                       alt="Фигура"/>
              <BlockText className="blog-screen__structure-text">Статьи</BlockText>
            </div>
          </UniversalLink>
        </div>
      </div>
    );
  }

}
