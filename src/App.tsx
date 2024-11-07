import { useState } from 'react';
import { FormValues } from './types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PlanSelectionForm } from './components/PlanSelectionForm';
import { AddOnsForm } from './components/AddOnsForm';
import { PLAN_OPTIONS } from './data';
import { Summary } from './components/Summary';

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
    <div className="bg-alabaster mx-auto flex min-h-screen max-w-md flex-col">
      <header className="h-40 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat p-10">
        <div className="flex justify-center gap-4">
          {STEPS.map((step, index) => (
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
      <main>
        <div className="mx-4 -mt-14 rounded-lg bg-white p-6 shadow-lg">
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
        </div>
      </main>
      <footer className="sticky bottom-0 mt-auto flex bg-white p-4">
        {currentStep > 1 && (
          <button type="button" onClick={handleBack} className="text-cool-gray">
            Go Back
          </button>
        )}
        <button
          type="button"
          onClick={handleNext}
          className={`ml-auto rounded-md px-4 py-2 text-white ${currentStep === STEPS.length ? 'bg-purplish-blue' : 'bg-marine-blue'}`}
        >
          {currentStep === STEPS.length ? 'Confirm' : 'Next Step'}
        </button>
      </footer>
    </div>
  );
}

export default App;
