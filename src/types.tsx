import { ADD_ON_OPTIONS, PLAN_OPTIONS } from './data';

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Plan = (typeof PLAN_OPTIONS)[number];

export type PlanSelection = {
  plan: Plan;
  isYearly: boolean;
};

export type AddOns = {
  addOns: (typeof ADD_ON_OPTIONS)[number]['name'][];
};

export type FormValues = PersonalInfo & PlanSelection & AddOns;
