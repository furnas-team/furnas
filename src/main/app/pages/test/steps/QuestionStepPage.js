import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';
import {TestStep} from '../../../models/TestModel';
import {string} from 'prop-types';

function renderQuestionHeader(step) {
  switch(step){
    case TestStep.MONEY:
      return <div className="test__step-title_small">Как вы думаете, сколько будет стоить работа над сайтом?</div>;
    case TestStep.WHAT_IS_DONE:
      return 'Что вы уже сделали?';
    case TestStep.CONTROL:
      return 'Как вы хотите участвовать в процессе создания лендинга?';
    case TestStep.EXCEPT_LANDING:
      return 'Что  нужно кроме дизайна и верстки лендинга (можно выбрать несколько)?';
    case TestStep.TIME:
      return 'Сколько времени вы готовы уделить созданию лендинга?';
  }
}

QuestionStepPage.propTypes = {
  step: string
};

export function QuestionStepPage({step, onNextButtonClick}) {
  return (
    <AbstractStepPage>
      <AbstractStepPageHeader>
        {renderQuestionHeader(step)}
      </AbstractStepPageHeader>
      <AbstractStepPageBody>
        <button className="test__button test__button_blue" onClick={onNextButtonClick}>
          Далее
        </button>
      </AbstractStepPageBody>
    </AbstractStepPage>
  );
}