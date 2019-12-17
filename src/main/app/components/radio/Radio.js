import React from 'react';
import './radio.scss';
import {array, object, func, string} from 'prop-types'
import map from 'lodash/map';
import classNames from 'classnames';

export class Radio extends React.Component {

  static propTypes = {
    options: array,
    selectedObject: object,
    onChange: func,
    className: string
  };

  render() {
    const {options, selectedObject, onChange, className} = this.props;
    return (
      <div className={classNames('radio', className)}>
        {map(options, option => (
          <div className={classNames('radio__item', option === selectedObject ? 'radio__item_selected': '')}
               onClick={() => onChange(option)}>
            <div className="radio__circle">
              <div className="radio__point"></div>
            </div>
            <div className="radio__name">
              {option.name}
            </div>
          </div>
        ))}
      </div>
    );    
  }
}
