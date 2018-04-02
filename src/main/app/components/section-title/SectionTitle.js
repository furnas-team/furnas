import React from 'react';
import {string, any} from 'prop-types';
import classNames from 'classnames';
import './section-title.scss';

SectionTitle.propTypes = {
  className: string,
  children: any
};

export function SectionTitle({className, children}) {

  return (
    <div className={classNames('section-title', className)}>
      {children}
    </div>
  );
}
