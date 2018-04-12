import React from 'react';
import {string, any} from 'prop-types';
import classNames from 'classnames';
import './section-title.scss';

SectionTitle.propTypes = {
  className: string,
  children: any,
  id: string
};

export function SectionTitle({className, children, id}) {

  return (
    <div id={id} className={classNames('section-title', className)}>
      {children}
    </div>
  );
}
