import React from 'react';
import './block-text.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

BlockText.propTypes = {
  className: string,
  children: any
};

export function BlockText({className, children}) {

  return (
    <p className={classNames('block-text', className)}>
      {children}
    </p>
  );

}
