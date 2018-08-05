import React from 'react';
import './header.scss';
import classNames from 'classnames';
import {string} from 'prop-types';
import {Button} from '../button/Button';
import {MediumText} from '../medium-text/MediumText';

export class Header extends React.Component {

  static propTypes = {
    className: string
  };

  render() {
    const {className} = this.props;
    return (
      <div className={classNames('header', className)}>
        <div className="header__title-with-logo">
          <div className="header__logo-image">
          </div>
          <MediumText className="header__title">
            Furnas
          </MediumText>
        </div>
        <div>
          <Button>
            Связаться
          </Button>
        </div>
      </div>
    );
  }

}
