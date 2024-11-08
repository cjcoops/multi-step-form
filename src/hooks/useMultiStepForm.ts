import { useState } from 'react';

export function useMultiStepForm(steps: string[]) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  const previousStep = () => setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
  const goToStep = (step: number) => setCurrentStep(step);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;

  return {
    steps,
    currentStep,
    nextStep,
    previousStep,
    goToStep,
    isFirstStep,
    isLastStep,
  };
}
