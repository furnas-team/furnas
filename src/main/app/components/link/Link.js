import React from 'react';
import './link.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

Link.propTypes = {
  className: string,
  href: string,
  children: any
};

export function Link({className, children, href}) {

  return (
    <a className={classNames('link', className)} href={href}>
      {children}
    </a>
  );

}
