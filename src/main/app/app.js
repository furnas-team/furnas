import React from 'react';
import {HomePage} from './pages/home/HomePage';
import {Route, Switch} from 'react-router-dom'
import {LearnPage} from './pages/learn/LearnPage';
import {LearnArticlePage} from './pages/learn-article/LearnArticlePage';
import './seo/sitemap.xml';
import './seo/robots.txt';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {Helmet} from 'react-helmet';
import {PolicyPage} from './pages/policy/PolicyPage';
import AOS from 'aos';
import '../../3rd-part/aos.scss';
import {FinansistPortfolioPage} from './pages/portfolio/finansist/FinansistPortfolioPage';
import {TeaPortfolioPage} from './pages/portfolio/tea/TeaPortfolioPage';
import {VisaPortfolioPage} from './pages/portfolio/visa/VisaPortfolioPage';
import {FurnasPortfolioPage} from './pages/portfolio/furnas/FurnasPortfolioPage';
import {SmikwellPortfolioPage} from './pages/portfolio/smikwell/SmikwellPortfolioPage';
import {WorkPortfolioPage} from './pages/portfolio/work/WorkPortfolioPage';
import {LivenHousePortfolioPage} from './pages/portfolio/livenhouse/LivenHousePortfolioPage';
import {CodeFighterPortfolioPage} from './pages/portfolio/code-fighter/CodeFighterPortfolioPage';
import {SaraghPortfolioPage} from './pages/portfolio/saragh/SaraghPortfolioPage';

export class App extends React.Component {

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {

    const store = configureStore();

    return ([
      <Provider key="1" store={store}>
        <Switch>
          <Route exact path='/learn' component={LearnPage}/>
          <Route exact path='/learn/:name' component={LearnArticlePage}/>
          <Route path='/portfolio/work' component={WorkPortfolioPage}/>
          <Route path='/portfolio/smikwell' component={SmikwellPortfolioPage}/>
          <Route path='/portfolio/furnas' component={FurnasPortfolioPage}/>
          <Route path='/portfolio/visa' component={VisaPortfolioPage}/>
          <Route path='/portfolio/tea' component={TeaPortfolioPage}/>
          <Route path='/portfolio/finansist' component={FinansistPortfolioPage}/>
          <Route path='/portfolio/livenhouse' component={LivenHousePortfolioPage}/>
          <Route path='/portfolio/codefighter' component={CodeFighterPortfolioPage}/>
          <Route path='/portfolio/saragh' component={SaraghPortfolioPage}/>
          <Route path='/portfolio' component={FinansistPortfolioPage}/>
          <Route path='/policy' component={PolicyPage}/>
          {/*<Route path='/test-canvas' component={TestCanvasPage}/>*/}
          {/*<Route path='/about' component={LandingPage}/>*/}
          {/*<Route path='/2018' component={HomePage}/>*/}
          {/*<Route path='/en' component={LandingPageEn}/>*/}
          {/*<Route path='/2019' component={LandingPage}/>*/}
          {/*<Route exact path='/test' component={ConnectedTestPage}/>*/}
          {/*<Route exact path='/test/:step' component={ConnectedTestPage}/>*/}
          <Route path='/' component={HomePage}/>
        </Switch>
      </Provider>,
      <Helmet key="2">
        <link rel="icon" sizes="192x192" href={require('./images/favicon-192x192.png')}/>
        <link rel="icon" sizes="144x144" href={require('./images/favicon-144x144.png')}/>
        <link rel="icon" sizes="96x96" href={require('./images/favicon-96x96.png')}/>
        <link rel="icon" sizes="48x48" href={require('./images/favicon-48x48.png')}/>
        <link rel="apple-touch-icon" href={require('./images/favicon-192x192.png')}/>
        <link rel="apple-touch-icon" sizes="76x76" href={require('./images/favicon-76x76.png')}/>
        <link rel="apple-touch-icon" sizes="120x120" href={require('./images/favicon-120x120.png')}/>
        <link rel="apple-touch-icon" sizes="152x152" href={require('./images/favicon-152x152.png')}/>
        <meta name="msapplication-square310x310logo" content={require('./images/favicon-310x310.png')}/>
        <meta property="og:type" content="website"/>
        {/*<meta property="og:site_name" content="Furnas"/>*/}
        {/*<meta property="og:title" content="Furnas"/>*/}
        {/*<meta property="og:description" content="Веб-дизайн, разработка, иллюстрации"/>*/}
        {/*<meta property="og:url" content="https://furnas.ru"/>*/}
        <meta property="og:locale" content="ru_RU"/>
        {/*<meta property="og:image" content={require('./images/share-facebook.png')}/>*/}
        <meta property="vk:image"  content="https://sharemaster.furnas.ru/labo2fvrczu.png"/>
        <meta property="og:image" content="https://sharemaster.furnas.ru/labo2fvrczu_fb.png"/>
        <meta name="google-site-verification" content="jcszVKPGF4s_QT9tuuCFGrkgq7boU9PI-8zfTrFAY-Q" />
      </Helmet>
    ]);
  }
}
