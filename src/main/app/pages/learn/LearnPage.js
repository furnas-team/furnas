import React from 'react';
import './learn.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleLink} from '../../components/article-link/ArticleLink';
import {ArticleName} from '../../common/models/ArticleName';

export function LearnPage() {
  return (
    <ThemeProvider value={ThemeName.LIGHT}>
      <div className="learn">
        <div className="learn__container">
          <Title className="learn__title">
            Furnas
          </Title>
          <Subtitle className="learn__subtitle">
            Полезные статьи по теме Landing page
          </Subtitle>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.WHAT_IS_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_LANDING_PAGE_IF_I_HAVE_ONLINE_STORE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.HOW_USERS_FIND_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.DO_I_NEED_SEO_EXPERT}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.WHERE_BUY_ADS_FOR_LANDING_PAGE}>
          </ArticleLink>
          <ArticleLink className="learn__article-link"
                       articleName={ArticleName.CAN_I_CREATE_LANDING_PAGE}>
          </ArticleLink>
        </div>
      </div>
    </ThemeProvider>
  );

}
