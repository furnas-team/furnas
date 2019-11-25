import React from 'react';
import './do-screen.scss';
import {string} from 'prop-types';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Picture} from '../../../../components/picture/Picture';
import {Accordion} from './components/accordeon/Accordion';


const ACCORDION_ITEMS = [
  {title: 'Сайты', text: 'Делаем сайты любой сложности: начиная от элементарных лендингов на тильде, заканчиваю сложными корпоративными порталами', img: [require('./images/site.svg')]},
  {title: 'Дизайн', text: 'Делаем дизайн для всего чего возможно: сайтов, мобильных приложений, рекламных баннеров и даже открыток', img: [require('./images/design.svg')]},
  {title: 'Разработка', text: 'Поможем с разработкой всего на свете: решим сложную алгоритмическую задачу, поможем с интеграцией чего угодно и куда угодно.', img: [require('./images/development.svg')]},
  {title: 'Startup', text: 'Если у вас есть крутая идея - поможем проверить ее и запуститься максимально быстро', img: [require('./images/mvp.svg')]},
];

export class DoScreen extends React.Component {

  static propTypes = {
    id: string
  };

  state = {
    selectedItem: ACCORDION_ITEMS[0]
  };

  handleSelectedItemChanged = (item) => {
    this.setState({selectedItem: item});
  };

  render() {
    const {selectedItem} = this.state;
    const {id} = this.props;
    return (
      <div className="do-screen" id={id}>
        <div className="do-screen__text">
          <SectionTitle className="do-screen__title">
            Мы делаем
          </SectionTitle>
          <BlockText className="do-screen__subtitle">
            Почти все, что связано с дизайном и разработкой бизнес приложений.
          </BlockText>
          <Accordion className="do-screen__accordion"
                     items={ACCORDION_ITEMS}
                     onSelectedItemChange={this.handleSelectedItemChanged}
                     selectedItem={selectedItem}/>
        </div>
        <Picture className="do-screen__image"
                 dataAos="fade-up"
                 dataAosDuration="1000"
                 imgClassName="do-screen__image-img"
                 forPhoneOnly={selectedItem.img}
                 forTabletPortraitUp={selectedItem.img}
                 alt="Фигура"/>
      </div>
    );
  }

}
