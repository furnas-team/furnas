import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-title.scss';

export class PortfolioTitle extends React.Component {

  static propTypes = {
    className: string,
    additionalText: string
  };

  render() {
    const {children, className, additionalText} = this.props;
    return (
      <h1 className={classNames('portfolio-title', className)}>
        {additionalText &&
        <span className="portfolio-title__additional-text">{additionalText}</span>}
        {children}
      </h1>
    );
  }

}
