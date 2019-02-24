import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-text.scss';

export class PortfolioText extends React.Component {

  static propTypes = {
    className: string
  };

  render() {
    const {className, children} = this.props;
    return (
      <div className={classNames('portfolio-text', className)}>
        {children}
      </div>
    );
  }

}
