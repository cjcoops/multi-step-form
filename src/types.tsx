import { PLAN_OPTIONS } from './data';

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type PlanSelection = {
  plan: (typeof PLAN_OPTIONS)[number]['name'];
  isYearly: boolean;
};

export type FormValues = PersonalInfo & PlanSelection;
