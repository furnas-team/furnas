import React from 'react';
import './learn-article.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {ArticleLink} from '../../components/article-link/ArticleLink';
import {ArticleName, ArticleTitle} from '../../common/models/ArticleName';
import {BlockText} from '../../components/block-text/BlockText';
import {BlockTitle} from '../../components/block-title/BlockTitle';


export function renderArticleBody(articleName) {
  switch (articleName) {
    case ArticleName.WHAT_IS_LANDING_PAGE:
      return (
        <BlockText>
          Если вам есть, что рекламировать, то вам нужен Landing page
        </BlockText>
      );
  }
}

export function LearnArticlePage(props) {

  const articleName = props.match.params.name;

  return (
    <ThemeProvider value={ThemeName.LIGHT}>
      <div className="learn-article">
        <div className="learn-article__container">
          <Title className="learn-article__title">
            Furnas
          </Title>
          <Subtitle className="learn-article__subtitle">
            Полезные статьи по теме Landing page
          </Subtitle>


          <BlockTitle>
            {ArticleTitle[articleName]}
          </BlockTitle>

          {renderArticleBody(articleName)}

        </div>
      </div>
    </ThemeProvider>
  );

}
