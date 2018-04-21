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