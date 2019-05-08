import React from 'react';
import './title.scss';
import classNames from 'classnames';
import {any, func, string} from 'prop-types';
import {createThemeClassName, ThemeConsumer} from '../theme-context/ThemeContext';

const BASE_CLASS_NAME = 'title';

Title.propTypes = {
  className: string,
  children: any,
  onMouseOver: func,
  onMouseOut: func,
  onClick: func
};

export function Title({children, className, onMouseOver, onMouseOut, onClick}) {

  return (
    <ThemeConsumer>
      {theme => (
        <h1 className={classNames(BASE_CLASS_NAME, createThemeClassName(BASE_CLASS_NAME, theme), className)}
            onMouseOver={onMouseOver}
            onClick={onClick}
            onMouseOut={onMouseOut}>
          {children}
        </h1>
      )}
    </ThemeConsumer>
  );

}
