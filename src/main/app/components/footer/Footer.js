import React from 'react';
import './footer.scss';
import classNames from 'classnames';
import {bool, func, string} from 'prop-types';
import {Link} from '../link/Link';

export class Footer extends React.Component {

  static propTypes = {
    className: string,
  };

  render() {
    const {className} = this.props;
    return (
      <div className={classNames('footer', className)}>
        <div className="footer__container">
          <div className="footer__contacts-block">
            <div className="footer__title">
              Контакты
            </div>
            <div>
              <Link className="footer__link">
                +7(915) 682-19-55
              </Link>
            </div>
            <div>
              <Link className="footer__link">
                furnasteam@gmail.com
              </Link>
            </div>
          </div>
          <div className="footer__links-block">
            <div className="footer__title">
              Ссылки
            </div>
            <Link href="https://visa.furnas.ru/"
                  className="footer__link">
              visa.furnas.ru
            </Link>
          </div>
          <div className="footer__social-block">
            {/*<div className="footer__title">*/}
              {/*Social*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }

}
