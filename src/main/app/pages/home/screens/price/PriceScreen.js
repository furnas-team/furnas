import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './price-screen.scss';
import {Picture} from '../../../../components/picture/Picture';

export class PriceScreen extends React.Component {

  render() {
    return (
      <div className="price-screen">
        <div className="price-screen__text">
          <SectionTitle className="price-screen__title">
            Работаем без офисов
            и&nbsp;менеджеров
          </SectionTitle>
          <Picture className="price-screen__image-mob"
                   imgClassName="price-screen__image-mob-img"
                   forPhoneOnly={[require('./images/laptop.svg')]}
                   forTabletPortraitUp={[require('./images/laptop.svg')]}
                   alt="Скрудж иллюстрация" />
          <BlockText className="price-screen__block-text">
            Мы не тратим деньги на аренду офиса, уборщиц, менеджеров. Не тратя деньги на дополнительные услуги, мы увеличиваем качество работы за те же деньги.
          </BlockText>
          <Picture className="price-screen__image-price"
                   imgClassName="price-screen__image-price-img"
                   forPhoneOnly={[require('./images/price.svg')]}
                   forTabletPortraitUp={[require('./images/price.svg')]}
                   alt="Цена иллюстрация" />
        </div>
        <Picture className="price-screen__image"
                 dataAos="fade-up"
                 dataAosDuration="2000"
                 imgClassName="price-screen__image-img"
                 forPhoneOnly={[require('./images/laptop.svg')]}
                 forTabletPortraitUp={[require('./images/laptop.svg')]}
                 alt="Скрудж иллюстрация" />
      </div>
    );
  }

}
