import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-title.scss';

export class PortfolioTitle extends React.Component {

  static propTypes = {
    className: string
  };

  render() {
    const {children, className} = this.props;
    return (
      <h1 className={classNames('portfolio-title', className)}>
        {children}
      </h1>
    );
  }

}
