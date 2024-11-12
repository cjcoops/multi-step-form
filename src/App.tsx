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

type StepNumber = 1 | 2 | 3 | 4;

const FormStep = ({
  currentStep,
  formData,
  updateFields,
  onChangePlan,
}: {
  currentStep: StepNumber;
  formData: FormValues;
  updateFields: (fields: Partial<FormValues>) => void;
  onChangePlan: () => void;
}) => {
  switch (currentStep) {
    case 1:
      return <PersonalInfoForm formData={formData} updateFields={updateFields} />;
    case 2:
      return <PlanSelectionForm formData={formData} updateFields={updateFields} />;
    case 3:
      return <AddOnsForm formData={formData} updateFields={updateFields} />;
    case 4:
      return <Summary formData={formData} changePlan={onChangePlan} />;
    default:
      return null;
  }
};

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

  const handleSubmit = async () => {
    if (isLastStep) {
      try {
        console.log('Form submitted:', formValues);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      nextStep();
    }
  };

  const handleNext = () => {
    const form = document.querySelector('form');

    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Proceed to next step if valid
    if (isLastStep) {
      handleSubmit();
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex min-h-screen md:items-center md:justify-center">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col rounded-3xl md:grid md:min-h-[680px] md:grid-cols-[274px,1fr] md:bg-white md:p-4">
        <div className="h-40 md:h-full">
          <Sidebar currentStep={currentStep} steps={STEPS} />
        </div>
        <div className="items flex flex-col justify-between">
          <main className="mx-4 -mt-14 max-w-xl overflow-y-auto rounded-lg bg-white p-6 pb-24 shadow-lg md:mx-auto md:mt-2 md:w-full md:pb-6 md:shadow-none">
            <FormStep
              currentStep={currentStep as StepNumber}
              formData={formValues}
              updateFields={handleUpdateFields}
              onChangePlan={() => goToStep(2)}
            />
          </main>
          <div className="fixed bottom-0 left-0 right-0 md:static">
            <div className="mx-auto w-full max-w-[550px]">
              <StepButtons
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                onNext={handleNext}
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
