import React from 'react';
import {array, func, object} from 'prop-types';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import classNames from 'classnames';
import './navigation.scss';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class Navigation extends React.Component {

  static propTypes = {
    items: array,
    active: object,
    onChange: func
  };

  state = {
    withText: true,
    mouse: false
  };


  hide = throttle(() => {
    const {mouse} = this.state;
    if (!mouse) {
      this.setState({withText: false});
    }
  }, 2000, {leading: false});

  componentDidMount() {
    this.hide();
  }

  handleMouseMove = () => {
    this.setState({withText: true, mouse: true});
  };

  handleMouseOut = () => {
    this.setState({mouse: false});
    this.hide();
  };

  render() {
    const {items, active, onChange} = this.props;
    const {withText} = this.state;
    return (
      <ul className={classNames('navigation', withText ? 'navigation_with-text' : '')}
          onMouseMove={this.handleMouseMove}
          onMouseOut={this.handleMouseOut}>
        {map(items, item => (
          <li className={classNames('navigation__item', item === active ? 'navigation__item-active' : '')}
              onClick={() => onChange(item)}>
            <UniversalLink noStyle={true} href={item.url} className="navigation__link">
              <div className="navigation__point"></div>
              <div className="navigation__text">{item.name}</div>
            </UniversalLink>
          </li>
        ))}
      </ul>
    );
  }

}
