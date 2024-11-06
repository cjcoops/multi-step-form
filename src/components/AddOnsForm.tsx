import { ADD_ON_OPTIONS } from '../data';
import { AddOn, AddOns, FormValues } from '../types';

interface AddOnFormProps {
  formData: FormValues;
  updateFields: (fields: Partial<AddOns>) => void;
}

export function AddOnsForm({ formData, updateFields }: AddOnFormProps) {
  const handleAddOnChange = (addOn: AddOn) => {
    const newAddOns = formData.addOns.includes(addOn)
      ? formData.addOns.filter((a) => a !== addOn)
      : formData.addOns.concat(addOn);
    updateFields({ addOns: newAddOns });
  };

  return (
    <div>
      <h1 className="text-marine-blue text-2xl font-bold">Pick add-ons</h1>
      <p className="text-cool-gray mt-2">Add-ons help enhance your gaming experience</p>

      <div className="mt-6 space-y-4">
        <div className="flex flex-col gap-4">
          {ADD_ON_OPTIONS.map((addOn) => (
            <button
              key={addOn.name}
              type="button"
              className={`flex items-center gap-4 rounded-lg border p-4 text-left ${
                formData.addOns.includes(addOn)
                  ? 'border-purplish-blue bg-alabaster'
                  : 'border-light-gray'
              }`}
              onClick={() => handleAddOnChange(addOn)}
            >
              <input
                type="checkbox"
                checked={formData.addOns.includes(addOn)}
                readOnly
                className="border-light-gray accent-purplish-blue h-5 w-5 rounded"
              />
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <div className="text-marine-blue font-medium">{addOn.name}</div>
                  <div className="text-cool-gray text-sm">{addOn.description}</div>
                </div>
                <div className="text-purplish-blue text-sm">
                  +${formData.isYearly ? `${addOn.yearlyPrice}/yr` : `${addOn.monthlyPrice}/mo`}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
