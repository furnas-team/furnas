import React from 'react';
import classNames from 'classnames';
import {string} from 'prop-types';
import './input.scss'

export class Input extends React.Component {

  render() {
    const {className} = this.props;

    return (
      <input className={classNames('input', className)}/>
    );
  }

}
