import React from 'react';

export function AbstractStepPageHeader({children}) {
  return children;
}

export function AbstractStepPageBody({children}) {
  return children;
}

export function AbstractStepPage({children}) {

  const headerChildren = [];
  const bodyChidlren = [];
  for (const child of React.Children.toArray(children)) {
    if (child.type === AbstractStepPageHeader) {
      headerChildren.push(child);
    } else if (child.type === AbstractStepPageBody) {
      bodyChidlren.push(child);
    }
  }
  return (
    <div className="test__step">
      <div className="test__step-title">{headerChildren}</div>
      <div className="test__step-body">{bodyChidlren}</div>
    </div>
  )
}