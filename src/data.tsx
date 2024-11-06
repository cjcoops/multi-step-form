export const PLAN_OPTIONS = [
  {
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: '/images/icon-arcade.svg',
  },
  {
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: '/images/icon-advanced.svg',
  },
  {
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: '/images/icon-pro.svg',
  },
] as const;

export const ADD_ON_OPTIONS = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
] as const;
