import { useState } from 'react';
import { FormValues } from './types';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PlanSelectionForm } from './components/PlanSelectionForm';
import { AddOnsForm } from './components/AddOnsForm';
import { PLAN_OPTIONS } from './data';
import { Summary } from './components/Summary';
import { Header } from './components/Header';
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
    <div className="bg-alabaster">
      <div className="mx-auto flex min-h-screen flex-col md:bg-white">
        <Header currentStep={currentStep} steps={STEPS} />
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
        <StepButtons
          currentStep={currentStep}
          totalSteps={STEPS.length}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}

export default App;
