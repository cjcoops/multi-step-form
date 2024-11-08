interface StepButtonsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onNext: () => void;
  onBack: () => void;
}

export function StepButtons({ isFirstStep, isLastStep, onNext, onBack }: StepButtonsProps) {
  return (
    <div className="mt-auto flex bg-white p-4">
      {!isFirstStep && (
        <button type="button" onClick={onBack} className="text-cool-gray">
          Go Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        className={`ml-auto rounded-md px-4 py-2 text-white ${
          isLastStep ? 'bg-purplish-blue' : 'bg-marine-blue'
        }`}
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
