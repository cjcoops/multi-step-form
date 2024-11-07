interface StepButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

export function StepButtons({ currentStep, totalSteps, onNext, onBack }: StepButtonsProps) {
  return (
    <div className="mt-auto flex bg-white p-4">
      {currentStep > 1 && (
        <button type="button" onClick={onBack} className="text-cool-gray">
          Go Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        className={`ml-auto rounded-md px-4 py-2 text-white ${
          currentStep === totalSteps ? 'bg-purplish-blue' : 'bg-marine-blue'
        }`}
      >
        {currentStep === totalSteps ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
