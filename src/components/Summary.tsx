import { FormValues } from '../types';

interface SummaryProps {
  formData: FormValues;
}

export function Summary({ formData }: SummaryProps) {
  const { plan, isYearly, addOns } = formData;

  const planPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const billingPeriod = isYearly ? 'yr' : 'mo';

  const hasAddOns = formData.addOns.length > 0;

  const totalPrice = addOns.reduce(
    (sum, addon) => sum + (isYearly ? addon.yearlyPrice : addon.monthlyPrice),
    planPrice
  );

  return (
    <div className="space-y-6">
      <h2 className="text-marine-blue text-2xl font-bold">Finishing up</h2>
      <p className="text-cool-gray">Double-check everything looks OK before confirming.</p>

      <div className="bg-alabaster space-y-4 rounded-lg p-4">
        <div
          className={`border-light-gray flex items-center justify-between ${hasAddOns ? 'border-b pb-4' : ''}`}
        >
          <div>
            <h3 className="text-marine-blue font-medium">
              {plan.name} ({isYearly ? 'Yearly' : 'Monthly'})
            </h3>
            <button className="text-cool-gray hover:text-marine-blue text-sm underline">
              Change TODO
            </button>
          </div>
          <span className="text-marine-blue font-bold">
            ${planPrice}/{billingPeriod}
          </span>
        </div>

        {addOns.map((addon) => (
          <div key={addon.name} className="flex items-center justify-between">
            <span className="text-cool-gray">{addon.name}</span>
            <span className="text-marine-blue">
              +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/{billingPeriod}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-4">
        <span className="text-cool-gray">Total (per {isYearly ? 'year' : 'month'})</span>
        <span className="text-purplish-blue text-lg font-bold">
          ${totalPrice}/{billingPeriod}
        </span>
      </div>
    </div>
  );
}
