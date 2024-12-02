import { normalMode } from './normal-mode';
import { clinicalMode } from './clinical-mode';
import { media } from './media';

export const dyspnea = {
  id: 'dyspnea',
  title: 'Dyspnée',
  content: {
    definition: 'Difficulté respiratoire ou essoufflement anormal se manifestant par une sensation de gêne respiratoire',
    normalMode,
    clinicalMode,
    ...media
  }
};