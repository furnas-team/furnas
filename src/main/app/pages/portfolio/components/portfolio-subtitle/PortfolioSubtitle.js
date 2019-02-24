import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-subtitle.scss';

export class PortfolioSubtitle extends React.Component {

  static propTypes = {
    className: string
  };

  render() {
    const {children, className} = this.props;
    return (
      <h2 className={classNames('portfolio-subtitle', className)}>
        {children}
      </h2>
    );
  }

}
