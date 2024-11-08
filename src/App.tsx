import { useState } from 'react';
import { FormValues } from './types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PlanSelectionForm } from './components/PlanSelectionForm';
import { AddOnsForm } from './components/AddOnsForm';
import { PLAN_OPTIONS, STEPS } from './data';
import { Summary } from './components/Summary';
import { Sidebar } from './components/Sidebar';
import { StepButtons } from './components/StepButtons';
import { useMultiStepForm } from './hooks/useMultiStepForm';

function App() {
  const { currentStep, nextStep, previousStep, goToStep, isFirstStep, isLastStep } =
    useMultiStepForm(STEPS);

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    plan: PLAN_OPTIONS[0],
    isYearly: false,
    addOns: [],
  });

  const handleUpdateFields = (fields: Partial<FormValues>) => {
    setFormValues((prevValues) => ({ ...prevValues, ...fields }));
  };

  return (
    <div className="flex min-h-screen md:items-center md:justify-center">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col rounded-3xl md:grid md:min-h-[600px] md:grid-cols-[274px,1fr] md:bg-white md:p-4">
        <div className="h-40 md:h-full">
          <Sidebar currentStep={currentStep} steps={STEPS} />
        </div>
        <div className="items flex flex-col justify-between">
          <main className="mx-4 -mt-14 max-w-xl overflow-y-auto rounded-lg bg-white p-6 pb-24 shadow-lg md:mx-auto md:mt-2 md:w-full md:pb-6 md:shadow-none">
            {currentStep === 1 && (
              <PersonalInfoForm formData={formValues} updateFields={handleUpdateFields} />
            )}
            {currentStep === 2 && (
              <PlanSelectionForm formData={formValues} updateFields={handleUpdateFields} />
            )}
            {currentStep === 3 && (
              <AddOnsForm formData={formValues} updateFields={handleUpdateFields} />
            )}
            {currentStep === 4 && <Summary formData={formValues} changePlan={() => goToStep(2)} />}
          </main>
          <div className="fixed bottom-0 left-0 right-0 md:static">
            <div className="mx-auto w-full max-w-[550px]">
              <StepButtons
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                onNext={nextStep}
                onBack={previousStep}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
