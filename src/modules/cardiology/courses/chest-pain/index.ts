import { normalMode } from './normal-mode';
import { clinicalMode } from './clinical-mode';
import { media } from './media';

const chestPain = {
  id: 'chest-pain',
  title: 'Douleur thoracique',
  content: {
    definition: 'Le cœur est un organe musculaire creux situé dans le médiastin, entre les poumons. Il fonctionne comme une pompe pour assurer la circulation sanguine dans tout le corps.',
    normalMode,
    clinicalMode,
    ...media
  }
};

export { chestPain };