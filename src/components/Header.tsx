interface HeaderProps {
  currentStep: number;
  steps: string[];
}

export function Header({ currentStep, steps }: HeaderProps) {
  return (
    <header className="h-40 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat p-10">
      <div className="flex justify-center gap-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex aspect-square h-10 items-center justify-center rounded-full border border-white ${
              currentStep === index + 1 ? 'bg-light-blue text-marine-blue' : 'text-white'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </header>
  );
}
