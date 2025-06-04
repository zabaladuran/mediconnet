import { useState } from "react";

export function useMultiStepForm({ stepsArray }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((oldIndex) => {
      if (oldIndex >= stepsArray.length - 1) return oldIndex;
      else return oldIndex + 1;
    });
  };
  const back = () => {
    setCurrentStepIndex((oldIndex) => {
      if (oldIndex <= 0) return oldIndex;
      else return oldIndex - 1;
    });
  };
  const goTo = (newIndex) => {
    setCurrentStepIndex(newIndex);
  };

  return {
    currentStepIndex,
    steps: stepsArray,
    Step: stepsArray[currentStepIndex],
    isLastStep: currentStepIndex === stepsArray.length - 1,
    isFirstStep: currentStepIndex === 0,
    next,
    back,
    goTo,
  };
}
