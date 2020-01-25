import React from 'react';
import {func, string} from 'prop-types';
import classNames from 'classnames';
import './sherlock-card.scss';
import {Picture} from '../../../../../../components/picture/Picture';
import {SectionTitle} from '../../../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../../../components/block-text/BlockText';
import {UniversalLink} from '../../../../../../components/universal-link/UniversalLink';


export class SherlockCard extends React.Component {

  static propTypes = {
    className: string,
    onImageClick: func
  };

  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState({expanded: true});
  };

  render() {
    const {className, onImageClick} = this.props;
    const {expanded} = this.state;
    return (
      <div className={classNames('sherlock-card', className)}>
        <Picture className="sherlock-card__image"
                 dataAos="fade-up"
                 dataAosDuration="3000"
                 onClick={onImageClick}
                 imgClassName="sherlock-card__image-img"
                 forPhoneOnly={[require('./images/sherlock_2x.png')]}
                 forTabletPortraitUp={[require('./images/sherlock_2x.png')]}
        />
        <div className="sherlock-card__info">
          <SectionTitle className="sherlock-card__name">Мы знаем, почему вы смотрите фотографии</SectionTitle>
          <BlockText className="sherlock-card__profession">
            Читать лица проще, чем тексты.
            <br/>
            Вам требуется около 0.1 секунды, чтобы <span className="sherlock-card__mark">оценить компетенции человека</span> по фотографии.
          </BlockText>
          <BlockText className="sherlock-card__profession">
            Эти <UniversalLink className="sherlock-card__link" noStyle={true} href="https://www.pnas.org/content/104/46/17948" target="_blank">данные</UniversalLink> были получены исследователями из
            Принстонского университета Чарльзом Бэлью и Александром Тодоровым.{!expanded && <span>.. <span className="sherlock-card__expand" onClick={this.handleExpandClick}>развернуть</span></span>}
          </BlockText>
          {expanded && <div>
            <BlockText className="sherlock-card__profession">
              Кажется нелепым, что мы оцениваем профессиональные компетенции человека по его фото, но с другой стороны тысячи лет истории человечества научили каждого из нас моментально считывать
              информацию с лиц других людей: <span className="sherlock-card__mark">кто друг, кто враг, опасен или нет.</span>
            </BlockText>
            <BlockText className="sherlock-card__profession">
              Лицо человека воспринимается гораздо быстрее, чем текст, ведь письменность появилась сравнительно совсем недавно около 6 тыс. лет до н.э.
            </BlockText>
            <BlockText className="sherlock-card__profession">
              Если захотите еще почитать о подобных фактах, обратите внимание на <UniversalLink className="sherlock-card__link" noStyle={true}
                                                                                                href="https://www.litres.ru/daniel-kaneman/dumay-medlenno-reshay-bystro/?utm_medium=cpc&utm_source=google&utm_campaign=smart_shopping%7C6451100394&utm_term=&utm_content=k50id%7Cpla-573894664472%7Ccid%7C6451100394%7Caid%7C378012483274%7Cgid%7C85593335428%7Cpos%7C%7Csrc%7Cu_%7Cdvc%7Cc%7Creg%7C9047067%7Crin%7C%7C&k50id=85593335428%7Cpla-573894664472&gclid=CjwKCAiA66_xBRBhEiwAhrMuLXravkYBzd909itTyOUUy9dHgBLe4-0Fo8Ew6lMOxg7uDBg4fm1NHhoCgCEQAvD_BwE"
                                                                                                target="_blank">книгу</UniversalLink> нобелевского лаурета Даниэля Канемана.
            </BlockText>
          </div>}
        </div>
      </div>
    );
  }

}
