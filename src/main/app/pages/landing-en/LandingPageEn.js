import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import './landing-en.scss';
import {UniversalLink} from '../../components/universal-link/UniversalLink';
import {Input} from '../../components/input/Input';

export class LandingPageEn extends React.Component {

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
          <meta name="description" content="Разработка сайтов, ux/ui дизайн, отрисовка рекламных баннеров, иллюстрации, настройка рекламы"/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div className="bp5-furnasmobileeng">
          <div className="bp5-group25-layout-container">
            <div className="bp5-group25">
              <div className="bp5-rectangle2">
              </div>
              <img anima-src={require('./images/furnasmobileeng-bitmap.png')} className="bp5-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp5-reflection">
            REFLECTION
          </div>
          <div className="bp5-opiniontechnology">
            Opinion, technology, style… It doesn’t matter. <br/>Find yourself, find your reflection.
          </div>
          <div className="bp5-furnas">
            Furnas
          </div>
          <div className="bp5-rectangle9">
          </div>
          <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-9.png')} className="bp5-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp5-group13-layout-container">
            <img anima-src={require('./images/furnasmobileeng-group-13.png')} className="bp5-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp5-whoweare-layout-container">
            <div className="bp5-whoweare">
              Who we are
            </div>
          </div>
          <div className="bp5-furnasu2014itmeanspe-layout-container">
            <div className="bp5-furnasu2014itmeanspe">
              <span className="bp5-span1">Furnas </span><span className="bp5-span2">— it means people who used to work together and now live in different cities.<br/>We are still friends, keep visiting each other and have fun. Now we are working together again and doing what we love.</span>
            </div>
          </div>
          <img anima-src={require('./images/furnasmobileeng-group.png')} className="bp5-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
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
          <div className="bp5-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Дизайн <br/>Верстка<br/>Создание контента<br/>Настройка Яндекс.Метрики и Гугл аналитики<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров
          </div>
          <div className="bp5-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Лендинги <br/>Продающие сайты <br/>Сайты-визитки <br/>Корпоративные сайты<br/>Сайты-мероприятий <br/>Сайты для кофеен/ресторанов/отелей
          </div>
          <div className="bp5-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp5-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Создание первой жизнеспособной версии продукта<br/>Разработка архитектуры веб-приложений<br/>Проверка гипотез<br/>Настройка рекламы<br/>Отрисовка рекламных баннеров<br/>Сбор и анализ
            данных<br/>Консультация при найме сотрудников
          </div>
          <div className="bp5-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp5-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Отрисовка под любые платформы
          </div>
          <div className="bp5-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp5-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp5-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Отрисовка уникальных иллюстраций в Adobe Illustrator — от идеи до финальной версии.<br/>Обработка фото.
          </div>
          <div className="bp5-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Придумываем и рисуем уникальные иллюстрации для презентаций, рекламы, статей, сайтов, баннеров, флаеров.
          </div>
          <div className="bp5-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Иллюстрации
          </div>
          <div className="bp5-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <div className="bp5-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            С чем поможем
          </div>
          <div className="bp5-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            Что используем
          </div>
          <div className="bp5-whatwedo">
            What we do
          </div>
          <div className="bp5-u0421u0442u0430u0440u0442u0430u043fu044b">
            Стартапы
          </div>
          <div className="bp5-treemanonly-layout-container">
            <img anima-src={require('./images/furnasmobileeng-treemanonly.png')} className="bp5-treemanonly" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp5-rectangle">
          </div>
          <div className="bp5-where-layout-container">
            <div className="bp5-where">
              Where?
            </div>
          </div>
          <div className="bp5-whywearebetterth-layout-container">
            <div className="bp5-whywearebetterth">
              Why we <br/>are better<br/>than…?
            </div>
          </div>
          <div className="bp5-group20-layout-container">
            <div className="bp5-group20">
              <div className="bp5-weworkedinlargec">
                We worked in large companies with high quality standards. We know development methodologies and work under contract.
              </div>
              <div className="bp5-freelance">
                freelance
              </div>
              <img anima-src={require('./images/furnastableteng-group-8.svg')} className="bp5-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp5-group21-layout-container">
            <div className="bp5-group21">
              <div className="bp5-onedayyouhavesom">
                One day you have some extra work and you make a decision to hire an employee. Afterwards he has nothing to do and he is not happy with you. So you don’t like his attitude at work.<br/>At
                first it will be better to work with us. We can work right now. In case of regular task you should think about full-time employee.
              </div>
              <div className="bp5-employee">
                employee
              </div>
              <img anima-src={require('./images/furnasmobileeng-group-11.svg')} className="bp5-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp5-rectangle1">
          </div>
          <div className="bp5-group22-layout-container">
            <div className="bp5-group22">
              <div className="bp5-webstudiodesign">
                web-studio design
              </div>
              <div className="bp5-alargecompanyspen">
                A large company spend money on office rent, manager's salary and etc. Junior works on your project because real performer got a bit of money. We don’t have any office, managers or
                cleaner staff. In our company developers get all the money.
              </div>
              <img anima-src={require('./images/furnasmobileeng-group-10.svg')} className="bp5-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp5-group28-layout-container">
            <div className="bp5-group28">
              <div className="bp5-group26">
                <img anima-src={require('./images/furnasmobileeng-group-12.png')} className="bp5-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp5-phone">
                  Phone
                </div>
                <Input value={this.state.phone}
                       onChange={this.handlePhoneChange}
                       className="landing__phone-input-mobile"/>
                <div className="bp5-message">
                  Message
                </div>
                <textarea value={this.state.message}
                          onChange={this.handleMessageChange}
                          className="landing__message-input-mobile"/>
                <div className="bp5-contact">
                  Contact
                </div>
                <div className="bp5-email">
                  Email
                </div>
                <Input value={this.state.email}
                       onChange={this.handleEmailChange}
                       className="landing__email-input-mobile"/>
                <div className="bp5-skype">
                  Skype
                </div>
                <Input value={this.state.skype}
                       onChange={this.handleSkypeChange}
                       className="landing__skype-input-mobile"/>
              </div>
              <div className="bp5-group2" onClick={this.handleSendDataClick}>
                <div className="bp5-rectangle17">
                </div>
                <div className="bp5-send">
                  {this.state.sent ? 'Sent' : 'Send'}
                </div>
              </div>
            </div>
          </div>
          <div className="bp5-rectangle92">
          </div>
          <div className="bp5-group24-layout-container">
            <div className="bp5-group24">
              <div className="bp5-social">
                Social
              </div>
              <a href="https://vk.com/furnas" target="_blank">
                <div className="bp5-rectangle12">
                </div>
              </a>
              <a href="https://vk.com/furnas" target="_blank">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-20@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
              <a href="https://www.instagram.com/furnasteam/" target="_blank">
                <div className="bp5-rectangle121">
                </div>
              </a>
              <a href="https://www.instagram.com/furnasteam/" target="_blank">
                <img anima-src={require('./images/furnasmobilehorizonteng-combined-shape@2x.png')} className="bp5-combinedshape"
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
              <a href="https://www.facebook.com/furnasteam/" target="_blank">
                <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-12.png')} className="bp5-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
              <a href="https://www.facebook.com/furnasteam/" target="_blank">
                <img anima-src={require('./images/furnastableteng-shape-21@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <div className="bp5-rectangle123">
                </div>
              </a>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <img anima-src={require('./images/furnasmobilehorizonteng-m@2x.png')} className="bp5-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
              <a href="https://spark.ru/startup/furnas" target="_blank">
                <div className="bp5-rectangle124">
                </div>
              </a>
              <a href="https://spark.ru/startup/furnas" target="_blank">
                <img anima-src={require('./images/furnasmobileeng-s@2x.png')} className="bp5-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </a>
            </div>
          </div>
          <div className="bp5-a2019251furnas-layout-container">
            <div className="bp5-a2019251furnas">
              2019 © FURNAS
            </div>
          </div>
          <div className="bp5-group23-layout-container">
            <div className="bp5-group23">
              <div className="bp5-design">
                DESIGN
              </div>
              <div className="bp5-code">
                CODE
              </div>
              <div className="bp5-articles">
                ARTICLES
              </div>
              <div className="bp5-spainvisaourproj">
                SPAIN VISA <br/>(OUR PROJECT)
              </div>
              <a href="https://dribbble.com/sanmary" target="_blank">
                <div className="bp5-dribbblecom">
                  DRIBBBLE.COM
                </div>
              </a>
              <a href="https://github.com/furnasteam" target="_blank">
                <div className="bp5-githubcom">
                  GITHUB.COM
                </div>
              </a>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <div className="bp5-mediumcom">
                  MEDIUM.COM
                </div>
              </a>
              <a href="https://visa.furnas.ru" target="_blank">
                <div className="bp5-visafurnasru">
                  VISA.FURNAS.RU
                </div>
              </a>
              <div className="bp5-phone">
                PHONE
              </div>
              <a href="tel:+7(915)682-19-55" target="_blank">
                <div className="bp5-a79156821955">
                  +7(915)682-19-55
                </div>
              </a>
              <div className="bp5-email">
                EMAIL
              </div>
              <div className="bp5-furnasteamgmailcom">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnasmobileeng-line-4@2x.png')} className="bp5-line4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-line-4-1@2x.png')} className="bp5-line41" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-line-4-2@2x.png')} className="bp5-line42" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-line-4-3@2x.png')} className="bp5-line43" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-line-4-4@2x.png')} className="bp5-line44" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-line-4-5@2x.png')} className="bp5-line45" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <a href="https://furnas.ru" target="_blank">
            <div className="bp5-ru">
              RU
            </div>
          </a>
          <div className="bp5-en">
            EN
          </div>
          <div className="bp5-group27-layout-container">
            <div className="bp5-group27">
              <div className="bp5-dreamteam">
                Dream team
              </div>
              <img anima-src={require('./images/furnasdesctophdeng-group-5@2x.png')} className="bp5-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastableteng-group-4@2x.png')} className="bp5-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-group-7@2x.png')} className="bp5-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-7-1@2x.png')} className="bp5-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktopeng-group-6@2x.png')} className="bp5-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-6-1@2x.png')} className="bp5-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp5-group15">
                <div className="bp5-maria">
                  Maria
                </div>
                <div className="bp5-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp5-kaliningradrussia">
                  Kaliningrad, Russia
                </div>
                <div className="bp5-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp5-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp5-group16">
                <div className="bp5-yury">
                  Yury
                </div>
                <div className="bp5-developer">
                  Developer
                </div>
                <div className="bp5-tularussia">
                  Tula, Russia
                </div>
                <div className="bp5-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp5-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp5-group17">
                <div className="bp5-elena">
                  Elena
                </div>
                <div className="bp5-moscowrussia">
                  Moscow, Russia
                </div>
                <div className="bp5-workedatingatera">
                  Worked at Ingate, Rambler
                </div>
                <div className="bp5-itanalyst">
                  IT Analyst
                </div>
                <div className="bp5-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp5-group18">
                <div className="bp5-sergey">
                  Sergey
                </div>
                <div className="bp5-tularussia">
                  Tula, Russia
                </div>
                <div className="bp5-workedatiigdevex">
                  Worked at IIG, DevExpress, GMCS
                </div>
                <div className="bp5-developer">
                  Developer
                </div>
                <div className="bp5-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp5-group19">
                <div className="bp5-uiuxdesigner">
                  UI/UX Designer
                </div>
                <div className="bp5-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp5-workedatingatere">
                  Worked at Ingate, Rembot
                </div>
                <div className="bp5-maria">
                  Maria
                </div>
                <img anima-src={require('./images/furnasmobilehorizonteng-suitcase.svg')} className="bp5-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-placeholder-2.svg')} className="bp5-placeholder2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp5-group14">
                <div className="bp5-sergey">
                  Sergey
                </div>
                <div className="bp5-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp5-workedatiigingat">
                  Worked at IIG, Ingate, Grabr
                </div>
                <div className="bp5-developer">
                  Developer
                </div>
                <div className="bp5-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp5-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp5-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp5-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp5-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp5-stackedgroup-layout-container">
            <div className="bp5-stackedgroup">
              <div className="bp5-group29">
                <div className="bp5-links">
                  Links
                </div>
                <a href="https://medium.com/@furnasteam" target="_blank">
                  <div className="bp5-articles">
                    Articles
                  </div>
                </a>
                <a href="https://visa.furnas.ru" target="_blank">
                  <div className="bp5-visafurnasru">
                    visa.furnas.ru
                  </div>
                </a>
                <a href="tel:+7(915)682-19-55" target="_blank">
                  <div className="bp5-a79156821955">
                    +7(915) 682-19-55
                  </div>
                </a>
                <div className="bp5-furnasteamgmailcom">
                  furnasteam@gmail.com
                </div>
                <div className="bp5-stackedgroup1">
                  <div className="bp5-contact">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bp2-furnasdesktopeng">
          <img anima-src={require('./images/furnasdesktopeng-bitmap.png')} className="bp2-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-reflection">
            REFLECTION
          </div>
          <div className="bp2-opiniontechnology">
            Opinion, technology, style… It doesn’t matter. <br/>Find yourself, find your reflection.
          </div>
          <div className="bp2-furnas">
            Furnas
          </div>
          <a href="#rectangle-9">
            <div className="bp2-what">
              What
            </div>
          </a>
          <a href="#bitmap">
            <div className="bp2-who">
              Who
            </div>
          </a>
          <a href="#rectangle">
            <div className="bp2-why">
              Why
            </div>
          </a>
          <a href="#group-18">
            <div className="bp2-where">
              Where
            </div>
          </a>
          <a href="https://furnas.ru" target="_blank">
            <div className="bp2-ru">
              RU
            </div>
          </a>
          <div className="bp2-en">
            EN
          </div>
          <div className="bp2-rectangle9" id="rectangle-9">
          </div>
          <div className="bp2-whatwedo">
            What we do
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-rectangle-9.png')} className="bp2-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-group13-layout-container">
            <img anima-src={require('./images/furnasmobilehorizonteng-group-13.png')} className="bp2-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-group19">
            <div className="bp2-website">
              Website
            </div>
            <div className="bp2-whatkindof">
              What kind of
            </div>
            <div className="bp2-howwework">
              How we work
            </div>
            <div className="bp2-whatweuse">
              What we use
            </div>
            <div className="bp2-designwebsitelayou">
              Design <br/>Website Layout<br/>Content Creation<br/>Set Up Google Analytics and Yandex.Metrica<br/>Set Up Ads<br/>Web banner design
            </div>
            <div className="bp2-landingpagebusines">
              Landing Page <br/>Business Card Website<br/>Corporate Website<br/>Events Website <br/>Cafe / Coffee Shop / Hotel Website
            </div>
            <div className="bp2-tildareactjsnod">
              Tilda, react js, node js, C#.
            </div>
          </div>
          <div className="bp2-group22">
            <div className="bp2-creatingforanypla">
              Creating for any platform
            </div>
            <div className="bp2-howwework">
              How we work
            </div>
            <div className="bp2-facebookinstagramv">
              Facebook <br/>Instagram<br/>Vk<br/>Web Banner<br/>Google Ads<br/>Outdoor Advertising
            </div>
            <div className="bp2-createauniqueillu">
              Create a unique illustration in Adobe Illustrator — from idea to final print.<br/>Image editing.
            </div>
            <div className="bp2-adbannerdesign">
              Ad banner design
            </div>
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-group.png')} className="bp2-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesktopeng-bitmap-1.png')} className="bp2-bitmap1" id="bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp2-group15-layout-container">
            <div className="bp2-group15">
              <div className="bp2-dreamteam">
                Dream team
              </div>
              <img anima-src={require('./images/furnastableteng-group-4@2x.png')} className="bp2-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktopeng-group-6@2x.png')} className="bp2-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-group-7@2x.png')} className="bp2-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-group-5@2x.png')} className="bp2-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-group201">
                <div className="bp2-uiuxdesigner">
                  UI/UX Designer
                </div>
                <div className="bp2-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp2-workedatingatere">
                  Worked at Ingate, Rembot
                </div>
                <div className="bp2-maria">
                  Maria
                </div>
                <img anima-src={require('./images/furnasmobilehorizonteng-suitcase.svg')} className="bp2-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-placeholder-2.svg')} className="bp2-placeholder2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp2-group211">
                <div className="bp2-yury">
                  Yury
                </div>
                <div className="bp2-developer">
                  Developer
                </div>
                <div className="bp2-tularussia">
                  Tula, Russia
                </div>
                <div className="bp2-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp2-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp2-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group24">
                <div className="bp2-elena">
                  Elena
                </div>
                <div className="bp2-moscowrussia">
                  Moscow, Russia
                </div>
                <div className="bp2-workedatingatera">
                  Worked at Ingate, Rambler
                </div>
                <div className="bp2-itanalyst">
                  IT Analyst
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp2-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp2-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-6-1@2x.png')} className="bp2-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-group-7@2x.png')} className="bp2-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-group23">
                <div className="bp2-maria">
                  Maria
                </div>
                <div className="bp2-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp2-kaliningradrussia">
                  Kaliningrad, Russia
                </div>
                <div className="bp2-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp2-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp2-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group221">
                <div className="bp2-sergey">
                  Sergey
                </div>
                <div className="bp2-tularussia">
                  Tula, Russia
                </div>
                <div className="bp2-workedatiigdevex">
                  Worked at IIG, DevExpress, GMCS
                </div>
                <div className="bp2-developer">
                  Developer
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp2-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp2-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp2-group25">
                <div className="bp2-sergey">
                  Sergey
                </div>
                <div className="bp2-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp2-workedatiigingat">
                  Worked at IIG, Ingate, Grabr
                </div>
                <div className="bp2-developer">
                  Developer
                </div>
                <div className="bp2-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp2-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp2-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp2-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp2-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp2-whoweare">
            Who we are
          </div>
          <div className="bp2-furnasu2014itmeanspe">
            <span className="bp2-span1">Furnas </span><span className="bp2-span2">— it means people who used to work together and now live in different cities.<br/>We are still friends, keep visiting each other and have fun. Now we are working together again and doing what we love.</span>
          </div>
          <div className="bp2-rectangle" id="rectangle">
          </div>
          <div className="bp2-rectangle92">
          </div>
          <div className="bp2-contact">
            Contact
          </div>
          <div className="bp2-links">
            Links
          </div>
          <a href="tel:+7(915)682-19-55" target="_blank">
            <div className="bp2-a79156821955">
              +7(915) 682-19-55
            </div>
          </a>
          <div className="bp2-furnasteamgmailcom">
            furnasteam@gmail.com
          </div>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <div className="bp2-articles">
              Articles
            </div>
          </a>
          <a href="https://visa.furnas.ru" target="_blank">
            <div className="bp2-visafurnasru">
              visa.furnas.ru
            </div>
          </a>
          <div className="bp2-social">
            Social
          </div>
          <a href="https://vk.com/furnas" target="_blank">
            <div className="bp2-rectangle12">
            </div>
          </a>
          <a href="https://vk.com/furnas" target="_blank">
            <img anima-src={require('./images/furnasmobilehorizonteng-shape-20@2x.png')} className="bp2-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.instagram.com/furnasteam/" target="_blank">
            <div className="bp2-rectangle121">
            </div>
          </a>
          <a href="https://www.instagram.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasmobilehorizonteng-combined-shape@2x.png')} className="bp2-combinedshape"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.facebook.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-12.png')} className="bp2-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.facebook.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnastableteng-shape-21@2x.png')} className="bp2-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <div className="bp2-rectangle123">
            </div>
          </a>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <img anima-src={require('./images/furnastableteng-m@2x.png')} className="bp2-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <div className="bp2-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp2-group191-layout-container">
            <div className="bp2-group191">
              <div className="bp2-group14">
                <img anima-src={require('./images/furnasdesktopeng-group-12@2x.png')} className="bp2-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp2-phone">
                  Phone
                </div>
                <Input value={this.state.phone}
                       onChange={this.handlePhoneChange}
                       className="landing__phone-input-desktop"/>
                <div className="bp2-email">
                  Email
                </div>
                <Input value={this.state.email}
                       onChange={this.handleEmailChange}
                       className="landing__email-input-desktop"/>
                <div className="bp2-skype">
                  Skype
                </div>
                <Input value={this.state.skype}
                       onChange={this.handleSkypeChange}
                       className="landing__skype-input-desktop"/>
                <div className="bp2-message">
                  Message
                </div>
                <Input value={this.state.message}
                       onChange={this.handleMessageChange}
                       className="landing__message-input-desktop"/>
                <div className="bp2-contact1">
                  Contact
                </div>
                <div className="bp2-group2" onClick={this.handleSendDataClick}>
                  <div className="bp2-rectangle17">
                  </div>
                  <div className="bp2-send">
                    {this.state.sent ? 'Sent' : 'Send'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp2-group18-layout-container">
            <div className="bp2-group18" id="group-18">
              <div className="bp2-where1">
                Where?
              </div>
              <div className="bp2-design">
                DESIGN
              </div>
              <div className="bp2-code">
                CODE
              </div>
              <div className="bp2-articles1">
                ARTICLES
              </div>
              <div className="bp2-spainvisaourproj">
                SPAIN VISA <br/>(OUR PROJECT)
              </div>
              <a href="https://dribbble.com/sanmary" target="_blank">
                <div className="bp2-dribbblecom">
                  DRIBBBLE.COM
                </div>
              </a>
              <a href="https://github.com/furnasteam" target="_blank">
                <div className="bp2-githubcom">
                  GITHUB.COM
                </div>
              </a>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <div className="bp2-mediumcom">
                  MEDIUM.COM
                </div>
              </a>
              <a href="https://visa.furnas.ru" target="_blank">
                <div className="bp2-visafurnasru1">
                  VISA.FURNAS.RU
                </div>
              </a>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-phone">
                PHONE
              </div>
              <a href="tel:+7(915)682-19-55" target="_blank">
                <div className="bp2-a791568219551">
                  +7(915)682-19-55
                </div>
              </a>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp2-email">
                EMAIL
              </div>
              <div className="bp2-furnasteamgmailcom1">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp2-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp2-group17">
            <div className="bp2-webstudiodesign">
              web-studio design
            </div>
            <div className="bp2-alargecompanyspen">
              A large company spend money on office rent, manager's salary and etc. Junior works on your project because real performer got a bit of money. We don’t have any office, managers or
              cleaner staff. In our company developers get all the money.
            </div>
            <div className="bp2-whywearebetterth">
              Why we <br/>are better<br/>than…?
            </div>
            <img anima-src={require('./images/furnasdesktopeng-group-10.svg')} className="bp2-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-group16">
            <div className="bp2-onedayyouhavesom">
              One day you have some extra work and you make a decision to hire an employee. Afterwards he has nothing to do and he is not happy with you. So you don’t like his attitude at work.<br/>At
              first it will be better to work with us. We can work right now. In case of regular task you should think about full-time employee.
            </div>
            <div className="bp2-employee">
              employee
            </div>
            <div className="bp2-weworkedinlargec">
              We worked in large companies with high quality standards. We know development methodologies and work under contract.
            </div>
            <div className="bp2-freelance">
              freelance
            </div>
            <img anima-src={require('./images/furnasdesktopeng-group-8.svg')} className="bp2-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesktopeng-group-11.svg')} className="bp2-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp2-rectangle1">
          </div>
          <a href="https://spark.ru/startup/furnas" target="_blank">
            <div className="bp2-rectangle124">
            </div>
          </a>
          <a href="https://spark.ru/startup/furnas" target="_blank">
            <img anima-src={require('./images/furnastableteng-s@2x.png')} className="bp2-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <div className="bp2-group20">
            <div className="bp2-wecanhelpyouwith">
              We can help you with
            </div>
            <div className="bp2-whatweuse">
              What we use
            </div>
            <div className="bp2-u0421reatingmvpwebapp">
              Сreating MVP<br/>Web Application Architecture Development<br/>Hypothesis Testing<br/>Set Up Ads<br/>Design advertising banner<br/>Data Сollection &amp; Analysis<br/>HR consultation
            </div>
            <div className="bp2-reactjscjava">
              React js, C#, Java, Python.
            </div>
            <div className="bp2-startup">
              Startup
            </div>
          </div>
          <div className="bp2-group21">
            <div className="bp2-createauniqueillu">
              Create a unique illustration for presentation, ad, article, website, banner, flyer.
            </div>
            <div className="bp2-illustration">
              Illustration
            </div>
          </div>
        </div>
        <div className="bp3-furnastableteng">
          <img anima-src={require('./images/furnastableteng-bitmap.png')} className="bp3-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-rectangle9" id="rectangle-91">
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-rectangle-9.png')} className="bp3-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-group13-layout-container">
            <img anima-src={require('./images/furnasmobilehorizonteng-group-13.png')} className="bp3-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnastableteng-bitmap-1.png')} className="bp3-bitmap1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-whoweare" id="who-we-are">
            Who we are
          </div>
          <div className="bp3-furnasu2014itmeanspe">
            <span className="bp3-span1">Furnas </span><span className="bp3-span2">— it means people who used to work together and now live in different cities.<br/>We are still friends, keep visiting each other and have fun. Now we are working together again and doing what we love.</span>
          </div>
          <div className="bp3-u0421u0430u0439u0442u044b">
            Website
          </div>
          <div className="bp3-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            What kind of
          </div>
          <div className="bp3-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            How we work
          </div>
          <div className="bp3-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            What we use
          </div>
          <div className="bp3-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Creating for any platform
          </div>
          <div className="bp3-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            How we work
          </div>
          <div className="bp3-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Design <br/>Website Layout<br/>Content Creation<br/>Set Up Google Analytics and Yandex.Metrica<br/>Set Up Ads<br/>Web banner design
          </div>
          <div className="bp3-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Landing Page <br/>Business Card Website <br/>Corporate Website<br/>Events Website <br/>Cafe / Coffee Shop / Hotel Website
          </div>
          <div className="bp3-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp3-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>баннеры на сайтах, <br/>рекламная сеть яндекса, <br/>google ads, <br/>наружная реклама.
          </div>
          <div className="bp3-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Create a unique illustration in Adobe Illustrator — from idea to final  print.<br/>Image editing.
          </div>
          <div className="bp3-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Сreating  MVP<br/>Web Application Architecture Development<br/>Hypothesis Testing<br/>Set Up Ads<br/>Design advertising banner<br/>Data Сollection & Analysis
          <br/>HR consultation
          </div>
          <div className="bp3-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp3-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Create a unique illustration for presentation,  ad, article,  website, banner, flyer.
          </div>
          <div className="bp3-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Рекламные <br/>баннеры
          </div>
          <img anima-src={require('./images/furnastableteng-group.png')} className="bp3-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp3-whatwedo">
            What we do
          </div>
          <div className="bp3-reflection">
            REFLECTION
          </div>
          <div className="bp3-opiniontechnology">
            Opinion, technology, style… It doesn’t matter. <br/>Find yourself, find your reflection.
          </div>
          <div className="bp3-furnas">
            Furnas
          </div>
          <a href="#rectangle-91">
            <div className="bp3-what">
              What
            </div>
          </a>
          <a href="#who-we-are">
            <div className="bp3-who">
              Who
            </div>
          </a>
          <a href="#rectangle1">
            <div className="bp3-why">
              Why
            </div>
          </a>
          <a href="#group-16">
            <div className="bp3-where">
              Where
            </div>
          </a>
          <div className="bp3-ru">
            RU
          </div>
          <div className="bp3-en">
            EN
          </div>
          <div className="bp3-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            We can help you with
          </div>
          <div className="bp3-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            What we use
          </div>
          <div className="bp3-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Illustration
          </div>
          <div className="bp3-u0421u0442u0430u0440u0442u0430u043fu044b">
            Startup
          </div>
          <div className="bp3-rectangle" id="rectangle1">
          </div>
          <div className="bp3-rectangle92">
          </div>
          <div className="bp3-contact">
            Contact
          </div>
          <div className="bp3-links">
            Links
          </div>
          <a href="tel:+7(915)682-19-55" target="_blank">
            <div className="bp3-a79156821955">
              +7(915) 682-19-55
            </div>
          </a>
          <div className="bp3-furnasteamgmailcom">
            furnasteam@gmail.com
          </div>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <div className="bp3-articles">
              Articles
            </div>
          </a>
          <a href="https://visa.furnas.ru" target="_blank">
            <div className="bp3-visafurnasru">
              visa.furnas.ru
            </div>
          </a>
          <div className="bp3-social">
            Social
          </div>
          <a href="https://vk.com/furnas" target="_blank">
            <div className="bp3-rectangle12">
            </div>
          </a>
          <a href="https://vk.com/furnas" target="_blank">
            <img anima-src={require('./images/furnastableteng-shape@2x.png')} className="bp3-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.instagram.com/furnasteam/" target="_blank">
            <div className="bp3-rectangle121">
            </div>
          </a>
          <a href="https://www.facebook.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-12.png')} className="bp3-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <div className="bp3-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp3-group17-layout-container">
            <div className="bp3-group17">
              <div className="bp3-group14">
                <img anima-src={require('./images/furnastableteng-group-12@2x.png')} className="bp3-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp3-phone">
                  Phone
                </div>
                <Input value={this.state.phone}
                       onChange={this.handlePhoneChange}
                       className="landing__phone-input-tablet"/>
                <div className="bp3-email">
                  Email
                </div>
                <Input value={this.state.email}
                       onChange={this.handleEmailChange}
                       className="landing__email-input-tablet"/>
                <div className="bp3-skype">
                  Skype
                </div>
                <Input value={this.state.skype}
                       onChange={this.handleSkypeChange}
                       className="landing__skype-input-tablet"/>
                <div className="bp3-message">
                  Message
                </div>
                <Input value={this.state.message}
                       onChange={this.handleMessageChange}
                       className="landing__message-input-tablet"/>
                <div className="bp3-contact1">
                  Contact
                </div>
                <div className="bp3-group2" onClick={this.handleSendDataClick}>
                  <div className="bp3-rectangle17">
                  </div>
                  <div className="bp3-send">
                    {this.state.sent ? 'Sent' : 'Send'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp3-group16-layout-container">
            <div className="bp3-group16" id="group-16">
              <div className="bp3-where1">
                Where?
              </div>
              <div className="bp3-design">
                DESIGN
              </div>
              <div className="bp3-code">
                CODE
              </div>
              <div className="bp3-articles1">
                ARTICLES
              </div>
              <div className="bp3-spainvisaourproj">
                SPAIN VISA <br/>(OUR PROJECT)
              </div>
              <a href="https://dribbble.com/sanmary" target="_blank">
                <div className="bp3-dribbblecom">
                  DRIBBBLE.COM
                </div>
              </a>
              <a href="https://github.com/furnasteam" target="_blank">
                <div className="bp3-githubcom">
                  GITHUB.COM
                </div>
              </a>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <div className="bp3-mediumcom">
                  MEDIUM.COM
                </div>
              </a>
              <a href="https://visa.furnas.ru" target="_blank">
                <div className="bp3-visafurnasru1">
                  VISA.FURNAS.RU
                </div>
              </a>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-phone">
                PHONE
              </div>
              <a href="tel:+7(915)682-19-55" target="_blank">
                <div className="bp3-a791568219551">
                  +7(915)682-19-55
                </div>
              </a>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-email">
                EMAIL
              </div>
              <div className="bp3-furnasteamgmailcom1">
                FURNASTEAM@GMAIL.COM
              </div>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastableteng-oval-18-4@2x.png')} className="bp3-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
          </div>
          <div className="bp3-group19">
            <div className="bp3-webstudiodesign">
              web-studio design
            </div>
            <div className="bp3-alargecompanyspen">
              A large company spend money on office rent, manager's salary and etc. Junior works on your project because real performer got a bit of money. We don’t have any office, managers or
              cleaner staff. In our company developers get all the money. <br/>
            </div>
            <div className="bp3-whywearebetterth">
              Why we <br/>are better<br/>than…?
            </div>
            <img anima-src={require('./images/furnasmobileeng-group-10.svg')} className="bp3-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp3-group18">
            <div className="bp3-onedayyouhavesom">
              One day you have some extra work and you make a decision to hire an employee. Afterwards he has nothing to do and he is not happy with you. So you don’t like his attitude at work.<br/>At
              first it will be better to work with us. We can work right now. In case of regular task you should think about full-time employee.
            </div>
            <div className="bp3-employee">
              employee
            </div>
            <div className="bp3-weworkedinlargec">
              We worked in large companies with high quality standards. We know development methodologies and work under contract.
            </div>
            <div className="bp3-freelance">
              freelance
            </div>
            <img anima-src={require('./images/furnastableteng-group-8.svg')} className="bp3-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasmobileeng-group-11.svg')} className="bp3-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp3-group15-layout-container">
            <div className="bp3-group15">
              <div className="bp3-dreamteam">
                Dream team
              </div>
              <div className="bp3-sergey">
                Sergey
              </div>
              <div className="bp3-saintpetersburgru">
                Saint Petersburg, Russia
              </div>
              <div className="bp3-workedatiigingat">
                Worked at IIG, Ingate, Grabr
              </div>
              <img anima-src={require('./images/furnastableteng-group-4@2x.png')} className="bp3-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesctophdeng-group-5@2x.png')} className="bp3-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-developer">
                Developer
              </div>
              <div className="bp3-group20">
                <div className="bp3-uiuxdesigner">
                  UI/UX Designer
                </div>
                <div className="bp3-saintpetersburgru1">
                  Saint Petersburg, Russia
                </div>
                <div className="bp3-workedatingatere">
                  Worked at Ingate, Rembot
                </div>
                <div className="bp3-maria">
                  Maria
                </div>
                <img anima-src={require('./images/furnasmobilehorizonteng-suitcase.svg')} className="bp3-suitcase3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-placeholder-2.svg')} className="bp3-placeholder23" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp3-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp3-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-sergey1">
                Sergey
              </div>
              <img anima-src={require('./images/furnasmobileeng-group-7@2x.png')} className="bp3-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-tularussia">
                Tula, Russia
              </div>
              <div className="bp3-workedatiigdevex">
                Worked at IIG, DevExpress, GMCS
              </div>
              <div className="bp3-developer1">
                Developer
              </div>
              <div className="bp3-suitcase1">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-placeholder21">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp3-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp3-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <img anima-src={require('./images/furnasdesctophdeng-group-7@2x.png')} className="bp3-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-group21">
                <div className="bp3-elena">
                  Elena
                </div>
                <div className="bp3-moscowrussia">
                  Moscow, Russia
                </div>
                <div className="bp3-workedatingatera">
                  Worked at Ingate, Rambler
                </div>
                <div className="bp3-itanalyst">
                  IT Analyst
                </div>
                <div className="bp3-suitcase3">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder23">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp3-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp3-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp3-yury">
                Yury
              </div>
              <img anima-src={require('./images/furnasdesktopeng-group-6@2x.png')} className="bp3-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-developer2">
                Developer
              </div>
              <div className="bp3-tularussia1">
                Tula, Russia
              </div>
              <div className="bp3-workedatiigingat1">
                Worked at IIG, Ingate
              </div>
              <div className="bp3-suitcase2">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp3-placeholder22">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp3-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp3-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-6-1@2x.png')} className="bp3-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp3-group22">
                <div className="bp3-maria">
                  Maria
                </div>
                <div className="bp3-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp3-kaliningradrussia">
                  Kaliningrad, Russia
                </div>
                <div className="bp3-workedatiigingat2">
                  Worked at IIG, Ingate
                </div>
                <div className="bp3-suitcase3">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp3-placeholder23">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp3-shape3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp3-shape11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp3-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp3-rectangle1">
          </div>
          <a href="https://www.instagram.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasmobilehorizonteng-combined-shape@2x.png')} className="bp3-combinedshape"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.facebook.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnastableteng-shape-21@2x.png')} className="bp3-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <div className="bp3-rectangle123">
            </div>
          </a>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <img anima-src={require('./images/furnastableteng-m@2x.png')} className="bp3-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://spark.ru/startup/furnas" target="_blank">
            <div className="bp3-rectangle124">
            </div>
          </a>
          <a href="https://spark.ru/startup/furnas" target="_blank">
            <img anima-src={require('./images/furnastableteng-s@2x.png')} className="bp3-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
        </div>
        <div className="bp4-furnasmobilehorizonteng">
          <img anima-src={require('./images/furnasmobilehorizonteng-bitmap.png')} className="bp4-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-rectangle9" id="rectangle-92">
          </div>
          <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-9.png')} className="bp4-rectangle91" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-group13-layout-container">
            <img anima-src={require('./images/furnasmobilehorizonteng-group-13.png')} className="bp4-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnasmobilehorizonteng-bitmap-1.png')} className="bp4-bitmap1" id="bitmap1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-rectangle" id="rectangle2">
          </div>
          <div className="bp4-group27-layout-container">
            <div className="bp4-group27" id="group-27">
              <div className="bp4-where1">
                Where?
              </div>
              <div className="bp4-group23">
                <div className="bp4-design">
                  DESIGN
                </div>
                <div className="bp4-code">
                  CODE
                </div>
                <div className="bp4-articles">
                  ARTICLES
                </div>
                <div className="bp4-spainvisaourproj">
                  SPAIN VISA <br/>(OUR PROJECT)
                </div>
                <a href="https://dribbble.com/sanmary" target="_blank">
                  <div className="bp4-dribbblecom">
                    DRIBBBLE.COM
                  </div>
                </a>
                <a href="https://github.com/furnasteam" target="_blank">
                  <div className="bp4-githubcom">
                    GITHUB.COM
                  </div>
                </a>
                <a href="https://medium.com/@furnasteam" target="_blank">
                  <div className="bp4-mediumcom">
                    MEDIUM.COM
                  </div>
                </a>
                <a href="https://visa.furnas.ru" target="_blank">
                  <div className="bp4-visafurnasru">
                    VISA.FURNAS.RU
                  </div>
                </a>
                <div className="bp4-phone">
                  PHONE
                </div>
                <a href="tel:+7(915)682-19-55" target="_blank">
                  <div className="bp4-a79156821955">
                    +7(915)682-19-55
                  </div>
                </a>
                <div className="bp4-email">
                  EMAIL
                </div>
                <div className="bp4-furnasteamgmailcom">
                  FURNASTEAM@GMAIL.COM
                </div>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4@2x.png')} className="bp4-line4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4-1@2x.png')} className="bp4-line41" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4-2.png')} className="bp4-line42" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4-3@2x.png')} className="bp4-line43" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4-4@2x.png')} className="bp4-line44" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobilehorizonteng-line-4-5@2x.png')} className="bp4-line45" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <div className="bp4-group28-layout-container">
            <div className="bp4-group28">
              <div className="bp4-group26">
                <img anima-src={require('./images/furnasmobilehorizonteng-group-12.png')} className="bp4-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="bp4-phone">
                  Phone
                </div>
                <Input value={this.state.phone}
                       onChange={this.handlePhoneChange}
                       className="landing__phone-input-mobileland"/>
                <div className="bp4-message">
                  Message
                </div>
                <textarea value={this.state.message}
                          onChange={this.handleMessageChange}
                          className="landing__message-input-mobileland"/>
                <div className="bp4-contact">
                  Contact
                </div>
                <div className="bp4-email">
                  Email
                </div>
                <Input value={this.state.email}
                       onChange={this.handleEmailChange}
                       className="landing__email-input-mobileland"/>
                <div className="bp4-skype">
                  Skype
                </div>
                <Input value={this.state.skype}
                       onChange={this.handleSkypeChange}
                       className="landing__skype-input-mobileland"/>
              </div>
              <div className="bp4-group2" onClick={this.handleSendDataClick}>
                <div className="bp4-rectangle17">
                </div>
                <div className="bp4-send">
                  {this.state.sent ? 'Sent' : 'Send'}
                </div>
              </div>
            </div>
          </div>
          <div className="bp4-rectangle1">
          </div>
          <div className="bp4-group25-layout-container">
            <div className="bp4-group25">
              <div className="bp4-whywearebetterth">
                Why we <br/>are better<br/>than…?
              </div>
              <div className="bp4-group20">
                <div className="bp4-weworkedinlargec">
                  We worked in large companies with high quality standards. We know development methodologies and work under contract.
                </div>
                <div className="bp4-freelance">
                  freelance
                </div>
                <img anima-src={require('./images/furnastableteng-group-8.svg')} className="bp4-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp4-group21">
                <div className="bp4-onedayyouhavesom">
                  One day you have some extra work and you make a decision to hire an employee. Afterwards he has nothing to do and he is not happy with you. So you don’t like his attitude at
                  work.<br/>At first it will be better to work with us. We can work right now. In case of regular task you should think about full-time employee.
                </div>
                <div className="bp4-employee">
                  employee
                </div>
                <img anima-src={require('./images/furnasmobileeng-group-11.svg')} className="bp4-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp4-group22">
                <div className="bp4-webstudiodesign">
                  web-studio design
                </div>
                <div className="bp4-alargecompanyspen">
                  A large company spend money on office rent, manager's salary and etc. Junior works on your project because real performer got a bit of money. We don’t have any office, managers or
                  cleaner staff. In our company developers get all the money.
                </div>
                <img anima-src={require('./images/furnasmobileeng-group-10.svg')} className="bp4-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <div className="bp4-group29-layout-container">
            <div className="bp4-group29">
              <div className="bp4-dreamteam">
                Dream team
              </div>
              <img anima-src={require('./images/furnasdesctophdeng-group-5@2x.png')} className="bp4-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnastableteng-group-4@2x.png')} className="bp4-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-group-7@2x.png')} className="bp4-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-7-1@2x.png')} className="bp4-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasdesktopeng-group-6@2x.png')} className="bp4-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobilehorizonteng-group-6-1@2x.png')} className="bp4-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <div className="bp4-group15">
                <div className="bp4-maria">
                  Maria
                </div>
                <div className="bp4-mobiledesigner">
                  Mobile Designer
                </div>
                <div className="bp4-kaliningradrussia">
                  Kaliningrad, Russia
                </div>
                <div className="bp4-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group16">
                <div className="bp4-yury">
                  Yury
                </div>
                <div className="bp4-developer">
                  Developer
                </div>
                <div className="bp4-tularussia">
                  Tula, Russia
                </div>
                <div className="bp4-workedatiigingat">
                  Worked at IIG, Ingate
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group17">
                <div className="bp4-elena">
                  Elena
                </div>
                <div className="bp4-moscowrussia">
                  Moscow, Russia
                </div>
                <div className="bp4-workedatingatera">
                  Worked at Ingate, Rambler
                </div>
                <div className="bp4-itanalyst">
                  IT Analyst
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group18">
                <div className="bp4-sergey">
                  Sergey
                </div>
                <div className="bp4-tularussia">
                  Tula, Russia
                </div>
                <div className="bp4-workedatiigdevex">
                  Worked at IIG, DevExpress, GMCS
                </div>
                <div className="bp4-developer">
                  Developer
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
              <div className="bp4-group19">
                <div className="bp4-uiuxdesigner">
                  UI/UX Designer
                </div>
                <div className="bp4-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp4-workedatingatere">
                  Worked at Ingate, Rembot
                </div>
                <div className="bp4-maria">
                  Maria
                </div>
                <img anima-src={require('./images/furnasmobilehorizonteng-suitcase.svg')} className="bp4-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-placeholder-2.svg')} className="bp4-placeholder2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp4-group14">
                <div className="bp4-sergey">
                  Sergey
                </div>
                <div className="bp4-saintpetersburgru">
                  Saint Petersburg, Russia
                </div>
                <div className="bp4-workedatiigingat">
                  Worked at IIG, Ingate, Grabr
                </div>
                <div className="bp4-developer">
                  Developer
                </div>
                <div className="bp4-suitcase">
                  <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
                <div className="bp4-placeholder2">
                  <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                  <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp4-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                </div>
              </div>
            </div>
          </div>
          <div className="bp4-whoweare">
            Who we are
          </div>
          <div className="bp4-furnasu2014itmeanspe">
            <span className="bp4-span1">Furnas </span><span className="bp4-span2">— it means people who used to work together and now live in different cities.<br/>We are still friends, keep visiting each other and have fun. Now we are working together again and doing what we love.</span>
          </div>
          <img anima-src={require('./images/furnasmobilehorizonteng-group.png')} className="bp4-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp4-u0421u0430u0439u0442u044b">
            Website
          </div>
          <div className="bp4-u041au0430u043au0438u0435u0441u0430u0439u0442u044b">
            What kind of
          </div>
          <div className="bp4-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c">
            How we work
          </div>
          <div className="bp4-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c">
            What we use
          </div>
          <div className="bp4-u0414u0438u0437u0430u0439u043du0412u0435u0440u0441u0442u043au0430u0421u043eu0437u0434u0430">
            Design <br/>Website Layout<br/>Content Creation<br/>Set Up Google Analytics and Yandex.Metrica<br/>Set Up Ads<br/>Web banner design
          </div>
          <div className="bp4-u041bu0435u043du0434u0438u043du0433u0438u041fu0440u043eu0434u0430u044eu0449u0438u0435u0441">
            Landing Page <br/>Business Card Website <br/>Corporate Website<br/>Events Website <br/>Cafe / Coffee Shop / Hotel Website
          </div>
          <div className="bp4-u0422u0438u043bu044cu0434u0430reactjsno">
            Тильда, react js, node js, C#.
          </div>
          <div className="bp4-u0421u043eu0437u0434u0430u043du0438u0435u043fu0435u0440u0432u043eu0439u0436u0438u0437u043d">
            Сreating  MVP <br/>Web Application Architecture Development<br/>Hypothesis Testing<br/>Set Up Ads<br/>Design advertising banner<br/>Data Сollection & Analysis
          <br/>HR consultation
          </div>
          <div className="bp4-reactjscjava">
            React js, C#, Java, Python.
          </div>
          <div className="bp4-u041eu0442u0440u0438u0441u043eu0432u043au0430u043fu043eu0434u043bu044eu0431u044bu0435">
            Creating for any platform
          </div>
          <div className="bp4-u041au0430u043au0440u0430u0431u043eu0442u0430u0435u043c1">
            Как работаем
          </div>
          <div className="bp4-facebookinstagram">
            facebook, <br/>instagram, <br/>vk, <br/>Web Banner, <br/>google ads, <br/>Outdoor Advertising.
          </div>
          <div className="bp4-u041eu0442u0440u0438u0441u043eu0432u043au0430u0443u043du0438u043au0430u043bu044cu043du044bu0445">
            Create a unique illustration in Adobe Illustrator — from idea to final  print.<br/>Image editing.
          </div>
          <div className="bp4-u041fu0440u0438u0434u0443u043cu044bu0432u0430u0435u043cu0438u0440u0438u0441u0443u0435u043c">
            Create a unique illustration for presentation,  ad, article,  website, banner, flyer.
          </div>
          <div className="bp4-u0418u043bu043bu044eu0441u0442u0440u0430u0446u0438u0438">
            Illustration
          </div>
          <div className="bp4-u0420u0435u043au043bu0430u043cu043du044bu0435u0431u0430u043du043du0435u0440u044b">
            Ad banner design
          </div>
          <div className="bp4-u0421u0447u0435u043cu043fu043eu043cu043eu0436u0435u043c">
            We can help you with
          </div>
          <div className="bp4-u0427u0442u043eu0438u0441u043fu043eu043bu044cu0437u0443u0435u043c1">
            What we use
          </div>
          <div className="bp4-u0421u0442u0430u0440u0442u0430u043fu044b">
            Startup
          </div>
          <div className="bp4-whatwedo">
            What we do
          </div>
          <div className="bp4-reflection">
            REFLECTION
          </div>
          <div className="bp4-opiniontechnology">
            Opinion, technology, style… It doesn’t matter. <br/>Find yourself, find your reflection.
          </div>
          <div className="bp4-furnas">
            Furnas
          </div>
          <a href="https://furnas.ru" target="_blank">
            <div className="bp4-ru">
              RU
            </div>
          </a>
          <div className="bp4-en">
            EN
          </div>
          <a href="#rectangle-92">
            <div className="bp4-what">
              What
            </div>
          </a>
          <a href="#bitmap1">
            <div className="bp4-who">
              Who
            </div>
          </a>
          <a href="#rectangle2">
            <div className="bp4-why">
              Why
            </div>
          </a>
          <a href="#group-27">
            <div className="bp4-where">
              Where
            </div>
          </a>
          <div className="bp4-rectangle92">
          </div>
          <div className="bp4-group24">
            <div className="bp4-social">
              Social
            </div>
            <a href="https://vk.com/furnas" target="_blank">
              <div className="bp4-rectangle12">
              </div>
            </a>
            <a href="https://vk.com/furnas" target="_blank">
              <img anima-src={require('./images/furnasmobilehorizonteng-shape-20@2x.png')} className="bp4-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
            <a href="https://www.instagram.com/furnasteam/" target="_blank">
              <div className="bp4-rectangle121">
              </div>
            </a>
            <a href="https://www.instagram.com/furnasteam/" target="_blank">
              <img anima-src={require('./images/furnasmobilehorizonteng-combined-shape@2x.png')} className="bp4-combinedshape"
                   src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
            <a href="https://www.facebook.com/furnasteam/" target="_blank">
              <img anima-src={require('./images/furnasmobilehorizonteng-rectangle-12.png')} className="bp4-rectangle122" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
            <a href="https://www.facebook.com/furnasteam/" target="_blank">
              <img anima-src={require('./images/furnastableteng-shape-21@2x.png')} className="bp4-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
            <a href="https://medium.com/@furnasteam" target="_blank">
              <div className="bp4-rectangle123">
              </div>
            </a>
            <a href="https://medium.com/@furnasteam" target="_blank">
              <img anima-src={require('./images/furnasmobilehorizonteng-m@2x.png')} className="bp4-m" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
            <a href="https://spark.ru/startup/furnas" target="_blank">
              <div className="bp4-rectangle124">
              </div>
            </a>
            <a href="https://spark.ru/startup/furnas" target="_blank">
              <img anima-src={require('./images/furnasmobileeng-s@2x.png')} className="bp4-s" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </a>
          </div>
          <div className="bp4-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp4-group30-layout-container">
            <div className="bp4-group30">
              <div className="bp4-links">
                Links
              </div>
              <a href="https://medium.com/@furnasteam" target="_blank">
                <div className="bp4-articles">
                  Articles
                </div>
              </a>
              <a href="https://visa.furnas.ru" target="_blank">
                <div className="bp4-visafurnasru">
                  visa.furnas.ru
                </div>
              </a>
              <a href="tel:+7(915)682-19-55" target="_blank">
                <div className="bp4-a79156821955">
                  +7(915) 682-19-55
                </div>
              </a>
              <div className="bp4-furnasteamgmailcom">
                furnasteam@gmail.com
              </div>
              <div className="bp4-stackedgroup">
                <div className="bp4-contact">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bp1-furnasdesctophdeng">
          <img anima-src={require('./images/furnasdesctophdeng-bitmap.png')} className="bp1-bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-pictreeman1440-layout-container">
            <img anima-src={require('./images/furnasdesctophdeng-pictreeman1440.png')} className="bp1-pictreeman1440" id="pic-tree-man-1440"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-rectangle-9.png')} className="bp1-rectangle9" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-rectangle91" id="rectangle-93">
          </div>
          <div className="bp1-group13-layout-container">
            <img anima-src={require('./images/furnasdesctophdeng-group-13.png')} className="bp1-group13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp1-rectangle92">
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-group.png')} className="bp1-group" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophdeng-line-2@2x.png')} className="bp1-line2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-rectangle" id="rectangle3">
          </div>
          <div className="bp1-rectangle1">
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-star@2x.png')} className="bp1-star" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophdeng-star@2x.png')} className="bp1-star1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-whatwedo">
            What we do
          </div>
          <div className="bp1-whoweare">
            Who we are
          </div>
          <div className="bp1-group19">
            <div className="bp1-website">
              Website
            </div>
            <div className="bp1-whatkindof">
              What kind of
            </div>
            <div className="bp1-howwework">
              How we work
            </div>
            <div className="bp1-whatweuse">
              What we use
            </div>
            <div className="bp1-designwebsitelayou">
              Design <br/>Website Layout<br/>Content Creation<br/>Set Up Google Analytics and Yandex.Metrica<br/>Set Up Ads<br/>Web banner design
            </div>
            <div className="bp1-landingpagebusines">
              Landing Page <br/>Business Card Website<br/>Corporate Website<br/>Events Website <br/>Cafe / Coffee Shop / Hotel Website
            </div>
            <div className="bp1-tildareactjsnod">
              Tilda, react js, node js, C#.
            </div>
          </div>
          <div className="bp1-group21">
            <div className="bp1-createauniqueillu">
              Create a unique illustration for presentation, ad, article, website, banner, flyer.
            </div>
            <div className="bp1-illustration">
              Illustration
            </div>
          </div>
          <div className="bp1-group22">
            <div className="bp1-creatingforanypla">
              Creating for any platform
            </div>
            <div className="bp1-howwework">
              How we work
            </div>
            <div className="bp1-facebookinstagramv">
              Facebook <br/>Instagram<br/>Vk<br/>Web Banner<br/>Google Ads<br/>Outdoor Advertising
            </div>
            <div className="bp1-createauniqueillu">
              Create a unique illustration in Adobe Illustrator — from idea to final print.<br/>Image editing.
            </div>
            <div className="bp1-adbannerdesign">
              Ad banner design
            </div>
          </div>
          <div className="bp1-furnasu2014itmeanspe">
            <span className="bp1-span1">Furnas </span><span className="bp1-span2">— it means people who used to work together and now live in different cities.<br/>We are still friends, keep visiting each other and have fun. Now we are working together again and doing what we love.</span>
          </div>
          <div className="bp1-group20">
            <div className="bp1-wecanhelpyouwith">
              We can help you with
            </div>
            <div className="bp1-whatweuse">
              What we use
            </div>
            <div className="bp1-u0421reatingmvpwebapp">
              Сreating MVP<br/>Web Application Architecture Development<br/>Hypothesis Testing<br/>Set Up Ads<br/>Design advertising banner<br/>Data Сollection &amp; Analysis<br/>HR consultation
            </div>
            <div className="bp1-reactjscjava">
              React js, C#, Java, Python.
            </div>
            <div className="bp1-startup">
              Startup
            </div>
          </div>
          <div className="bp1-group16">
            <img anima-src={require('./images/furnasdesktopeng-group-12@2x.png')} className="bp1-group12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div className="bp1-phone">
              Phone
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
            <div className="bp1-message">
              Message
            </div>
            <Input className="landing__message-input-desktophd"
                   value={this.state.message}
                   onChange={this.handleMessageChange}/>
            <div className="bp1-contact1">
              Contact
            </div>
            <div className="bp1-group2" onClick={this.handleSendDataClick}>
              <div className="bp1-rectangle17">
              </div>
              <div className="bp1-send">
                {this.state.sent ? 'Sent' : 'Send'}
              </div>
            </div>
          </div>
          <div className="bp1-contact">
            Contact
          </div>
          <div className="bp1-links">
            Links
          </div>
          <a href="tel:+7(915)682-19-55" target="_blank">
            <div className="bp1-a79156821955">
              +7(915) 682-19-55
            </div>
          </a>
          <div className="bp1-furnasteamgmailcom">
            furnasteam@gmail.com
          </div>
          <a href="https://medium.com/@furnasteam" target="_blank">
            <div className="bp1-articles">
              Articles
            </div>
          </a>
          <a href="https://visa.furnas.ru" target="_blank">
            <div className="bp1-visafurnasru">
              visa.furnas.ru
            </div>
          </a>
          <div className="bp1-social">
            Social
          </div>
          <a href="https://vk.com/furnas" target="_blank">
            <img anima-src={require('./images/furnasdesctophdeng-vk.svg')} className="bp1-vk" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.instagram.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasdesctophdeng-instagram.svg')} className="bp1-instagram" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <a href="https://www.facebook.com/furnasteam/" target="_blank">
            <img anima-src={require('./images/furnasdesctophdeng-facebook.svg')} className="bp1-facebook" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </a>
          <img anima-src={require('./images/furnasdesctophdeng-media.svg')} className="bp1-media" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophdeng-spark.svg')} className="bp1-spark" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <div className="bp1-a2019251furnas">
            2019 © FURNAS
          </div>
          <div className="bp1-reflection">
            REFLECTION
          </div>
          <div className="bp1-opiniontechnology">
            Opinion, technology, style… It doesn’t matter. <br/>Find yourself, find your reflection.
          </div>
          <div className="bp1-furnas">
            Furnas
          </div>
          <a href="#rectangle-93">
            <div className="bp1-what">
              What
            </div>
          </a>
          <a href="#pic-tree-man-1440">
            <div className="bp1-who">
              Who
            </div>
          </a>
          <a href="#rectangle3">
            <div className="bp1-why">
              Why
            </div>
          </a>
          <a href="#group-15">
            <div className="bp1-where">
              Where
            </div>
          </a>
          <a href="https://furnas.ru" target="_blank">
            <div className="bp1-ru">
              RU
            </div>
          </a>
          <div className="bp1-en">
            EN
          </div>
          <div className="bp1-group15" id="group-15">
            <div className="bp1-where1">
              Where?
            </div>
            <div className="bp1-rectangle2">
            </div>
            <div className="bp1-design">
              DESIGN
            </div>
            <div className="bp1-code">
              CODE
            </div>
            <div className="bp1-articles1">
              ARTICLES
            </div>
            <div className="bp1-spainvisaourproj">
              SPAIN VISA <br/>(OUR PROJECT)
            </div>
            <a href="https://dribbble.com/sanmary" target="_blank">
              <div className="bp1-dribbblecom">
                DRIBBBLE.COM
              </div>
            </a>
            <a href="https://github.com/furnasteam" target="_blank">
              <div className="bp1-githubcom">
                GITHUB.COM
              </div>
            </a>
            <a href="https://medium.com/@furnasteam" target="_blank">
              <div className="bp1-mediumcom">
                MEDIUM.COM
              </div>
            </a>
            <a href="https://visa.furnas.ru" target="_blank">
              <div className="bp1-visafurnasru1">
                VISA.FURNAS.RU
              </div>
            </a>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval181" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval182" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div className="bp1-phone">
              PHONE
            </div>
            <a href="tel:+7(915)682-19-55" target="_blank">
              <div className="bp1-a791568219551">
                +7(915)682-19-55
              </div>
            </a>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval183" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div className="bp1-email">
              EMAIL
            </div>
            <div className="bp1-furnasteamgmailcom1">
              FURNASTEAM@GMAIL.COM
            </div>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval184" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-oval-18-4@2x.png')} className="bp1-oval185" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp1-group18">
            <div className="bp1-webstudiodesign">
              web-studio design
            </div>
            <div className="bp1-alargecompanyspen">
              A large company spend money on office rent, manager's salary and etc. Junior works on your project because real performer got a bit of money. We don’t have any office, managers or
              cleaner staff. In our company developers get all the money.
            </div>
            <div className="bp1-whywearebetterth">
              Why we <br/>are better<br/>than…?
            </div>
            <img anima-src={require('./images/furnasdesctophdeng-group-10.svg')} className="bp1-group10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp1-group17">
            <div className="bp1-onedayyouhavesom">
              One day you have some extra work and you make a decision to hire an employee. Afterwards he has nothing to do and he is not happy with you. So you don’t like his attitude at work.<br/>At
              first it will be better to work with us. We can work right now. In case of regular task you should think about full-time employee.
            </div>
            <div className="bp1-employee">
              employee
            </div>
            <div className="bp1-weworkedinlargec">
              We worked in large companies with high quality standards. We know development methodologies and work under contract.
            </div>
            <div className="bp1-freelance">
              freelance
            </div>
            <img anima-src={require('./images/furnasdesctophdeng-group-8.svg')} className="bp1-group8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-group-11.svg')} className="bp1-group11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          </div>
          <div className="bp1-group14">
            <div className="bp1-dreamteam">
              Dream team
            </div>
            <img anima-src={require('./images/furnastableteng-group-4@2x.png')} className="bp1-group4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesktopeng-group-6@2x.png')} className="bp1-group6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-group-7@2x.png')} className="bp1-group7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasdesctophdeng-group-5@2x.png')} className="bp1-group5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div className="bp1-group23">
              <div className="bp1-uiuxdesigner">
                UI/UX Designer
              </div>
              <div className="bp1-saintpetersburgru">
                Saint Petersburg, Russia
              </div>
              <div className="bp1-workedatingatere">
                Worked at Ingate, Rembot
              </div>
              <div className="bp1-maria">
                Maria
              </div>
              <img anima-src={require('./images/furnasmobilehorizonteng-suitcase.svg')} className="bp1-suitcase" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              <img anima-src={require('./images/furnasmobileeng-placeholder-2.svg')} className="bp1-placeholder2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            </div>
            <div className="bp1-group24">
              <div className="bp1-yury">
                Yury
              </div>
              <div className="bp1-developer">
                Developer
              </div>
              <div className="bp1-tularussia">
                Tula, Russia
              </div>
              <div className="bp1-workedatiigingat">
                Worked at IIG, Ingate
              </div>
              <div className="bp1-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp1-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp1-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
            <div className="bp1-group25">
              <div className="bp1-elena">
                Elena
              </div>
              <div className="bp1-moscowrussia">
                Moscow, Russia
              </div>
              <div className="bp1-workedatingatera">
                Worked at Ingate, Rambler
              </div>
              <div className="bp1-itanalyst">
                IT Analyst
              </div>
              <div className="bp1-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp1-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp1-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
            <img anima-src={require('./images/furnasmobilehorizonteng-group-6-1@2x.png')} className="bp1-group61" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <img anima-src={require('./images/furnasmobileeng-group-7@2x.png')} className="bp1-group71" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
            <div className="bp1-group27">
              <div className="bp1-maria">
                Maria
              </div>
              <div className="bp1-mobiledesigner">
                Mobile Designer
              </div>
              <div className="bp1-kaliningradrussia">
                Kaliningrad, Russia
              </div>
              <div className="bp1-workedatiigingat">
                Worked at IIG, Ingate
              </div>
              <div className="bp1-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp1-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp1-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
            <div className="bp1-group28">
              <div className="bp1-sergey">
                Sergey
              </div>
              <div className="bp1-tularussia">
                Tula, Russia
              </div>
              <div className="bp1-workedatiigdevex">
                Worked at IIG, DevExpress, GMCS
              </div>
              <div className="bp1-developer">
                Developer
              </div>
              <div className="bp1-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp1-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp1-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
            <div className="bp1-group26">
              <div className="bp1-sergey">
                Sergey
              </div>
              <div className="bp1-saintpetersburgru">
                Saint Petersburg, Russia
              </div>
              <div className="bp1-workedatiigingat">
                Worked at IIG, Ingate, Grabr
              </div>
              <div className="bp1-developer">
                Developer
              </div>
              <div className="bp1-suitcase">
                <img anima-src={require('./images/furnasmobilehorizonteng-shape-12@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
              <div className="bp1-placeholder2">
                <img anima-src={require('./images/furnasdesctophdeng-shape-5@2x.png')} className="bp1-shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnastableteng-shape-11@2x.png')} className="bp1-shape1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src={require('./images/furnasmobileeng-shape-21@2x.png')} className="bp1-shape2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
              </div>
            </div>
          </div>
          <img anima-src={require('./images/furnasdesctophdeng-star@2x.png')} className="bp1-star2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophdeng-star@2x.png')} className="bp1-star3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
          <img anima-src={require('./images/furnasdesctophdeng-star@2x.png')} className="bp1-star4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
        </div>
      </ThemeProvider>
    );
  }

}
