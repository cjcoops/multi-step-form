interface SidebarProps {
  currentStep: number;
  steps: string[];
}

export function Sidebar({ currentStep, steps }: SidebarProps) {
  return (
    <aside className="h-full bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat p-10 md:rounded-2xl md:bg-[url('/images/bg-sidebar-desktop.svg')] md:p-8 md:pt-10">
      <nav aria-label="Progress">
        <ol className="flex justify-center gap-4 md:flex-col md:gap-8">
          {steps.map((step, index) => (
            <li className="flex items-center gap-4 text-white" key={step}>
              <div
                aria-current={currentStep === index + 1 ? 'step' : undefined}
                className={`flex aspect-square h-10 items-center justify-center rounded-full border border-white ${
                  currentStep === index + 1 ? 'bg-light-blue text-marine-blue' : ''
                }`}
              >
                {index + 1}
              </div>
              <div className="hidden uppercase md:block">
                <div className="text-alabaster text-xs">Step {index + 1}</div>
                <div className="text-sm font-medium">{step}</div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
