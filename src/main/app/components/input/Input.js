import React from 'react';
import classNames from 'classnames';
import './input.scss';
import {string, func, bool} from 'prop-types';

export class Input extends React.Component {

  static propTypes = {
    className: string,
    value: string,
    onChange: func,
    placeholder: string,
    isValid: bool
  };

  static defaultProps = {
    onChange(){
    },
    isValid: true
  };

  render() {
    const {className, value, onChange, placeholder, isValid} = this.props;

    return (
      <input className={classNames('input',  className, isValid ? '' : 'input_invalid')}
             value={value}
             onChange={onChange}
             placeholder={placeholder}/>
    );
  }

}
