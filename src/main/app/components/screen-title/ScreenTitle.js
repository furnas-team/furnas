import React from 'react';
import {string, any} from 'prop-types';
import classNames from 'classnames';
import './screen-title.scss';

SectionTitle.propTypes = {
  className: string,
  children: any,
  id: string,
  dataAos: string,
  dataAosDuration: string
};

export function SectionTitle({className, children, id, dataAos, dataAosDuration}) {

  return (
    <h3 className={classNames('section-title', className)} data-aos={dataAos} data-aos-duration={dataAosDuration}>
      {children}
    </h3>
  );
}
