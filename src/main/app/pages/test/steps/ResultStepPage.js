import React from 'react';
import {AbstractStepPage, AbstractStepPageBody, AbstractStepPageHeader} from './AbstractStepPage';

export function ResultStepPage() {
  return (
    <AbstractStepPage>
      <AbstractStepPageHeader>
        Результат
      </AbstractStepPageHeader>
      <AbstractStepPageBody>
        Start Page Body
      </AbstractStepPageBody>
    </AbstractStepPage>
  );
}