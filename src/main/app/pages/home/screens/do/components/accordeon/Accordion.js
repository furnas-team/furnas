import React from 'react';
import './accordion.scss';
import {array, object, func, string} from 'prop-types';
import map from 'lodash/map';
import {AccordionItem} from './components/AccordionItem';
import classNames from 'classnames';

export class Accordion extends React.Component {

  static propTypes = {
    items: array,
    selectedItem: object,
    onSelectedItemChange: func,
    className: string
  };

  handleClick = (item) => {
    const {onSelectedItemChange} = this.props;
    onSelectedItemChange(item);
  };

  render() {
    const {items, selectedItem, className} = this.props;
    return (
      <div className={classNames('accordion', className)}>
        {map(items, item => (
          <AccordionItem item={item}
                         key={item.title}
                         onClick={this.handleClick}
                         selected={item.title === selectedItem.title}/>
        ))}
      </div>
    );    
  }

}
