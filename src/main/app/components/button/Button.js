import React from 'react';
import './button.scss'
import classNames from 'classnames';
import {string, any, func} from 'prop-types';

export class Button extends React.Component {

  static propTypes = {
    className: string,
    children: any,
    onClick: func
  };

  static defaultProps = {
    onClick() {
    }
  };

  render() {
    const {className, children, onClick} = this.props;

    return (
      <button className={classNames('button', className)}
              onClick={onClick}>
        {children}
      </button>
    );
  }

}
