import React from 'react';
import './article-link.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';
import {ArticleTitle} from '../../common/models/ArticleName';


ArticleLink.propTypes = {
  className: string,
  articleName: string,
  children: any
};

export function ArticleLink({className, articleName}) {

  return (
    <div className={classNames('article-link', className)}>
      <a className="article-link__a" href={`/learn/${articleName}`}>
        {ArticleTitle[articleName]}
      </a>
    </div>
  );

}
