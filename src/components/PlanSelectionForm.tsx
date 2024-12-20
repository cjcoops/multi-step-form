import { PLAN_OPTIONS } from '../data';
import { Plan, PlanSelection } from '../types';
import { BillingToggle } from './BillingToggle';

interface PlanSelectionFormProps {
  formData: PlanSelection;
  updateFields: (fields: Partial<PlanSelection>) => void;
}

export function PlanSelectionForm({ formData, updateFields }: PlanSelectionFormProps) {
  const handlePlanChange = (plan: Plan) => {
    updateFields({ plan });
  };

  const handleBillingCycle = () => {
    updateFields({ isYearly: !formData.isYearly });
  };

  return (
    <div role="group" aria-labelledby="plan-selection-title">
      <h1 className="text-marine-blue text-2xl font-bold">Select your plan</h1>
      <p className="text-cool-gray mt-2">You have the option of monthly or yearly billing.</p>

      <div className="mt-6 space-y-4">
        <div className="flex flex-col gap-4">
          {PLAN_OPTIONS.map((plan) => (
            <button
              key={plan.name}
              type="button"
              className={`items-top flex gap-4 rounded-lg border p-4 ${
                formData.plan === plan ? 'border-purplish-blue bg-alabaster' : 'border-light-gray'
              }`}
              onClick={() => handlePlanChange(plan)}
            >
              <img src={plan.icon} alt={plan.name} className="aspect-square h-12" />
              <div className="text-left">
                <div className="text-marine-blue font-medium">{plan.name}</div>
                <div className="text-cool-gray">
                  ${formData.isYearly ? `${plan.yearlyPrice}/yr` : `${plan.monthlyPrice}/mo`}
                </div>
                {formData.isYearly && <div className="text-marine-blue text-sm">2 months free</div>}
              </div>
            </button>
          ))}
        </div>

        <BillingToggle isYearly={formData.isYearly} onChange={handleBillingCycle} />
      </div>
    </div>
  );
}
