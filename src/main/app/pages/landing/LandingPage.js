import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import './landing.scss';
import {UniversalLink} from '../../components/universal-link/UniversalLink';
import {Input} from '../../components/input/Input';

export class LandingPage extends React.Component {

  state = {
    sent: false,
    phone: '',
    email: '',
    skype: '',
    message: ''
  };

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value})
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  handleSkypeChange = (event) => {
    this.setState({skype: event.target.value})
  };

  handleMessageChange = (event) => {
    this.setState({message: event.target.value})
  };

  handleSendDataClick = () => {
    const {phone, email, skype, message, sent} = this.state;
    if (!sent) {
      window.fetch('https://api.furnas.ru/requests', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone, email, skype, message})
      });
      if (window.yaCounter) {
        window.yaCounter.reachGoal('AddedContact', {phone, email, skype, message});
      }
      window.mixpanel.track(
        "Furnas | added user contact",
        {phone, email, skype, message}
      );
      this.setState({sent: true});
    }
  };

  componentDidMount() {
    window.anima_isHidden = function (e) {
      if (!(e instanceof HTMLElement)) return !1;
      if (getComputedStyle(e).display == "none") return !0; else if (e.parentNode && anima_isHidden(e.parentNode)) return !0;
      return !1;
    };
    window.anima_loadAsyncSrcForTag = function (tag) {
      var elements = document.getElementsByTagName(tag);
      var toLoad = [];
      for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        var src = e.getAttribute("src");
        var loaded = (src != undefined && src.length > 0 && src != 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
        if (loaded) continue;
        var asyncSrc = e.getAttribute("anima-src");
        if (asyncSrc == undefined || asyncSrc.length == 0) continue;
        if (anima_isHidden(e)) continue;
        toLoad.push(e);
      }
      toLoad.sort(function (a, b) {
        return anima_getTop(a) - anima_getTop(b);
      });
      for (var i = 0; i < toLoad.length; i++) {
        var e = toLoad[i];
        var asyncSrc = e.getAttribute("anima-src");
        e.setAttribute("src", asyncSrc);
      }
    };
    window.anima_pauseHiddenVideos = function (tag) {
      var elements = document.getElementsByTagName("video");
      for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        var isPlaying = !!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2);
        var isHidden = anima_isHidden(e);
        if (!isPlaying && !isHidden && e.getAttribute("autoplay") == "autoplay") {
          e.play();
        } else if (isPlaying && isHidden) {
          e.pause();
        }
      }
    };
    window.anima_loadAsyncSrc = function (tag) {
      anima_loadAsyncSrcForTag("img");
      anima_loadAsyncSrcForTag("iframe");
      anima_loadAsyncSrcForTag("video");
      anima_pauseHiddenVideos();
    };
    var anima_getTop = function (e) {
      var top = 0;
      do {
        top += e.offsetTop || 0;
        e = e.offsetParent;
      } while (e);
      return top;
    };
    window.anima_loadAsyncSrc();
    window.anima_old_onResize = window.onresize;
    window.anima_new_onResize = undefined;
    window.anima_updateOnResize = function () {
      if (window.anima_new_onResize == undefined || window.onresize != window.anima_new_onResize) {
        window.anima_new_onResize = function (x) {
          if (window.anima_old_onResize != undefined) window.anima_old_onResize(x);
          anima_loadAsyncSrc();
        };
        window.onresize = window.anima_new_onResize;
        setTimeout(function () {
          anima_updateOnResize();
        }, 3000);
      }
    };
    window.anima_updateOnResize();
    setTimeout(function () {
      window.anima_loadAsyncSrc();
    }, 200);
  }

  render() {
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Furnas</title>
          <meta name="description" content=""/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div className="bp5-furnastablet">
          <img anima-src={require('./images/furnastablet-bitmap.png')} className="bp5-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp5-rectangle9" id="whatfurnastablet">
          </div>
          <img anima-src={require('./images/furnasdesktop-rectangle-9.png')} className="bp5-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp5-group13-layout-container">
            <img anima-src={require('./images/furnasdesktop-group-13.png')} className="bp5-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnastablet-bitmap-1.png')} className="bp5-bitmap1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp5-u041au0442u043eu043cu044b" id="whofurnastablet">
            Кто мы
          </div>
          <div className="bp5-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a">
            <span className="bp5-span1">Furnas </span><span className="bp5-span2">— это люди, которые раньше работали в одной компании, а потом разъехались по разным городам. <br/>Мы продолжаем дружить, ездить друг к другу в гости и круто проводить время. Теперь мы снова работаем вместе и занимаемся тем, что любим и умеем делать.</span>
          </div>
          <div className="bp5-u0421u0430u0439u0442u044b">
            Сайты
          </div>
          <div className="bp5-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            Какие сайты
          </div>
          <div className="bp5-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            Как работаем
          </div>
          <div className="bp5-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            Что используем
          </div>
          <div className="bp5-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Отрисовка под любые платформы
          </div>
          <div className="bp5-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp5-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
          </div>
          <div className="bp5-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен / ресторанов / отелей
          </div>
          <div className="bp5-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp5-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp5-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
          </div>
          <div className="bp5-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и анализ
            данных<br/>Консультация при найме сотрудников
          </div>
          <div className="bp5-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp5-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
          </div>
          <div className="bp5-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <img anima-src={require('./images/furnastablet-group.png')} className="bp5-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp5-u0427u0442u043eu043cu044bu0434u0435u043bu0430u0435u043c">
            Что мы делаем
          </div>
          <div className="bp5-u041du0430u0439u0434u0438u0441u0432u043eu0435u043eu0442u0440u0430u0436u0435u043du0438u0435">
            Найди <br/>свое отражение
          </div>
          <div className="bp5-u041cu043du0435u043du0438u044fu0442u0435u0445u043du043eu043bu043eu0433u0438u0438">
            Мнения, технологии, дизайн — все это неважно. <br/>Пойми себя, найди свое отражение.
          </div>
          <div className="bp5-furnas">
            Furnas
          </div>
          <UniversalLink noStyle={true} href="#whatfurnastablet">
            <div className="bp5-u0427u0442u043e">
              Что
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whofurnastablet">
            <div className="bp5-u041au0442u043e">
              Кто
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whyfurnastablet">
            <div className="bp5-u041fu043eu0447u0435u043cu0443">
              Почему
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#wherefurnastablet">
            <div className="bp5-u0413u0434u0435">
              Где
            </div>
          </UniversalLink>
          <div className="bp5-ru">
            RU
          </div>
          <div className="bp5-en">
            EN
          </div>
          <div className="bp5-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            С чем поможем
          </div>
          <div className="bp5-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            Что используем
          </div>
          <div className="bp5-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Иллюстрации
          </div>
          <div className="bp5-u0421u0442u0430u0440u0442u0430u043fu044b">
            Стартапы
          </div>
          <div className="bp5-rectangle" id="whyfurnastablet">
          </div>
          <div className="bp5-rectangle92">
          </div>
          <div className="bp5-u041au043eu043du0442u0430u043au0442u044b">
            Контакты
          </div>
          <div className="bp5-u0421u0441u044bu043bu043au0438">
            Ссылки
          </div>
          <div className="bp5-a79999999999">
            <UniversalLink href="tel:+7(915)682-19-55"
                           noStyle={true}
                           target="_blank">
              +7(915)682-19-55
            </UniversalLink>
          </div>
          <div className="bp5-mailmailmailcom">
            furnasteam@gmail.com
          </div>
          <div className="bp5-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438">
            <UniversalLink href="https://spark.ru/startup/furnas"
                           noStyle={true}
                           target="_blank">
              Наши статьи
            </UniversalLink>
          </div>
          <div className="bp5-u041du0430u0448u043fu0440u043eu0435u043au0442">
            <UniversalLink href="https://visa.furnas.ru/"
                           noStyle={true}
                           target="_blank">
              Наш проект
            </UniversalLink>
          </div>
          <div className="bp5-social">
            Social
          </div>
          <div className="bp5-rectangle12">
          </div>
          <UniversalLink href="https://vk.com/furnas"
                         noStyle={true}
                         target="_blank">
            <img anima-src={require('./images/furnasdesktop-shape-20@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <div className="bp5-rectangle121">
          </div>
          <UniversalLink href="https://www.facebook.com/furnasteam/"
                         noStyle={true}
                         target="_blank">
            <img anima-src={require('./images/furnasmobile-rectangle-12.png')} className="bp5-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <div className="bp5-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp5-group17-layout-container">
            <div className="bp5-group17">
              <div className="bp5-group14">
                <img anima-src={require('./images/furnastablet-group-12@2x.png')} className="bp5-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp5-u0422u0435u043bu0435u0444u043eu043d">
                  Телефон
                </div>
                <div className="bp5-email">
                  Email
                </div>
                <div className="bp5-skype">
                  Skype
                </div>
                <div className="bp5-u0421u043eu043eu0431u0449u0435u043du0438u0435">
                  Сообщение
                </div>
                <div className="bp5-u0421u0432u044fu0437u0430u0442u044cu0441u044f">
                  Связаться
                </div>
                <div className="bp5-group2">
                  <div className="bp5-rectangle17">
                  </div>
                  <div className="bp5-u041eu0442u043fu0440u0430u0432u0438u0442u044c">
                    Отправить
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp5-group16-layout-container">
            <div className="bp5-group16">
              <div className="bp5-u0413u0434u04351" id="wherefurnastablet">
                Где?
              </div>
              <div className="bp5-u043du0430u0448u0414u0438u0437u0430u0439u043d">
                НАШ ДИЗАЙН
              </div>
              <div className="bp5-u043du0430u0448u041au043eu0434">
                НАШ КОД
              </div>
              <div className="bp5-u043du0430u0448u0438u0421u0442u0430u0442u044cu0438">
                НАШИ СТАТЬИ
              </div>
              <div className="bp5-u0412u0438u0437u0430u0432u0418u0441u043fu0430u043du0438u044eu043du0430u0448">
                ВИЗА В ИСПАНИЮ <br/>(НАШ ПРОЕКТ)
              </div>
              <div className="bp5-dribbblecom">
                <UniversalLink href="https://dribbble.com/sanmary"
                               noStyle={true}
                               target="_blank">
                  DRIBBBLE.COM
                </UniversalLink>
              </div>
              <div className="bp5-githubcom">
                <UniversalLink href="https://github.com/furnasteam"
                               noStyle={true}
                               target="_blank">
                  GITHUB.COM
                </UniversalLink>
              </div>
              <div className="bp5-sparkru">
                <UniversalLink href="https://spark.ru/startup/furnas"
                               noStyle={true}
                               target="_blank">
                  SPARK.RU
                </UniversalLink>
              </div>
              <div className="bp5-visafurnasru">
                <UniversalLink href="https://visa.furnas.ru/"
                               noStyle={true}
                               target="_blank">
                  VISA.FURNAS.RU
                </UniversalLink>
              </div>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-u0442u0435u043bu0435u0444u043eu043d">
                ТЕЛЕФОН
              </div>
              <div className="bp5-a79156821955">
                <UniversalLink href="tel:+7(915)682-19-55"
                               noStyle={true}
                               target="_blank">
                  +7(915)682-19-55
                </UniversalLink>
              </div>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-email">
                EMAIL
              </div>
              <div className="bp5-furnasteamgmailcom">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastablet-oval-18-2@2x.png')} className="bp5-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp5-group19">
            <div className="bp5-u041bu0443u0447u0448u0435u0447u0435u043cu0441u0442u0443u0434u0438u044fu0432u0435">
              Лучше, чем студия веб-разработки
            </div>
            <div className="bp5-u0412u0431u043eu043bu044cu0448u0438u0445u043au043eu043cu043fu0430u043du0438u044fu0445">
              В больших компаниях большая часть денег идет на зарплату менеджеров, оплату аренды и прочие издержки. До конкретных исполнителей работы доходит совсем немного денег, поэтому там часто
              работают новички в профессии. У нас нет менеджеров и офиса - деньги от заказа идут тем, кто его делал.<br/>
            </div>
            <div className="bp5-u041fu043eu0447u0435u043cu0443u041cu044b">
              Почему <br/>Мы?
            </div>
            <img anima-src={require('./images/furnastablet-group-10.svg')} className="bp5-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp5-group18">
            <div className="bp5-u0418u043du043eu0433u0434u0430u0443u0432u0430u0441u043fu043eu044fu0432u043bu044fu0435">
              Иногда у вас появляется чуть больше работы и если возможность - вы нанимаете сотрудника. Через какое-то время ему нечего делать и он становится недоволен своей работой, а вы его
              отношением.<br/>Лучше сначала поработать с нами. Мы сделаем то, что вам нужно прямо сейчас, а если потребность будет постоянной - тогда стоит задумать о найме человека в штат.
            </div>
            <div className="bp5-u041bu0443u0447u0448u0435u0447u0435u043cu0448u0442u0430u0442u043du044bu0439u0441">
              Лучше, чем штатный сотрудник
            </div>
            <div className="bp5-u0423u043du0430u0441u0431u043eu043bu044cu0448u043eu0439u043eu043fu044bu0442u0440">
              У нас большой опыт работы в крупных компаниях, где стандарты качества в разы выше, чем на фриланс рынке, знаем методологии, которые используются при разработке, работаем по договору.
            </div>
            <div className="bp5-u041bu0443u0447u0448u0435u0447u0435u043cu0444u0440u0438u043bu0430u043du0441u0435u0440">
              Лучше, чем фрилансеры
            </div>
            <img anima-src={require('./images/furnasmobilehorizont-group-8.svg')} className="bp5-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnastablet-group-11.svg')} className="bp5-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp5-group15-layout-container">
            <div className="bp5-group15">
              <div className="bp5-u041au043eu043cu0430u043du0434u0430">
                Команда
              </div>
              <div className="bp5-u0421u0435u0440u0433u0435u0439">
                Сергей
              </div>
              <div className="bp5-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                Санкт-Петербург
              </div>
              <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                Работал в IIG, Ingate, Grabr
              </div>
              <img anima-src={require('./images/furnastablet-group-4@2x.png')} className="bp5-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-5@2x.png')} className="bp5-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                Разработчик
              </div>
              <div className="bp5-group20">
                <div className="bp5-uiuxu0434u0438u0437u0430u0439u043du0435u0440">
                  UI/UX дизайнер
                </div>
                <div className="bp5-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u04331">
                  Санкт-Петербург
                </div>
                <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rembot
                </div>
                <div className="bp5-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <img anima-src={require('./images/furnasdesktop-suitcase.svg')} className="bp5-suitcase3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-placeholder-2.svg')} className="bp5-placeholder23"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-suitcase">
                <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-placeholder2">
                <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp5-shape3"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp5-shape11"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-u0421u0435u0440u0433u0435u04391">
                Сергей
              </div>
              <img anima-src={require('./images/furnasmobile-group-7@2x.png')} className="bp5-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-u0422u0443u043bu0430">
                Тула
              </div>
              <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0432iigdevex">
                Работал в IIG, DevExpress, GMCS
              </div>
              <div className="bp5-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a1">
                Разработчик
              </div>
              <div className="bp5-suitcase1">
                <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-placeholder21">
                <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp5-shape3"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp5-shape11"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <img anima-src={require('./images/furnasdesctophd-group-7@2x.png')} className="bp5-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-group21">
                <div className="bp5-u0415u043bu0435u043du0430">
                  Елена
                </div>
                <div className="bp5-u041cu043eu0441u043au0432u0430">
                  Москва
                </div>
                <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rambler
                </div>
                <div className="bp5-u0410u043du0430u043bu0438u0442u0438u043a">
                  Аналитик
                </div>
                <div className="bp5-suitcase3">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder23">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp5-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp5-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp5-u042eu0440u0438u0439">
                Юрий
              </div>
              <img anima-src={require('./images/furnasmobilehorizont-group-6@2x.png')} className="bp5-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a2">
                Разработчик
              </div>
              <div className="bp5-u0422u0443u043bu04301">
                Тула
              </div>
              <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0432iigingat1">
                Работал в IIG, Ingate
              </div>
              <div className="bp5-suitcase2">
                <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-placeholder22">
                <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp5-shape3"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp5-shape11"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <img anima-src={require('./images/furnasmobile-group-6-1@2x.png')} className="bp5-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-group22">
                <div className="bp5-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <div className="bp5-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp5-u041au0430u043bu0438u043du0438u043du0433u0430u0434">
                  Калинингад
                </div>
                <div className="bp5-u0420u0430u0431u043eu0442u0430u043bu0430u0432iiginga">
                  Работала в IIG, Ingate
                </div>
                <div className="bp5-suitcase3">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder23">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp5-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp5-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <UniversalLink href="https://www.instagram.com/furnasteam/"
                         noStyle={true}
                         target="_blank">
            <div className="bp5-rectangle1">
            </div>
            <img anima-src={require('./images/furnasmobile-combined-shape@2x.png')} className="bp5-combinedshape"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://www.facebook.com/furnasteam/"
                         noStyle={true}
                         target="_blank">
            <img anima-src={require('./images/furnasmobile-shape-1@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://medium.com/@furnasteam/"
                         noStyle={true}
                         target="_blank">
            <div className="bp5-rectangle123">
            </div>
            <img anima-src={require('./images/furnasdesktop-m@2x.png')} className="bp5-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://spark.ru/startup/furnas"
                         noStyle={true}
                         target="_blank">
            <div className="bp5-rectangle124">
            </div>
            <img anima-src={require('./images/furnasdesktop-s@2x.png')} className="bp5-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
        </div>
        <div className="bp2-furnasdesktop">
          <img anima-src={require('./images/furnasdesktop-bitmap.png')} className="bp2-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-u041du0430u0439u0434u0438u0441u0432u043eu0435u043eu0442u0440u0430u0436u0435u043du0438u0435">
            Найди <br/>свое отражение
          </div>
          <div className="bp2-u041cu043du0435u043du0438u044fu0442u0435u0445u043du043eu043bu043eu0433u0438u0438">
            Мнения, технологии, дизайн — все это неважно. <br/>Пойми себя, найди свое отражение.
          </div>
          <div className="bp2-furnas">
            Furnas
          </div>
          <UniversalLink noStyle={true} href="#whatfurnasdesktop">
            <div className="bp2-u0427u0442u043e">
              Что
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whofurnasdesktop">
            <div className="bp2-u041au0442u043e">
              Кто
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whyfurnasdesktop">
            <div className="bp2-u041fu043eu0447u0435u043cu0443">
              Почему
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#wherefurnasdesktop">
            <div className="bp2-u0413u0434u0435">
              Где
            </div>
          </UniversalLink>
          <div className="bp2-ru">
            RU
          </div>
          <div className="bp2-en">
            EN
          </div>
          <div className="bp2-rectangle9" id="whatfurnasdesktop">
          </div>
          <div className="bp2-u0427u0442u043eu043cu044bu0434u0435u043bu0430u0435u043c">
            Что мы делаем
          </div>
          <img anima-src={require('./images/furnasdesktop-rectangle-9.png')} className="bp2-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-group13-layout-container">
            <img anima-src={require('./images/furnasdesktop-group-13.png')} className="bp2-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-u0421u0430u0439u0442u044b">
            Сайты
          </div>
          <div className="bp2-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            Какие сайты
          </div>
          <div className="bp2-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            Как работаем
          </div>
          <div className="bp2-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            С чем поможем
          </div>
          <div className="bp2-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            Что используем
          </div>
          <div className="bp2-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            Что используем
          </div>
          <div className="bp2-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Отрисовка под любые платформы
          </div>
          <div className="bp2-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp2-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
          </div>
          <div className="bp2-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен / ресторанов / отелей
          </div>
          <div className="bp2-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp2-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp2-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
          </div>
          <div className="bp2-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и анализ
            данных<br/>Консультация при найме сотрудников
          </div>
          <div className="bp2-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp2-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
          </div>
          <div className="bp2-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Иллюстрации
          </div>
          <div className="bp2-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <img anima-src={require('./images/furnasdesctophd-group.png')} className="bp2-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-u0421u0442u0430u0440u0442u0430u043fu044b">
            Стартапы
          </div>
          <img anima-src={require('./images/furnasdesktop-bitmap-1.png')}
               className="bp2-bitmap1"
               id="whofurnasdesktop"
               src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-group15-layout-container">
            <div className="bp2-group15">
              <div className="bp2-u041au043eu043cu0430u043du0434u0430">
                Команда
              </div>
              <img anima-src={require('./images/furnastablet-group-4@2x.png')} className="bp2-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizont-group-6@2x.png')} className="bp2-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophd-group-7@2x.png')} className="bp2-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-5@2x.png')} className="bp2-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-group20">
                <div className="bp2-uiuxu0434u0438u0437u0430u0439u043du0435u0440">
                  UI/UX дизайнер
                </div>
                <div className="bp2-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rembot
                </div>
                <div className="bp2-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <img anima-src={require('./images/furnasdesktop-suitcase.svg')} className="bp2-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-placeholder-2.svg')} className="bp2-placeholder2"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp2-group21">
                <div className="bp2-u042eu0440u0438u0439">
                  Юрий
                </div>
                <div className="bp2-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp2-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp2-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp2-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group24">
                <div className="bp2-u0415u043bu0435u043du0430">
                  Елена
                </div>
                <div className="bp2-u041cu043eu0441u043au0432u0430">
                  Москва
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rambler
                </div>
                <div className="bp2-u0410u043du0430u043bu0438u0442u0438u043a">
                  Аналитик
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp2-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp2-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <img anima-src={require('./images/furnasmobile-group-6-1@2x.png')} className="bp2-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-7@2x.png')} className="bp2-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-group23">
                <div className="bp2-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <div className="bp2-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp2-u041au0430u043bu0438u043du0438u043du0433u0430u0434">
                  Калинингад
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0430u0432iiginga">
                  Работала в IIG, Ingate
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp2-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp2-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group22">
                <div className="bp2-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp2-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0432iigdevex">
                  Работал в IIG, DevExpress, GMCS
                </div>
                <div className="bp2-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp2-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp2-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group25">
                <div className="bp2-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp2-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp2-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate, Grabr
                </div>
                <div className="bp2-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp2-shape3"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp2-shape11"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp2-u041au0442u043eu043cu044b">
            Кто мы
          </div>
          <div className="bp2-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a">
            <span className="bp2-span1">Furnas </span><span className="bp2-span2">— это люди, которые раньше работали в одной компании, а потом разъехались по разным городам. <br/>Мы продолжаем дружить, ездить друг к другу в гости и круто проводить время. Теперь мы снова работаем вместе и занимаемся тем, что любим и умеем делать.</span>
          </div>
          <div className="bp2-rectangle" id="whyfurnasdesktop">
          </div>
          <div className="bp2-rectangle92">
          </div>
          <div className="bp2-u041au043eu043du0442u0430u043au0442u044b">
            Контакты
          </div>
          <div className="bp2-u0421u0441u044bu043bu043au0438">
            Ссылки
          </div>
          <div className="bp2-a79999999999">
            <UniversalLink href="tel:+7(915)682-19-55"
                           noStyle={true}
                           target="_blank">
              +7(915)682-19-55
            </UniversalLink>
          </div>
          <div className="bp2-mailmailmailcom">
            furnasteam@gmail.com
          </div>
          <div className="bp2-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438">
            <UniversalLink href="https://spark.ru/startup/furnas"
                           noStyle={true}
                           target="_blank">
              Наши статьи
            </UniversalLink>
          </div>
          <div className="bp2-u041du0430u0448u043fu0440u043eu0435u043au0442">
            <UniversalLink href="https://visa.furnas.ru/"
                           noStyle={true}
                           target="_blank">
              Наш проект
            </UniversalLink>
          </div>
          <div className="bp2-social">
            Social
          </div>
          <div className="bp2-rectangle12">
          </div>
          <UniversalLink href="https://vk.com/furnas"
                         noStyle={true}
                         target="_blank">
            <img anima-src={require('./images/furnasdesktop-shape-20@2x.png')} className="bp2-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://www.instagram.com/furnasteam/"
                         noStyle={true}
                         target="_blank">
            <div className="bp2-rectangle121">
            </div>
            <img anima-src={require('./images/furnasmobile-combined-shape@2x.png')} className="bp2-combinedshape"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://www.facebook.com/furnasteam/"
                         noStyle={true}
                         target="_blank">
            <img anima-src={require('./images/furnasmobile-rectangle-12.png')} className="bp2-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasmobile-shape-1@2x.png')} className="bp2-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <UniversalLink href="https://medium.com/@furnasteam/"
                         noStyle={true}
                         target="_blank">
            <div className="bp2-rectangle123">
            </div>
            <img anima-src={require('./images/furnasdesktop-m@2x.png')} className="bp2-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
          <div className="bp2-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp2-group19-layout-container">
            <div className="bp2-group19">
              <div className="bp2-group14">
                <img anima-src={require('./images/furnasdesktop-group-12@2x.png')} className="bp2-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp2-u0422u0435u043bu0435u0444u043eu043d">
                  Телефон
                </div>
                <div className="bp2-email">
                  Email
                </div>
                <div className="bp2-skype">
                  Skype
                </div>
                <div className="bp2-u0421u043eu043eu0431u0449u0435u043du0438u0435">
                  Сообщение
                </div>
                <div className="bp2-u0421u0432u044fu0437u0430u0442u044cu0441u044f">
                  Связаться
                </div>
                <div className="bp2-group2">
                  <div className="bp2-rectangle17">
                  </div>
                  <div className="bp2-u041eu0442u043fu0440u0430u0432u0438u0442u044c">
                    Отправить
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp2-group18-layout-container">
            <div className="bp2-group18">
              <div className="bp2-u0413u0434u04351" id="wherefurnasdesktop">
                Где?
              </div>
              <div className="bp2-u043du0430u0448u0414u0438u0437u0430u0439u043d">
                НАШ ДИЗАЙН
              </div>
              <div className="bp2-u043du0430u0448u041au043eu0434">
                НАШ КОД
              </div>
              <div className="bp2-u043du0430u0448u0438u0421u0442u0430u0442u044cu0438">
                НАШИ СТАТЬИ
              </div>
              <div className="bp2-u0412u0438u0437u0430u0432u0418u0441u043fu0430u043du0438u044eu043du0430u0448">
                ВИЗА В ИСПАНИЮ <br/>(НАШ ПРОЕКТ)
              </div>
              <div className="bp2-dribbblecom">
                <UniversalLink href="https://dribbble.com/sanmary"
                               noStyle={true}
                               target="_blank">
                  DRIBBBLE.COM
                </UniversalLink>
              </div>
              <div className="bp2-githubcom">
                <UniversalLink href="https://github.com/furnasteam"
                               noStyle={true}
                               target="_blank">
                  GITHUB.COM
                </UniversalLink>
              </div>
              <div className="bp2-sparkru">
                <UniversalLink href="https://spark.ru/startup/furnas"
                               noStyle={true}
                               target="_blank">
                  SPARK.RU
                </UniversalLink>
              </div>
              <div className="bp2-visafurnasru">
                <UniversalLink href="https://visa.furnas.ru/"
                               noStyle={true}
                               target="_blank">
                  VISA.FURNAS.RU
                </UniversalLink>
              </div>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-u0442u0435u043bu0435u0444u043eu043d">
                ТЕЛЕФОН
              </div>
              <div className="bp2-a79156821955">
                <UniversalLink href="tel:+7(915)682-19-55"
                               noStyle={true}
                               target="_blank">
                  +7(915)682-19-55
                </UniversalLink>
              </div>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-email">
                EMAIL
              </div>
              <div className="bp2-furnasteamgmailcom">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp2-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp2-group17">
            <div className="bp2-u041bu0443u0447u0448u0435u0447u0435u043cu0441u0442u0443u0434u0438u044fu0432u0435">
              Лучше, чем студия веб-разработки
            </div>
            <div className="bp2-u0412u0431u043eu043bu044cu0448u0438u0445u043au043eu043cu043fu0430u043du0438u044fu0445">
              В больших компаниях большая часть денег идет на зарплату менеджеров, оплату аренды и прочие издержки. До конкретных исполнителей работы доходит совсем немного денег, поэтому там часто
              работают новички в профессии. У нас нет менеджеров и офиса - деньги от заказа идут тем, кто его делал.<br/>
            </div>
            <div className="bp2-u041fu043eu0447u0435u043cu0443u041cu044b">
              Почему <br/>Мы?
            </div>
            <img anima-src={require('./images/furnasdesktop-group-10.svg')} className="bp2-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-group16">
            <div className="bp2-u0418u043du043eu0433u0434u0430u0443u0432u0430u0441u043fu043eu044fu0432u043bu044fu0435">
              Иногда у вас появляется чуть больше работы и если возможность - вы нанимаете сотрудника. Через какое-то время ему нечего делать и он становится недоволен своей работой, а вы его
              отношением.<br/>Лучше сначала поработать с нами. Мы сделаем то, что вам нужно прямо сейчас, а если потребность будет постоянной - тогда стоит задумать о найме человека в штат.
            </div>
            <div className="bp2-u041bu0443u0447u0448u0435u0447u0435u043cu0448u0442u0430u0442u043du044bu0439u0441">
              Лучше, чем штатный сотрудник
            </div>
            <div className="bp2-u0423u043du0430u0441u0431u043eu043bu044cu0448u043eu0439u043eu043fu044bu0442u0440">
              У нас большой опыт работы в крупных компаниях, где стандарты качества в разы выше, чем на фриланс рынке, знаем методологии, которые используются при разработке, работаем по договору.
            </div>
            <div className="bp2-u041bu0443u0447u0448u0435u0447u0435u043cu0444u0440u0438u043bu0430u043du0441u0435u0440">
              Лучше, чем фрилансеры
            </div>
            <img anima-src={require('./images/furnasdesktop-group-8.svg')} className="bp2-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesktop-group-11.svg')} className="bp2-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-rectangle1">
          </div>
          <UniversalLink href="https://spark.ru/startup/furnas"
                         noStyle={true}
                         target="_blank">
            <div className="bp2-rectangle124">
            </div>
            <img anima-src={require('./images/furnasdesktop-s@2x.png')} className="bp2-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </UniversalLink>
        </div>
        <div className="bp4-furnasmobile">
          <div className="bp4-group25-layout-container">
            <div className="bp4-group25">
              <div className="bp4-rectangle2">
              </div>
              <img anima-src={require('./images/furnasmobile-bitmap.png')} className="bp4-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp4-u041du0430u0439u0434u0438u0441u0432u043eu0435u043eu0442u0440u0430u0436u0435u043du0438u0435">
            Найди <br/>свое отражение
          </div>
          <div className="bp4-u041cu043du0435u043du0438u044fu0442u0435u0445u043du043eu043bu043eu0433u0438u0438">
            <span className="bp4-span1">Мнения, технологии, дизайн — <br/></span><span className="bp4-span2">все это неважно.</span>
          </div>
          <div className="bp4-u041fu043eu0439u043cu0438u0441u0435u0431u044fu043du0430u0439u0434u0438u0441u0432">
            Пойми себя, найди свое отражение.
          </div>
          <div className="bp4-furnas">
            Furnas
          </div>
          <div className="bp4-rectangle9">
          </div>
          <img anima-src={require('./images/furnasmobile-rectangle-9.png')} className="bp4-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-group13-layout-container">
            <img anima-src={require('./images/furnasmobile-group-13.png')} className="bp4-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp4-u041au0442u043eu043cu044b-layout-container">
            <div className="bp4-u041au0442u043eu043cu044b">
              Кто мы
            </div>
          </div>
          <div className="bp4-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a-layout-container">
            <div className="bp4-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a">
              <span className="bp4-span1">Furnas </span><span className="bp4-span2">— это люди, которые раньше работали в одной компании, а потом разъехались по разным городам. <br/>Мы продолжаем дружить, ездить друг к другу в гости и круто проводить время. Теперь мы снова работаем вместе и занимаемся тем, что любим и умеем делать.</span>
            </div>
          </div>
          <img anima-src={require('./images/furnasmobile-group.png')} className="bp4-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-u0421u0430u0439u0442u044b">
            Сайты
          </div>
          <div className="bp4-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            Какие сайты
          </div>
          <div className="bp4-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            Как работаем
          </div>
          <div className="bp4-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            Что используем
          </div>
          <div className="bp4-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
          </div>
          <div className="bp4-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен/ресторанов/отелей
          </div>
          <div className="bp4-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp4-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и анализ
            данных<br/>Консультация при найме сотрудников
          </div>
          <div className="bp4-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp4-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Отрисовка под любые платформы
          </div>
          <div className="bp4-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp4-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp4-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
          </div>
          <div className="bp4-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
          </div>
          <div className="bp4-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Иллюстрации
          </div>
          <div className="bp4-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <div className="bp4-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            С чем поможем
          </div>
          <div className="bp4-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            Что используем
          </div>
          <div className="bp4-u0427u0442u043eu043cu044bu0434u0435u043bu0430u0435u043c">
            Что мы делаем
          </div>
          <div className="bp4-u0421u0442u0430u0440u0442u0430u043fu044b">
            Стартапы
          </div>
          <div className="bp4-treemanonly-layout-container">
            <img anima-src={require('./images/furnasmobile-treemanonly.png')} className="bp4-treemanonly" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp4-rectangle">
          </div>
          <div className="bp4-u0413u0434u0435-layout-container">
            <div className="bp4-u0413u0434u0435">
              Где?
            </div>
          </div>
          <div className="bp4-u041fu043eu0447u0435u043cu0443u041cu044b-layout-container">
            <div className="bp4-u041fu043eu0447u0435u043cu0443u041cu044b">
              Почему <br/>Мы?
            </div>
          </div>
          <div className="bp4-group20-layout-container">
            <div className="bp4-group20">
              <div className="bp4-u0423u043du0430u0441u0431u043eu043bu044cu0448u043eu0439u043eu043fu044bu0442u0440">
                У нас большой опыт работы в крупных компаниях, где стандарты качества в разы выше, чем на фриланс рынке, знаем методологии, которые используются при разработке, работаем по договору.
              </div>
              <div className="bp4-u041bu0443u0447u0448u0435u0447u0435u043cu0444u0440u0438u043bu0430u043du0441u0435u0440">
                Лучше, чем фрилансеры
              </div>
              <img anima-src={require('./images/furnasmobilehorizont-group-8.svg')} className="bp4-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp4-group21-layout-container">
            <div className="bp4-group21">
              <div className="bp4-u0418u043du043eu0433u0434u0430u0443u0432u0430u0441u043fu043eu044fu0432u043bu044fu0435">
                Иногда у вас появляется чуть больше работы и если возможность - вы нанимаете сотрудника. Через какое-то время ему нечего делать и он становится недоволен своей работой, а вы его
                отношением.<br/>Лучше сначала поработать с нами. Мы сделаем то, что вам нужно прямо сейчас, а если потребность будет постоянной - тогда стоит задумать о найме человека в штат.
              </div>
              <div className="bp4-u041bu0443u0447u0448u0435u0447u0435u043cu0448u0442u0430u0442u043du044bu0439u0441">
                Лучше, чем штатный сотрудник
              </div>
              <img anima-src={require('./images/furnastablet-group-11.svg')} className="bp4-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp4-rectangle1">
          </div>
          <div className="bp4-group22-layout-container">
            <div className="bp4-group22">
              <div className="bp4-u041bu0443u0447u0448u0435u0447u0435u043cu0441u0442u0443u0434u0438u044fu0432u0435">
                Лучше, чем студия веб-разработки
              </div>
              <div className="bp4-u0412u0431u043eu043bu044cu0448u0438u0445u043au043eu043cu043fu0430u043du0438u044fu0445">
                В больших компаниях большая часть денег идет на зарплату менеджеров, оплату аренды и прочие издержки. До конкретных исполнителей работы доходит совсем немного денег, поэтому там часто
                работают новички в профессии. У нас нет менеджеров и офиса - деньги от заказа идут тем, кто его делал.<br/>
              </div>
              <img anima-src={require('./images/furnastablet-group-10.svg')} className="bp4-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp4-group28-layout-container">
            <div className="bp4-group28">
              <div className="bp4-group26">
                <img anima-src={require('./images/furnasmobile-group-12.png')} className="bp4-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp4-u0422u0435u043bu0435u0444u043eu043d">
                  Телефон
                </div>
                <div className="bp4-u0421u043eu043eu0431u0449u0435u043du0438u0435">
                  Сообщение
                </div>
                <div className="bp4-u0421u0432u044fu0437u0430u0442u044cu0441u044f">
                  Связаться
                </div>
                <div className="bp4-email">
                  Email
                </div>
                <div className="bp4-skype">
                  Skype
                </div>
              </div>
              <div className="bp4-group2">
                <div className="bp4-rectangle17">
                </div>
                <div className="bp4-u041eu0442u043fu0440u0430u0432u0438u0442u044c">
                  Отправить
                </div>
              </div>
            </div>
          </div>
          <div className="bp4-rectangle92">
          </div>
          <div className="bp4-u0421u0441u044bu043bu043au0438-layout-container">
            <div className="bp4-u0421u0441u044bu043bu043au0438">
              Ссылки
            </div>
          </div>
          <div className="bp4-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438-layout-container">
            <div className="bp4-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438">
              <UniversalLink href="https://spark.ru/startup/furnas"
                             noStyle={true}
                             target="_blank">
                Наши статьи
              </UniversalLink>
            </div>
          </div>
          <div className="bp4-u041du0430u0448u043fu0440u043eu0435u043au0442-layout-container">
            <div className="bp4-u041du0430u0448u043fu0440u043eu0435u043au0442">
              <UniversalLink href="https://visa.furnas.ru/"
                             noStyle={true}
                             target="_blank">
                Наш проект
              </UniversalLink>
            </div>
          </div>
          <div className="bp4-group24-layout-container">
            <div className="bp4-group24">
              <div className="bp4-social">
                Social
              </div>
              <div className="bp4-rectangle12">
              </div>
              <UniversalLink href="https://vk.com/furnas"
                             noStyle={true}
                             target="_blank">
                <img anima-src={require('./images/furnasdesktop-shape-20@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </UniversalLink>
              <UniversalLink href="https://www.instagram.com/furnasteam/"
                             noStyle={true}
                             target="_blank">
                <div className="bp4-rectangle121">
                </div>
                <img anima-src={require('./images/furnasmobile-combined-shape@2x.png')} className="bp4-combinedshape"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </UniversalLink>
              <UniversalLink href="https://www.facebook.com/furnasteam/"
                             noStyle={true}
                             target="_blank">
                <img anima-src={require('./images/furnasmobile-rectangle-12.png')} className="bp4-rectangle122"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobile-shape-1@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </UniversalLink>
              <UniversalLink href="https://medium.com/@furnasteam/"
                             noStyle={true}
                             target="_blank">
                <div className="bp4-rectangle123">
                </div>
                <img anima-src={require('./images/furnasdesktop-m@2x.png')} className="bp4-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </UniversalLink>
              <UniversalLink href="https://spark.ru/startup/furnas"
                             noStyle={true}
                             target="_blank">
                <div className="bp4-rectangle124">
                </div>
                <img anima-src={require('./images/furnasdesktop-s@2x.png')} className="bp4-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </UniversalLink>
            </div>
          </div>
          <div className="bp4-a79999999999-layout-container">
            <div className="bp4-a79999999999">
              <UniversalLink href="tel:+7(915)682-19-55"
                             noStyle={true}
                             target="_blank">
                +7(915)682-19-55
              </UniversalLink>
            </div>
          </div>
          <div className="bp4-mailmailmailcom-layout-container">
            <div className="bp4-mailmailmailcom">
              furnasteam@gmail.com
            </div>
          </div>
          <div className="bp4-a2019251furnas-layout-container">
            <div className="bp4-a2019251furnas">
              2019 © FURNAS
            </div>
          </div>
          <div className="bp4-stackedgroup-layout-container">
            <div className="bp4-stackedgroup">
              <div className="bp4-u041au043eu043du0442u0430u043au0442u044b">
                Контакты
              </div>
            </div>
          </div>
          <div className="bp4-group23-layout-container">
            <div className="bp4-group23">
              <div className="bp4-u043du0430u0448u0414u0438u0437u0430u0439u043d">
                НАШ ДИЗАЙН
              </div>
              <div className="bp4-u043du0430u0448u041au043eu0434">
                НАШ КОД
              </div>
              <div className="bp4-u043du0430u0448u0438u0421u0442u0430u0442u044cu0438">
                НАШИ СТАТЬИ
              </div>
              <div className="bp4-u0412u0438u0437u0430u0432u0418u0441u043fu0430u043du0438u044eu043du0430u0448">
                ВИЗА В ИСПАНИЮ <br/>(НАШ ПРОЕКТ)
              </div>
              <div className="bp4-dribbblecom">
                <UniversalLink href="https://dribbble.com/sanmary"
                               noStyle={true}
                               target="_blank">
                  DRIBBBLE.COM
                </UniversalLink>
              </div>
              <div className="bp4-githubcom">
                <UniversalLink href="https://github.com/furnasteam"
                               noStyle={true}
                               target="_blank">
                  GITHUB.COM
                </UniversalLink>
              </div>
              <div className="bp4-sparkru">
                <UniversalLink href="https://spark.ru/startup/furnas"
                               noStyle={true}
                               target="_blank">
                  SPARK.RU
                </UniversalLink>
              </div>
              <div className="bp4-visafurnasru">
                <UniversalLink href="https://visa.furnas.ru/"
                               noStyle={true}
                               target="_blank">
                  VISA.FURNAS.RU
                </UniversalLink>
              </div>
              <div className="bp4-u0442u0435u043bu0435u0444u043eu043d">
                ТЕЛЕФОН
              </div>
              <div className="bp4-a79156821955">
                <UniversalLink href="tel:+7(915)682-19-55"
                               noStyle={true}
                               target="_blank">
                  +7(915)682-19-55
                </UniversalLink>
              </div>
              <div className="bp4-email">
                EMAIL
              </div>
              <div className="bp4-furnasteamgmailcom">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnasmobile-line-4@2x.png')} className="bp4-line4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-line-4-1@2x.png')} className="bp4-line41" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-line-4-2@2x.png')} className="bp4-line42" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-line-4-3@2x.png')} className="bp4-line43" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-line-4-4@2x.png')} className="bp4-line44" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-line-4-5@2x.png')} className="bp4-line45" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp4-ru">
            RU
          </div>
          <div className="bp4-en">
            EN
          </div>
          <div className="bp4-group27-layout-container">
            <div className="bp4-group27">
              <div className="bp4-u041au043eu043cu0430u043du0434u0430">
                Команда
              </div>
              <div className="bp4-u041au043eu043cu0430u043du0434u04301">
                Команда
              </div>
              <img anima-src={require('./images/furnasmobile-group-5@2x.png')} className="bp4-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastablet-group-4@2x.png')} className="bp4-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-7@2x.png')} className="bp4-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-7-1@2x.png')} className="bp4-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizont-group-6@2x.png')} className="bp4-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-6-1@2x.png')} className="bp4-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp4-group15">
                <div className="bp4-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <div className="bp4-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp4-u041au0430u043bu0438u043du0438u043du0433u0430u0434">
                  Калинингад
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0430u0432iiginga">
                  Работала в IIG, Ingate
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp4-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp4-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group16">
                <div className="bp4-u042eu0440u0438u0439">
                  Юрий
                </div>
                <div className="bp4-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp4-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp4-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp4-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group17">
                <div className="bp4-u0415u043bu0435u043du0430">
                  Елена
                </div>
                <div className="bp4-u041cu043eu0441u043au0432u0430">
                  Москва
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rambler
                </div>
                <div className="bp4-u0410u043du0430u043bu0438u0442u0438u043a">
                  Аналитик
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp4-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp4-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group18">
                <div className="bp4-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp4-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0432iigdevex">
                  Работал в IIG, DevExpress, GMCS
                </div>
                <div className="bp4-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp4-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp4-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group19">
                <div className="bp4-uiuxu0434u0438u0437u0430u0439u043du0435u0440">
                  UI/UX дизайнер
                </div>
                <div className="bp4-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rembot
                </div>
                <div className="bp4-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <img anima-src={require('./images/furnasdesktop-suitcase.svg')} className="bp4-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-placeholder-2.svg')} className="bp4-placeholder2"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp4-group14">
                <div className="bp4-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp4-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp4-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate, Grabr
                </div>
                <div className="bp4-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp4-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp4-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bp1-furnasdesctophd">
          <img anima-src={require('./images/furnasdesctophd-bitmap.png')} className="bp1-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-pictreeman1440-layout-container">
            <img anima-src={require('./images/furnasdesctophd-pictreeman1440.png')}
                 id="whofurnasdesctophd"
                 className="bp1-pictreeman1440"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnasdesktop-rectangle-9.png')} className="bp1-rectangle9" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-rectangle91" id="whatfurnasdesctophd">
          </div>
          <div className="bp1-group13-layout-container">
            <img anima-src={require('./images/furnasdesctophd-group-13.png')} className="bp1-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp1-rectangle92">
          </div>
          <img anima-src={require('./images/furnasdesctophd-group.png')} className="bp1-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophd-line-2@2x.png')} className="bp1-line2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-rectangle" id="whyfurnasdesctophd">
          </div>
          <div className="bp1-rectangle1">
          </div>
          <img anima-src={require('./images/furnasdesctophd-star-2@2x.png')} className="bp1-star" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophd-star-2@2x.png')} className="bp1-star1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-group24-layout-container">
            <div className="bp1-group24">
              <div className="bp1-group23">
                <div className="bp1-u0427u0442u043eu043cu044bu0434u0435u043bu0430u0435u043c">
                  Что мы делаем
                </div>
                <div className="bp1-u041au0442u043eu043cu044b">
                  Кто мы
                </div>
                <div className="bp1-group19">
                  <div className="bp1-u0421u0430u0439u0442u044b">
                    Сайты
                  </div>
                  <div className="bp1-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
                    Какие сайты
                  </div>
                  <div className="bp1-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
                    Как работаем
                  </div>
                  <div className="bp1-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
                    Что используем
                  </div>
                  <div className="bp1-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
                    Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
                  </div>
                  <div className="bp1-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
                    Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен / ресторанов / отелей
                  </div>
                  <div className="bp1-u0422u0438u043bu044cu0434u0430reactjsno">
                    Тильда, react js, node js, C#.
                  </div>
                </div>
                <div className="bp1-group21">
                  <div className="bp1-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
                    Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
                  </div>
                  <div className="bp1-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
                    Иллюстрации
                  </div>
                </div>
                <div className="bp1-group22">
                  <div className="bp1-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
                    Отрисовка под любые платформы
                  </div>
                  <div className="bp1-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
                    Как работаем
                  </div>
                  <div className="bp1-facebookinstagram">
                    facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
                  </div>
                  <div className="bp1-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
                    Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
                  </div>
                  <div className="bp1-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
                    Рекламные <br/>баннеры
                  </div>
                </div>
                <div className="bp1-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a">
                  <span className="bp1-span1">Furnas </span><span className="bp1-span2">— это люди, которые раньше работали в одной компании, а потом разъехались по разным городам. <br/>Мы продолжаем дружить, ездить друг к другу в гости и круто проводить время. Теперь мы снова работаем вместе и занимаемся тем, что любим и умеем делать.</span>
                </div>
                <div className="bp1-group20">
                  <div className="bp1-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
                    С чем поможем
                  </div>
                  <div className="bp1-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0443u0435u043c">
                    Что испольуем
                  </div>
                  <div className="bp1-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
                    Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и
                    анализ данных<br/>Консультация при найме сотрудников
                  </div>
                  <div className="bp1-reactjscjava">
                    React js, C#, Java, Python.
                  </div>
                  <div className="bp1-u0421u0442u0430u0440u0442u0430u043fu044b">
                    Стартапы
                  </div>
                </div>
                <div className="bp1-group16">
                  <img anima-src={require('./images/furnasdesktop-group-12@2x.png')} className="bp1-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <div className="bp1-u0422u0435u043bu0435u0444u043eu043d">
                    Телефон
                  </div>
                  <Input value={this.state.phone}
                         onChange={this.handlePhoneChange}
                         className="landing__phone-input-desktophd"/>
                  <div className="bp1-email">
                    Email
                  </div>
                  <Input value={this.state.email}
                         onChange={this.handleEmailChange}
                         className="landing__email-input-desktophd"/>
                  <div className="bp1-skype">
                    Skype
                  </div>
                  <Input className="landing__skype-input-desktophd"
                         value={this.state.skype}
                         onChange={this.handleSkypeChange}/>
                  <div className="bp1-u0421u043eu043eu0431u0449u0435u043du0438u0435">
                    Сообщение
                  </div>
                  <Input className="landing__message-input-desktophd"
                         value={this.state.message}
                         onChange={this.handleMessageChange}/>
                  <div className="bp1-u0421u0432u044fu0437u0430u0442u044cu0441u044f">
                    Связаться
                  </div>
                  <div className="bp1-group2" onClick={this.handleSendDataClick}>
                    <div className="bp1-rectangle17">
                    </div>
                    <div className="bp1-u041eu0442u043fu0440u0430u0432u0438u0442u044c">
                      {this.state.sent ? 'Отправлено' : 'Отправить'}
                    </div>
                  </div>
                </div>
                <div className="bp1-u041au043eu043du0442u0430u043au0442u044b">
                  Контакты
                </div>
                <div className="bp1-u0421u0441u044bu043bu043au0438">
                  Ссылки
                </div>
                <div className="bp1-a79999999999">
                  <UniversalLink href="tel:+7(915)682-19-55"
                                 noStyle={true}
                                 target="_blank">
                    +7(915)682-19-55
                  </UniversalLink>
                </div>
                <div className="bp1-mailmailmailcom">
                  furnasteam@gmail.com
                </div>
                <div className="bp1-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438">
                  <UniversalLink href="https://spark.ru/startup/furnas"
                                 noStyle={true}
                                 target="_blank">
                    Наши статьи
                  </UniversalLink>
                </div>
                <div className="bp1-u041du0430u0448u043fu0440u043eu0435u043au0442">
                  <UniversalLink href="https://visa.furnas.ru/"
                                 noStyle={true}
                                 target="_blank">
                    Наш проект
                  </UniversalLink>
                </div>
                <div className="bp1-social">
                  Social
                </div>
                <UniversalLink href="https://vk.com/furnas"
                               noStyle={true}
                               target="_blank">
                  <img anima-src={require('./images/furnasdesctophd-vk.svg')} className="bp1-vk" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </UniversalLink>
                <UniversalLink href="https://www.instagram.com/furnasteam/"
                               noStyle={true}
                               target="_blank">
                  <img anima-src={require('./images/furnasdesctophd-instagram.svg')} className="bp1-instagram"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </UniversalLink>
                <UniversalLink href="https://www.instagram.com/furnasteam/"
                               noStyle={true}
                               target="_blank">
                  <img anima-src={require('./images/furnasdesctophd-facebook.svg')} className="bp1-facebook" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </UniversalLink>
                <UniversalLink href="https://medium.com/@furnasteam/"
                               noStyle={true}
                               target="_blank">
                  <img anima-src={require('./images/furnasdesctophd-media.svg')} className="bp1-media" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </UniversalLink>
                <UniversalLink href="https://spark.ru/startup/furnas"
                               noStyle={true}
                               target="_blank">
                  <img anima-src={require('./images/furnasdesctophd-spark.svg')} className="bp1-spark" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </UniversalLink>
                <div className="bp1-a2019251furnas">
                  2019 © FURNAS
                </div>
                <div className="bp1-u041du0430u0439u0434u0438u0441u0432u043eu0435u043eu0442u0440u0430u0436u0435u043du0438u0435">
                  Найди <br/>свое отражение
                </div>
                <div className="bp1-u041cu043du0435u043du0438u044fu0442u0435u0445u043du043eu043bu043eu0433u0438u0438">
                  Мнения, технологии, дизайн — все это неважно. <br/>Пойми себя, найди свое отражение.
                </div>
                <div className="bp1-furnas">
                  Furnas
                </div>
                <UniversalLink href="#whatfurnasdesctophd">
                  <div className="bp1-u0427u0442u043e">
                    Что
                  </div>
                </UniversalLink>
                <UniversalLink href="#whofurnasdesctophd">
                  <div className="bp1-u041au0442u043e">
                    Кто
                  </div>
                </UniversalLink>
                <UniversalLink href="#whyfurnasdesctophd">
                  <div className="bp1-u041fu043eu0447u0435u043cu0443">
                    Почему
                  </div>
                </UniversalLink>
                <UniversalLink href="#wherefurnasdesctophd">
                  <div className="bp1-u0413u0434u0435">
                    Где
                  </div>
                </UniversalLink>
                <div className="bp1-ru">
                  RU
                </div>
                <div className="bp1-en">
                  EN
                </div>
                <div className="bp1-group15">
                  <div className="bp1-u0413u0434u04351" id="wherefurnasdesctophd">
                    Где?
                  </div>
                  <div className="bp1-u043du0430u0448u0414u0438u0437u0430u0439u043d">
                    НАШ ДИЗАЙН
                  </div>
                  <div className="bp1-u043du0430u0448u041au043eu0434">
                    НАШ КОД
                  </div>
                  <div className="bp1-u043du0430u0448u0438u0421u0442u0430u0442u044cu0438">
                    НАШИ СТАТЬИ
                  </div>
                  <div className="bp1-u0412u0438u0437u0430u0432u0418u0441u043fu0430u043du0438u044eu043du0430u0448">
                    ВИЗА В ИСПАНИЮ <br/>(НАШ ПРОЕКТ)
                  </div>
                  <div className="bp1-dribbblecom">
                    <UniversalLink href="https://dribbble.com/sanmary"
                                   noStyle={true}
                                   target="_blank">
                      DRIBBBLE.COM
                    </UniversalLink>
                  </div>
                  <div className="bp1-githubcom">
                    <UniversalLink href="https://github.com/furnasteam"
                                   noStyle={true}
                                   target="_blank">
                      GITHUB.COM
                    </UniversalLink>
                  </div>
                  <div className="bp1-sparkru">
                    <UniversalLink href="https://spark.ru/startup/furnas"
                                   noStyle={true}
                                   target="_blank">
                      SPARK.RU
                    </UniversalLink>
                  </div>
                  <div className="bp1-visafurnasru">
                    <UniversalLink href="https://visa.furnas.ru/"
                                   noStyle={true}
                                   target="_blank">
                      VISA.FURNAS.RU
                    </UniversalLink>
                  </div>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <div className="bp1-u0442u0435u043bu0435u0444u043eu043d">
                    ТЕЛЕФОН
                  </div>
                  <div className="bp1-a79156821955">
                    <UniversalLink href="tel:+7(915)682-19-55"
                                   noStyle={true}
                                   target="_blank">
                      +7(915)682-19-55
                    </UniversalLink>
                  </div>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <div className="bp1-email">
                    EMAIL
                  </div>
                  <div className="bp1-furnasteamgmailcom">
                    FURNASTEAM@GMAIL.COM
                  </div>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasdesktop-oval-18-4@2x.png')} className="bp1-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp1-group18">
                  <div className="bp1-u041bu0443u0447u0448u0435u0447u0435u043cu0441u0442u0443u0434u0438u044fu0432u0435">
                    Лучше, чем студия веб-разработки
                  </div>
                  <div className="bp1-u0412u0431u043eu043bu044cu0448u0438u0445u043au043eu043cu043fu0430u043du0438u044fu0445">
                    В больших компаниях большая часть денег идет на зарплату менеджеров, оплату аренды и прочие издержки. До конкретных исполнителей работы доходит совсем немного денег, поэтому там
                    часто работают новички в профессии. У нас нет менеджеров и офиса - деньги от заказа идут тем, кто его делал.<br/>
                  </div>
                  <div className="bp1-u041fu043eu0447u0435u043cu0443u041cu044b">
                    Почему <br/>Мы?
                  </div>
                  <img anima-src={require('./images/furnasdesctophd-group-10.svg')} className="bp1-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp1-group17">
                  <div className="bp1-u0418u043du043eu0433u0434u0430u0443u0432u0430u0441u043fu043eu044fu0432u043bu044fu0435">
                    Иногда у вас появляется чуть больше работы и если возможность - вы нанимаете сотрудника. Через какое-то время ему нечего делать и он становится недоволен своей работой, а вы его
                    отношением.<br/>Лучше сначала поработать с нами. Мы сделаем то, что вам нужно прямо сейчас, а если потребность будет постоянной - тогда стоит задумать о найме человека в штат.
                  </div>
                  <div className="bp1-u041bu0443u0447u0448u0435u0447u0435u043cu0448u0442u0430u0442u043du044bu0439u0441">
                    Лучше, чем штатный сотрудник
                  </div>
                  <div className="bp1-u0423u043du0430u0441u0431u043eu043bu044cu0448u043eu0439u043eu043fu044bu0442u0440">
                    У нас большой опыт работы в крупных компаниях, где стандарты качества в разы выше, чем на фриланс рынке, знаем методологии, которые используются при разработке, работаем по
                    договору.
                  </div>
                  <div className="bp1-u041bu0443u0447u0448u0435u0447u0435u043cu0444u0440u0438u043bu0430u043du0441u0435u0440">
                    Лучше, чем фрилансеры
                  </div>
                  <img anima-src={require('./images/furnasdesctophd-group-8.svg')} className="bp1-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasdesctophd-group-11.svg')} className="bp1-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp1-group14">
                  <div className="bp1-u041au043eu043cu0430u043du0434u0430">
                    Команда
                  </div>
                  <img anima-src={require('./images/furnastablet-group-4@2x.png')} className="bp1-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-group-6@2x.png')} className="bp1-group6"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasdesctophd-group-7@2x.png')} className="bp1-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobile-group-5@2x.png')} className="bp1-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <div className="bp1-group25">
                    <div className="bp1-uiuxu0434u0438u0437u0430u0439u043du0435u0440">
                      UI/UX дизайнер
                    </div>
                    <div className="bp1-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                      Санкт-Петербург
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                      Работала в Ingate, Rembot
                    </div>
                    <div className="bp1-u041cu0430u0440u0438u044f">
                      Мария
                    </div>
                    <img anima-src={require('./images/furnasdesktop-suitcase.svg')} className="bp1-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    <img anima-src={require('./images/furnastablet-placeholder-2.svg')} className="bp1-placeholder2"
                         src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  </div>
                  <div className="bp1-group26">
                    <div className="bp1-u042eu0440u0438u0439">
                      Юрий
                    </div>
                    <div className="bp1-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                      Разработчик
                    </div>
                    <div className="bp1-u0422u0443u043bu0430">
                      Тула
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                      Работал в IIG, Ingate
                    </div>
                    <div className="bp1-suitcase">
                      <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className="bp1-placeholder2">
                      <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp1-shape1"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                  </div>
                  <div className="bp1-group29">
                    <div className="bp1-u0415u043bu0435u043du0430">
                      Елена
                    </div>
                    <div className="bp1-u041cu043eu0441u043au0432u0430">
                      Москва
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                      Работала в Ingate, Rambler
                    </div>
                    <div className="bp1-u0410u043du0430u043bu0438u0442u0438u043a">
                      Аналитик
                    </div>
                    <div className="bp1-suitcase">
                      <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className="bp1-placeholder2">
                      <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp1-shape1"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                  </div>
                  <img anima-src={require('./images/furnasmobile-group-6-1@2x.png')} className="bp1-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobile-group-7@2x.png')} className="bp1-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <div className="bp1-group28">
                    <div className="bp1-u041cu0430u0440u0438u044f">
                      Мария
                    </div>
                    <div className="bp1-mobiledesigner">
                      Mobile Designer
                    </div>
                    <div className="bp1-u041au0430u043bu0438u043du0438u043du0433u0430u0434">
                      Калинингад
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0430u0432iiginga">
                      Работала в IIG, Ingate
                    </div>
                    <div className="bp1-suitcase">
                      <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className="bp1-placeholder2">
                      <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp1-shape1"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                  </div>
                  <div className="bp1-group27">
                    <div className="bp1-u0421u0435u0440u0433u0435u0439">
                      Сергей
                    </div>
                    <div className="bp1-u0422u0443u043bu0430">
                      Тула
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0432iigdevex">
                      Работал в IIG, DevExpress, GMCS
                    </div>
                    <div className="bp1-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                      Разработчик
                    </div>
                    <div className="bp1-suitcase">
                      <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className="bp1-placeholder2">
                      <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp1-shape1"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                  </div>
                  <div className="bp1-group30">
                    <div className="bp1-u0421u0435u0440u0433u0435u0439">
                      Сергей
                    </div>
                    <div className="bp1-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                      Санкт-Петербург
                    </div>
                    <div className="bp1-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                      Работал в IIG, Ingate, Grabr
                    </div>
                    <div className="bp1-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                      Разработчик
                    </div>
                    <div className="bp1-suitcase">
                      <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                    <div className="bp1-placeholder2">
                      <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp1-shape"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp1-shape1"
                           src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                      <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                    </div>
                  </div>
                </div>
                <img anima-src={require('./images/furnasdesctophd-star-2@2x.png')} className="bp1-star3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasdesctophd-star-2@2x.png')} className="bp1-star11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <img anima-src={require('./images/furnasdesctophd-star-2@2x.png')} className="bp1-star2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
        </div>
        <div className="bp3-furnasmobilehorizont">
          <img anima-src={require('./images/furnasmobilehorizont-bitmap.png')} className="bp3-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-rectangle9" id="whatfurnasmobile">
          </div>
          <img anima-src={require('./images/furnasmobile-rectangle-9.png')} className="bp3-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-group13-layout-container">
            <img anima-src={require('./images/furnasdesktop-group-13.png')} className="bp3-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnasmobilehorizont-bitmap-1.png')} className="bp3-bitmap1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-rectangle" id="whyfurnasmobile">
          </div>
          <div className="bp3-group27-layout-container">
            <div className="bp3-group27">
              <div className="bp3-u0413u0434u04351" id="wherefurnasmobile">
                Где?
              </div>
              <div className="bp3-group23">
                <div className="bp3-u043du0430u0448u0414u0438u0437u0430u0439u043d">
                  НАШ ДИЗАЙН
                </div>
                <div className="bp3-u043du0430u0448u041au043eu0434">
                  НАШ КОД
                </div>
                <div className="bp3-u043du0430u0448u0438u0421u0442u0430u0442u044cu0438">
                  НАШИ СТАТЬИ
                </div>
                <div className="bp3-u0412u0438u0437u0430u0432u0418u0441u043fu0430u043du0438u044eu043du0430u0448">
                  ВИЗА В ИСПАНИЮ <br/>(НАШ ПРОЕКТ)
                </div>
                <div className="bp3-dribbblecom">
                  <UniversalLink href="https://dribbble.com/sanmary"
                                 noStyle={true}
                                 target="_blank">
                    DRIBBBLE.COM
                  </UniversalLink>
                </div>
                <div className="bp3-githubcom">
                  <UniversalLink href="https://github.com/furnasteam"
                                 noStyle={true}
                                 target="_blank">
                    GITHUB.COM
                  </UniversalLink>
                </div>
                <div className="bp3-sparkru">
                  <UniversalLink href="https://spark.ru/startup/furnas"
                                 noStyle={true}
                                 target="_blank">
                    SPARK.RU
                  </UniversalLink>
                </div>
                <div className="bp3-visafurnasru">
                  <UniversalLink href="https://visa.furnas.ru/"
                                 noStyle={true}
                                 target="_blank">
                    VISA.FURNAS.RU
                  </UniversalLink>
                </div>
                <div className="bp3-u0442u0435u043bu0435u0444u043eu043d">
                  ТЕЛЕФОН
                </div>
                <div className="bp3-a79156821955">
                  <UniversalLink href="tel:+7(915)682-19-55"
                                 noStyle={true}
                                 target="_blank">
                    +7(915)682-19-55
                  </UniversalLink>
                </div>
                <div className="bp3-email">
                  EMAIL
                </div>
                <div className="bp3-furnasteamgmailcom">
                  FURNASTEAM@GMAIL.COM
                </div>
                <img anima-src={require('./images/furnasmobilehorizont-line-4@2x.png')} className="bp3-line4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-line-4-1@2x.png')} className="bp3-line41"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-line-4-2@2x.png')} className="bp3-line42"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-line-4-3@2x.png')} className="bp3-line43"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-line-4-4@2x.png')} className="bp3-line44"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizont-line-4-5@2x.png')} className="bp3-line45"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <div className="bp3-group28-layout-container">
            <div className="bp3-group28">
              <div className="bp3-group26">
                <img anima-src={require('./images/furnasmobilehorizont-group-12.png')} className="bp3-group12"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp3-u0422u0435u043bu0435u0444u043eu043d">
                  Телефон
                </div>
                <div className="bp3-u0421u043eu043eu0431u0449u0435u043du0438u0435">
                  Сообщение
                </div>
                <div className="bp3-u0421u0432u044fu0437u0430u0442u044cu0441u044f">
                  Связаться
                </div>
                <div className="bp3-email">
                  Email
                </div>
                <div className="bp3-skype">
                  Skype
                </div>
              </div>
              <div className="bp3-group2">
                <div className="bp3-rectangle17">
                </div>
                <div className="bp3-u041eu0442u043fu0440u0430u0432u0438u0442u044c">
                  Отправить
                </div>
              </div>
            </div>
          </div>
          <div className="bp3-rectangle1">
          </div>
          <div className="bp3-group25-layout-container">
            <div className="bp3-group25">
              <div className="bp3-u041fu043eu0447u0435u043cu0443u041cu044b">
                Почему <br/>Мы?
              </div>
              <div className="bp3-group20">
                <div className="bp3-u0423u043du0430u0441u0431u043eu043bu044cu0448u043eu0439u043eu043fu044bu0442u0440">
                  У нас большой опыт работы в крупных компаниях, где стандарты качества в разы выше, чем на фриланс рынке, знаем методологии, которые используются при разработке, работаем по договору.
                </div>
                <div className="bp3-u041bu0443u0447u0448u0435u0447u0435u043cu0444u0440u0438u043bu0430u043du0441u0435u0440">
                  Лучше, чем фрилансеры
                </div>
                <img anima-src={require('./images/furnasmobilehorizont-group-8.svg')} className="bp3-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-group21">
                <div className="bp3-u0418u043du043eu0433u0434u0430u0443u0432u0430u0441u043fu043eu044fu0432u043bu044fu0435">
                  Иногда у вас появляется чуть больше работы и если возможность - вы нанимаете сотрудника. Через какое-то время ему нечего делать и он становится недоволен своей работой, а вы его
                  отношением.<br/>Лучше сначала поработать с нами. Мы сделаем то, что вам нужно прямо сейчас, а если потребность будет постоянной - тогда стоит задумать о найме человека в штат.
                </div>
                <div className="bp3-u041bu0443u0447u0448u0435u0447u0435u043cu0448u0442u0430u0442u043du044bu0439u0441">
                  Лучше, чем штатный сотрудник
                </div>
                <img anima-src={require('./images/furnastablet-group-11.svg')} className="bp3-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-group22">
                <div className="bp3-u041bu0443u0447u0448u0435u0447u0435u043cu0441u0442u0443u0434u0438u044fu0432u0435">
                  Лучше, чем студия веб-разработки
                </div>
                <div className="bp3-u0412u0431u043eu043bu044cu0448u0438u0445u043au043eu043cu043fu0430u043du0438u044fu0445">
                  В больших компаниях большая часть денег идет на зарплату менеджеров, оплату аренды и прочие издержки. До конкретных исполнителей работы доходит совсем немного денег, поэтому там
                  часто работают новички в профессии. У нас нет менеджеров и офиса - деньги от заказа идут тем, кто его делал.<br/>
                </div>
                <img anima-src={require('./images/furnastablet-group-10.svg')} className="bp3-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <div className="bp3-group29-layout-container">
            <div className="bp3-group29">
              <div className="bp3-u041au043eu043cu0430u043du0434u0430">
                Команда
              </div>
              <img anima-src={require('./images/furnasmobile-group-5@2x.png')} className="bp3-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastablet-group-4@2x.png')} className="bp3-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-7@2x.png')} className="bp3-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-7-1@2x.png')} className="bp3-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizont-group-6@2x.png')} className="bp3-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-group-6-1@2x.png')} className="bp3-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-group15">
                <div className="bp3-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <div className="bp3-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp3-u041au0430u043bu0438u043du0438u043du0433u0430u0434">
                  Калинингад
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0430u0432iiginga">
                  Работала в IIG, Ingate
                </div>
                <div className="bp3-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp3-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp3-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp3-group16">
                <div className="bp3-u042eu0440u0438u0439">
                  Юрий
                </div>
                <div className="bp3-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp3-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate
                </div>
                <div className="bp3-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp3-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp3-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp3-group17">
                <div className="bp3-u0415u043bu0435u043du0430">
                  Елена
                </div>
                <div className="bp3-u041cu043eu0441u043au0432u0430">
                  Москва
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rambler
                </div>
                <div className="bp3-u0410u043du0430u043bu0438u0442u0438u043a">
                  Аналитик
                </div>
                <div className="bp3-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp3-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp3-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp3-group18">
                <div className="bp3-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp3-u0422u0443u043bu0430">
                  Тула
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0432iigdevex">
                  Работал в IIG, DevExpress, GMCS
                </div>
                <div className="bp3-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp3-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp3-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp3-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp3-group19">
                <div className="bp3-uiuxu0434u0438u0437u0430u0439u043du0435u0440">
                  UI/UX дизайнер
                </div>
                <div className="bp3-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0430u0432ingater">
                  Работала в Ingate, Rembot
                </div>
                <div className="bp3-u041cu0430u0440u0438u044f">
                  Мария
                </div>
                <img anima-src={require('./images/furnasdesktop-suitcase.svg')} className="bp3-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastablet-placeholder-2.svg')} className="bp3-placeholder2"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-group14">
                <div className="bp3-u0421u0435u0440u0433u0435u0439">
                  Сергей
                </div>
                <div className="bp3-u0421u0430u043du043au0442u041fu0435u0442u0435u0440u0431u0443u0440u0433">
                  Санкт-Петербург
                </div>
                <div className="bp3-u0420u0430u0431u043eu0442u0430u043bu0432iigingat">
                  Работал в IIG, Ingate, Grabr
                </div>
                <div className="bp3-u0420u0430u0437u0440u0430u0431u043eu0442u0447u0438u043a">
                  Разработчик
                </div>
                <div className="bp3-suitcase">
                  <img anima-src={require('./images/furnasdesctophd-shape-16@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder2">
                  <img anima-src={require('./images/furnasmobilehorizont-shape-13@2x.png')} className="bp3-shape"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobilehorizont-shape-6@2x.png')} className="bp3-shape1"
                       src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastablet-shape-4@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp3-u041au0442u043eu043cu044b" id="whofurnasmobile">
            Кто мы
          </div>
          <div className="bp3-furnasu2014u044du0442u043eu043bu044eu0434u0438u043a">
            <span className="bp3-span1">Furnas </span><span className="bp3-span2">— это люди, которые раньше работали в одной компании, а потом разъехались по разным городам. <br/>Мы продолжаем дружить, ездить друг к другу в гости и круто проводить время. Теперь мы снова работаем вместе и занимаемся тем, что любим и умеем делать.</span>
          </div>
          <img anima-src={require('./images/furnasmobilehorizont-group.png')} className="bp3-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-u0421u0430u0439u0442u044b">
            Сайты
          </div>
          <div className="bp3-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            Какие сайты
          </div>
          <div className="bp3-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            Как работаем
          </div>
          <div className="bp3-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            Что используем
          </div>
          <div className="bp3-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
          </div>
          <div className="bp3-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен/ресторанов/отелей
          </div>
          <div className="bp3-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp3-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и анализ
            данных<br/>Консультация при найме сотрудников
          </div>
          <div className="bp3-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp3-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Отрисовка под любые платформы
          </div>
          <div className="bp3-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp3-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp3-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
          </div>
          <div className="bp3-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
          </div>
          <div className="bp3-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Иллюстрации
          </div>
          <div className="bp3-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <div className="bp3-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            С чем поможем
          </div>
          <div className="bp3-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            Что используем
          </div>
          <div className="bp3-u0421u0442u0430u0440u0442u0430u043fu044b">
            Стартапы
          </div>
          <div className="bp3-u0427u0442u043eu043cu044bu0434u0435u043bu0430u0435u043c">
            Что мы делаем
          </div>
          <div className="bp3-u041du0430u0439u0434u0438u0441u0432u043eu0435u043eu0442u0440u0430u0436u0435u043du0438u0435">
            Найди <br/>свое отражение
          </div>
          <div className="bp3-u041cu043du0435u043du0438u044fu0442u0435u0445u043du043eu043bu043eu0433u0438u0438">
            <span className="bp3-span1">Мнения, технологии, дизайн — <br/></span><span className="bp3-span2">все это неважно.</span>
          </div>
          <div className="bp3-u041fu043eu0439u043cu0438u0441u0435u0431u044fu043du0430u0439u0434u0438u0441u0432">
            Пойми себя, найди свое отражение.
          </div>
          <div className="bp3-furnas">
            Furnas
          </div>
          <div className="bp3-ru">
            RU
          </div>
          <div className="bp3-en">
            EN
          </div>
          <UniversalLink noStyle={true} href="#whatfurnasmobile">
            <div className="bp3-u0427u0442u043e">
              Что
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whofurnasmobile">
            <div className="bp3-u041au0442u043e">
              Кто
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#whyfurnasmobile">
            <div className="bp3-u041fu043eu0447u0435u043cu0443">
              Почему
            </div>
          </UniversalLink>
          <UniversalLink noStyle={true} href="#wherefurnasmobile">
            <div className="bp3-u0413u0434u0435">
              Где
            </div>
          </UniversalLink>
          <div className="bp3-rectangle92">
          </div>
          <div className="bp3-u0421u0441u044bu043bu043au0438">
            Ссылки
          </div>
          <div className="bp3-u041du0430u0448u0438u0441u0442u0430u0442u044cu0438">
            <UniversalLink href="https://spark.ru/startup/furnas"
                           noStyle={true}
                           target="_blank">
              Наши статьи
            </UniversalLink>
          </div>
          <div className="bp3-u041du0430u0448u043fu0440u043eu0435u043au0442">
            <UniversalLink href="https://visa.furnas.ru/"
                           noStyle={true}
                           target="_blank">
              Наш проект
            </UniversalLink>
          </div>
          <div className="bp3-group24">
            <div className="bp3-social">
              Social
            </div>
            <div className="bp3-rectangle12">
            </div>
            <UniversalLink href="https://vk.com/furnas"
                           noStyle={true}
                           target="_blank">
              <img anima-src={require('./images/furnasdesktop-shape-20@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </UniversalLink>
            <UniversalLink href="https://www.instagram.com/furnasteam/"
                           noStyle={true}
                           target="_blank">
              <div className="bp3-rectangle121">
              </div>
              <img anima-src={require('./images/furnasmobile-combined-shape@2x.png')} className="bp3-combinedshape"
                   src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </UniversalLink>
            <UniversalLink href="https://www.facebook.com/furnasteam/"
                           noStyle={true}
                           target="_blank">
              <img anima-src={require('./images/furnasmobile-rectangle-12.png')} className="bp3-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobile-shape-1@2x.png')} className="bp3-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </UniversalLink>
            <UniversalLink href="https://medium.com/@furnasteam/"
                           noStyle={true}
                           target="_blank">
              <div className="bp3-rectangle123">
              </div>
              <img anima-src={require('./images/furnasdesktop-m@2x.png')} className="bp3-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </UniversalLink>
            <UniversalLink href="https://spark.ru/startup/furnas"
                           noStyle={true}
                           target="_blank">
              <div className="bp3-rectangle124">
              </div>
              <img anima-src={require('./images/furnasdesktop-s@2x.png')} className="bp3-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </UniversalLink>
          </div>
          <div className="bp3-a79999999999">
            <UniversalLink href="tel:+7(915)682-19-55"
                           noStyle={true}
                           target="_blank">
              +7(915)682-19-55
            </UniversalLink>
          </div>
          <div className="bp3-mailmailmailcom">
            furnasteam@gmail.com
          </div>
          <div className="bp3-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp3-stackedgroup">
            <div className="bp3-u041au043eu043du0442u0430u043au0442u044b">
              Контакты
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

}
