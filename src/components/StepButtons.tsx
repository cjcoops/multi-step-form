interface StepButtonsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onNext: () => void;
  onBack: () => void;
}

export function StepButtons({ isFirstStep, isLastStep, onNext, onBack }: StepButtonsProps) {
  return (
    <div className="mt-auto flex items-center justify-between bg-white p-4">
      {!isFirstStep ? (
        <button
          type="button"
          onClick={onBack}
          className="text-cool-gray hover:text-marine-blue transition-colors"
          aria-label="Go to previous step"
        >
          Go Back
        </button>
      ) : (
        <div />
      )}
      <button
        type="button"
        onClick={onNext}
        className={`rounded-md px-4 py-2 text-white transition-colors ${isLastStep ? 'bg-purplish-blue hover:bg-purplish-blue/90' : 'bg-marine-blue hover:bg-marine-blue/90'} `}
        aria-label={isLastStep ? 'Confirm selection' : 'Go to next step'}
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
