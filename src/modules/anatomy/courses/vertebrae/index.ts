import { normalMode } from './normal-mode';
import { media } from './media';

const vertebrae = {
  id: 'vertebrae',
  title: 'Vertèbres',
  content: {
    definition: 'Les vertèbres sont les os qui composent la colonne vertébrale, protégeant la moelle épinière et permettant la mobilité du tronc. Elles sont divisées en régions cervicale, thoracique, lombaire, sacrée et coccygienne.',
    normalMode,
    ...media
  }
};

export { vertebrae };