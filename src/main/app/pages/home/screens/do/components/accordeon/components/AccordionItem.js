import React from 'react';
import './accordion-item.scss'
import {bool, func, object} from 'prop-types';
import {SectionTitle} from '../../../../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../../../../components/block-text/BlockText';
import {Picture} from '../../../../../../../components/picture/Picture';
import classNames from 'classnames';

export class AccordionItem extends React.Component {

  static propTypes = {
    item: object,
    selected: bool,
    onClick: func
  };

  handleClick = () => {
    const {onClick, item} = this.props;
    onClick(item);
  };

  render() {
    const {item, selected} = this.props;
    return (
      <div className="accordion-item">
        <div className="accordion-item__title-container"
             onClick={this.handleClick}>
          <Picture className="accordion-item__arrow"
                   imgClassName={classNames('accordion-item__arrow-img', selected ? 'accordion-item__arrow-img-selected': null)}
                   forPhoneOnly={[require('./images/accordion-arrow.svg')]}
                   forTabletPortraitUp={[require('./images/accordion-arrow.svg')]}
                   alt="Стрелка"/>
          <SectionTitle>{item.title}</SectionTitle>
        </div>
        {selected &&
        <Picture className="accordion-item__image"
                 imgClassName="accordion-item__image-img"
                 forPhoneOnly={item.img}
                 forTabletPortraitUp={item.img}
                 alt="Стрелка"/>}
        {selected &&
        <BlockText className="accordion-item__text">{item.text}</BlockText>}
      </div>
    );
  }

}
