import React from 'react';
import './link.scss';
import classNames from 'classnames';
import {string, any} from 'prop-types';

Link.propTypes = {
  className: string,
  href: string,
  children: any,
  target: string
};

export function Link({className, children, href, target}) {

  return (
    <a className={classNames('link', className)}
       target={target}
       href={href}>
      {children}
    </a>
  );

}
