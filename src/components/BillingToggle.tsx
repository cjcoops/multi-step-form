interface BillingToggleProps {
  isYearly: boolean;
  onChange: () => void;
}

export function BillingToggle({ isYearly, onChange }: BillingToggleProps) {
  return (
    <div className="bg-alabaster flex items-center justify-center gap-4 rounded-lg p-4">
      <span className={`${!isYearly ? 'text-marine-blue' : 'text-cool-gray'}`}>Monthly</span>
      <button
        type="button"
        role="switch"
        aria-checked={isYearly}
        className="bg-marine-blue focus-visible:ring-purplish-blue relative h-6 w-12 rounded-full focus-visible:outline-none focus-visible:ring-2"
        onClick={onChange}
      >
        <span className="sr-only">
          {isYearly ? 'Switch to monthly billing' : 'Switch to yearly billing'}
        </span>
        <div
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
            isYearly ? 'left-7' : 'left-1'
          }`}
        />
      </button>
      <span className={`${isYearly ? 'text-marine-blue' : 'text-cool-gray'}`}>Yearly</span>
    </div>
  );
}
