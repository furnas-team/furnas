import React from 'react';
import './subtitle.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

Subtitle.propTypes = {
  className: string,
  children: any
};

export function Subtitle({children, className}) {

  return (
    <div className={classNames('subtitle', className)}>
      {children}
    </div>
  );

}
