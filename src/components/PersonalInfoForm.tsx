import { PersonalInfo } from '../types';

interface PersonalInfoProps {
  formData: PersonalInfo;
  updateFields: (fields: Partial<PersonalInfoProps['formData']>) => void;
}

export function PersonalInfoForm({ formData, updateFields }: PersonalInfoProps) {
  return (
    <div>
      <h2 className="text-marine-blue text-2xl font-bold">Personal info</h2>
      <p className="text-cool-gray mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="text-marine-blue">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFields({ name: e.target.value })}
            className="mt-1 w-full rounded border p-2"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-marine-blue">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateFields({ email: e.target.value })}
            className="mt-1 w-full rounded border p-2"
            placeholder="e.g. stephen.king@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-marine-blue">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            className="mt-1 w-full rounded border p-2"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
}
