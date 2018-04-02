import React from 'react';
import './block-title.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

BlockTitle.propTypes = {
  className: string,
  children: any
};

export function BlockTitle({className, children}) {

  return (
    <div className={classNames('block-title', className)}>
      {children}
    </div>
  );

}
