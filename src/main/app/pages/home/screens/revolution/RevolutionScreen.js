import React from 'react';
import './revolution-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Link} from '../../../../components/link/Link';
import {Picture} from '../../../../components/picture/Picture';

export class RevolutionScreen extends React.Component {

  render() {
    return (
      <div className="revolution-screen">
        <div className="revolution-screen__text">
          <SectionTitle className="revolution-screen__title">
            А есть ещё проекты?
          </SectionTitle>
          <BlockText>
            Конечно! Переходите по ссылке <Link href="https://visa.furnas.ru/">visa.furnas.ru</Link>
          </BlockText>
          <BlockText>
            Проект по заполнению анкеты для визы в Испанию
          </BlockText>
          <BlockText>
            и составлению списка документов.
          </BlockText>
          <BlockText>
            Еще немного наших статей <Link href="/learn">тут</Link>
          </BlockText>
        </div>
        <Picture className="revolution-screen__image"
                 imgClassName="revolution-screen__image-img"
                 forPhoneOnly={[require('./images/revolution_mob.png'), require('./images/revolution_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/revolution_mob_2x.png'), require('./images/revolution_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/revolution.png'), require('./images/revolution.webp')]}
                 forTabletPortraitUpRetina={[require('./images/revolution_2x.png'), require('./images/revolution_2x.webp')]}
                 alt="Революция иллюстрация" />
      </div>
    );    
  }

}

