export const TestStep = {
  START: 'start',
  MONEY: 'money',
  WHAT_IS_DONE: 'what-is-done',
  TIME: 'time',
  CONTROL: 'control',
  EXCEPT_LANDING: 'except-landing',
  RESULT: 'result'
};

export const TestActionType = {
  SET_TEST_STEP: 'set-test-step'
};

export const testStepsOrder = [
  TestStep.START,
  TestStep.MONEY,
  TestStep.WHAT_IS_DONE,
  TestStep.EXCEPT_LANDING,
  TestStep.CONTROL,
  TestStep.TIME,
  TestStep.RESULT
];

const initialState = {
  step: testStepsOrder[0]
};


export function testReducer(state = initialState, action) {

  switch (action.type) {
    case TestActionType.SET_TEST_STEP:
      return { ...state, step: action.payloads.step}
  }

  return state;
}

export function goToNextStep() {
  return (dispatch, getState) => {
    const currentStep = getTestStep(selectTest(getState()));
    const nextStep = testStepsOrder[testStepsOrder.indexOf(currentStep) + 1];
    dispatch(setTestStep(nextStep));
  }
}

export function setTestStep(step) {
  return {
    type: TestActionType.SET_TEST_STEP,
    payloads: {
      step
    }
  }
}

export function selectTest(state) {
  return state.test;
}

export function getTestStep(test) {
  return test.step;
}