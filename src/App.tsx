import { useState } from 'react';
import { FormValues } from './types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PlanSelectionForm } from './components/PlanSelectionForm';
import { AddOnsForm } from './components/AddOnsForm';
import { PLAN_OPTIONS } from './data';
import { Summary } from './components/Summary';
import { Sidebar } from './components/Sidebar';
import { StepButtons } from './components/StepButtons';

const STEPS = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

function App() {
  const [currentStep, setStep] = useState(1);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    plan: PLAN_OPTIONS[0],
    isYearly: false,
    addOns: [],
  });

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, STEPS.length));
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleUpdateFields = (fields: Partial<FormValues>) => {
    setFormValues((prevValues) => ({ ...prevValues, ...fields }));
  };

  const goToPlanSelection = () => setStep(2);

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
            {currentStep === 4 && <Summary formData={formValues} changePlan={goToPlanSelection} />}
          </main>
          <div className="fixed bottom-0 left-0 right-0 md:static">
            <div className="mx-auto w-full max-w-[550px]">
              <StepButtons
                currentStep={currentStep}
                totalSteps={STEPS.length}
                onNext={handleNext}
                onBack={handleBack}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
