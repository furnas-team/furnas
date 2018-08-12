import React from 'react';
import './header.scss';
import classNames from 'classnames';
import {string, func} from 'prop-types';
import {Button} from '../button/Button';
import {MediumText} from '../medium-text/MediumText';

export class Header extends React.Component {

  static propTypes = {
    className: string,
    onContactClick: func
  };

  static defaultProps = {
    onContactClick(){
    }
  };

  render() {
    const {className, onContactClick} = this.props;
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
          <Button onClick={onContactClick}>
            Связаться
          </Button>
        </div>
      </div>
    );
  }

}
