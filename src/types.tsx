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

export type AddOn = (typeof ADD_ON_OPTIONS)[number];

export type AddOns = {
  addOns: AddOn[];
};

export type FormValues = PersonalInfo & PlanSelection & AddOns;
