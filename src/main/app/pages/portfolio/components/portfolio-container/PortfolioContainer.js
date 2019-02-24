import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-container.scss';

export class PortfolioContainer extends React.Component {

  static propTypes = {
    className: string
  };

  render() {
    const {className, children} = this.props;
    return (
      <div className={classNames('portfolio-container', className)}>
        {children}
      </div>
    );
  }

}
