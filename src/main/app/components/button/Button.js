import React from 'react';
import './button.scss'
import classNames from 'classnames';
import {string, any} from 'prop-types';

export class Button extends React.Component {

  static propTypes = {
    className: string,
    children: any
  };

  render() {
    const {className, children} = this.props;

    return (
      <button className={classNames('button', className)}>
        {children}
      </button>
    );
  }

}
