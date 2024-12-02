import { normalMode } from './normal-mode';
import { media } from './media';

const skull = {
  id: 'skull',
  title: 'Crâne',
  content: {
    definition: 'Le crâne est une structure osseuse complexe qui protège le cerveau et abrite les organes sensoriels de la tête. Il est composé de plusieurs os qui s\'articulent entre eux par des sutures.',
    normalMode,
    ...media
  }
};

export { skull };