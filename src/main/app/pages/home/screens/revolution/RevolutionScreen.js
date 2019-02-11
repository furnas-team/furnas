import React from 'react';
import './revolution-screen.scss';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import {Link} from '../../../../components/link/Link';

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
        </div>
        <div className="revolution-screen__image"></div>
      </div>
    );    
  }

}
