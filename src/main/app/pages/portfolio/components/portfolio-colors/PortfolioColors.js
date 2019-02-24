import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-colors.scss';

export const PortfolioType = {
  WORK: 'WORK'
};

export const PortfolioClassNameByType = {
  [PortfolioType.WORK]: 'portfolio-colors__work'
};

export class PortfolioColors extends React.Component {

  static propTypes = {
    className: string,
    portfolioType: string
  };


  render() {
    const {className, portfolioType} = this.props;
    return (
      <div className={classNames('portfolio-colors', PortfolioClassNameByType[portfolioType], className)}>
        <p className="portfolio-colors__label">Цветовая гамма</p>
        <div className="portfolio-colors__row">
          <div className="portfolio-colors__square portfolio-colors__1"></div>
          <div className="portfolio-colors__square portfolio-colors__2"></div>
        </div>
        <div className="portfolio-colors__row">
          <div className="portfolio-colors__square portfolio-colors__3"></div>
          <div className="portfolio-colors__square portfolio-colors__4"></div>
        </div>
      </div>
    );
  }

}
