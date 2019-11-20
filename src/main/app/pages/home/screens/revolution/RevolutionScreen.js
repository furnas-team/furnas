import React from 'react';
import './revolution-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Link} from '../../../../components/link/Link';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';

export class RevolutionScreen extends React.Component {

  render() {
    return (
      <div className="revolution-screen">
        <div className="revolution-screen__text">
          <SectionTitle className="revolution-screen__title">
            Наши проекты
          </SectionTitle>
          <Picture className="revolution-screen__image-mob"
                   imgClassName="revolution-screen__image-mob-img"
                   forPhoneOnly={[require('./images/revolution.svg')]}
                   forTabletPortraitUp={[require('./images/revolution.svg')]}
                   alt="Революция иллюстрация"/>
          <div className="revolution-screen__link-row">
            <Picture className="revolution-screen__icon"
                     imgClassName="revolution-screen__icon-img"
                     forPhoneOnly={[require('./images/visa.svg')]}
                     forTabletPortraitUp={[require('./images/visa.svg')]}
                     alt="Фигура"/>
            <UniversalLink noStyle={true} href="https://visa.furnas.ru/">
              <span className="revolution-screen__link">visa.furnas.ru</span>
            </UniversalLink>
          </div>
          <BlockText className="revolution-screen__block-text">
            Проект по заполнению анкеты для визы в Испанию и составлению списка документов.
          </BlockText>
          <div className="revolution-screen__link-row">
            <Picture className="revolution-screen__icon"
                     imgClassName="revolution-screen__icon-img"
                     forPhoneOnly={[require('./images/problems.svg')]}
                     forTabletPortraitUp={[require('./images/problems.svg')]}
                     alt="Фигура"/>
            <UniversalLink noStyle={true} href="https://www.instagram.com/problemy_belyh_lyudej/">
              <span className="revolution-screen__link">Проблемы белых людей</span>
            </UniversalLink>
          </div>
          <BlockText className="revolution-screen__block-text">
            Проект, в котором мы пишем как о классных UX и UI решениях, так и об ошибках.
          </BlockText>
        </div>
        <Picture className="revolution-screen__image"
                 imgClassName="revolution-screen__image-img"
                 forPhoneOnly={[require('./images/revolution.svg')]}
                 forTabletPortraitUp={[require('./images/revolution.svg')]}
                 alt="Революция иллюстрация"/>
      </div>
    );
  }

}

