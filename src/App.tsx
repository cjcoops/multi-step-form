import { useState } from 'react';
import { FormValues } from './types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PlanSelectionForm } from './components/PlanSelectionForm';
import { AddOnsForm } from './components/AddOnsForm';
import { PLAN_OPTIONS } from './data';
import { Summary } from './components/Summary';

const STEPS = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

function App() {
  const [currentStep, setStep] = useState(2);
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

  return (
    <div className="bg-alabaster mx-auto min-h-screen max-w-md">
      <header>
        <img
          src="/images/bg-sidebar-mobile.svg"
          alt="Decorative sidebar background"
          className="w-full"
        />
        <div className="flex gap-4 p-4">
          {STEPS.map((step, index) => (
            <div key={step} className={`${currentStep === index + 1 ? 'text-red-300' : ''}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </header>
      <main>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          {currentStep === 1 && (
            <PersonalInfoForm formData={formValues} updateFields={handleUpdateFields} />
          )}
          {currentStep === 2 && (
            <PlanSelectionForm formData={formValues} updateFields={handleUpdateFields} />
          )}
          {currentStep === 3 && (
            <AddOnsForm formData={formValues} updateFields={handleUpdateFields} />
          )}
          {currentStep === 4 && <Summary formData={formValues} />}
        </div>
      </main>
      <footer className="flex">
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
