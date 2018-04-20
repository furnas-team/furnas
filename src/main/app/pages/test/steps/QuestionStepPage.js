import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';

export function QuestionStepPage() {
  return (
    <AbstractStepPage>
      <AbstractStepPageHeader>
        Start Page Header
      </AbstractStepPageHeader>
      <AbstractStepPageBody>
        Start Page Body
      </AbstractStepPageBody>
    </AbstractStepPage>
  );
}