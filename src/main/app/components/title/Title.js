import React from 'react';
import './title.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

Title.propTypes = {
  className: string,
  children: any
};

export function Title({children, className}) {

  return (
    <div className={classNames('title', className)}>
      {children}
    </div>
  );

}
