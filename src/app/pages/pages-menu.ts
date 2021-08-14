import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon:'file-text-outline',
    link:'/pages/dashboard',
    home: true,
  },
  {
    title: 'Patients',
    icon:'file-text-outline',
    link:'/pages/patients/list',
    home: true,
  },
];