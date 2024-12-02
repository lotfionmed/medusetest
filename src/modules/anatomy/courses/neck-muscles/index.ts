import { normalMode } from './normal-mode';
import { media } from './media';

const neckMuscles = {
  id: 'neck-muscles',
  title: 'Muscles du Cou',
  content: {
    definition: 'Les muscles du cou sont un groupe complexe de muscles responsables des mouvements de la tête et du cou, ainsi que de la déglutition et de la respiration.',
    normalMode,
    ...media
  }
};

export { neckMuscles };