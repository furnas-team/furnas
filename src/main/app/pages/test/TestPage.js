import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import './test.scss';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux'
import {object} from 'prop-types';
import {selectTestStep, TestStep} from '../../models/TestModel';
import {StartStepPage} from './steps/StartTestPage';
import {ResultStepPage} from './steps/ResultStepPage';
import {QuestionStepPage} from './steps/QuestionStepPage';


class TestPage extends React.Component {

  static propTypes = {
    test: object
  };

  handleGoToNextStepClick = () => {};

  render() {

    const {test} = this.props;

    const step = selectTestStep(test);

    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>У кого заказать Landing page? | Furnas</title>
          <meta name="description" content="Тест из 5-ти вопросов, чтобы лучше понять у кого заказать лендинг"/>
        </Helmet>
        <div className="test">
          <div className="test__header-links-row">
            <a className="test__header-link"
               href="/">
              furnas
            </a>
            <a className="test__header-link"
               href="/learn">
              blog
            </a>
            <a className="test__header-link"
               href="/#contact-us-section">
              email
            </a>
          </div>
          {step === TestStep.START && <StartStepPage onClick={this.handleGoToNextStepClick}/>}
          {step === TestStep.RESULT && <ResultStepPage/>}
          {step !== TestStep.START && step !== TestStep.RESULT && <QuestionStepPage/>}
        </div>
      </ThemeProvider>
    );
  }

}


function mapStateToProps(state) {
  return {
    test: state.test,
  }
}

export const ConnectedTestPage = connect(mapStateToProps)(TestPage);