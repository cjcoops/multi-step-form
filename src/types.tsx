import { ADD_ON_OPTIONS, PLAN_OPTIONS } from './data';

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type PlanSelection = {
  plan: (typeof PLAN_OPTIONS)[number]['name'];
  isYearly: boolean;
};

export type AddOns = {
  addOns: (typeof ADD_ON_OPTIONS)[number]['name'][];
};

export type FormValues = PersonalInfo & PlanSelection & AddOns;
