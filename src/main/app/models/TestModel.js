export const TestStep = {
  START: 'start',
  MONEY: 'money',
  WHAT_IS_DONE: 'what-is-done',
  TIME: 'time',
  CONTROL: 'control',
  EXCEPT_LANDING: 'except-landing',
  RESULT: 'result'
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


export function testReducer(state = initialState) {
  return state;
}

export function selectTestStep(state) {
  return state.step;
}