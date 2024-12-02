import icon from '../../assets/icons/cardiology-icon.png';
import { diseases } from './chapters/diseases';
import { symptoms } from './chapters/symptoms';

export const cardiology = {
  id: 'cardio',
  title: 'Cardiologie',
  icon: icon,
  chapters: [symptoms, diseases]
};