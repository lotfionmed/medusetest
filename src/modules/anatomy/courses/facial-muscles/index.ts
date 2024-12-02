import { normalMode } from './normal-mode';
import { media } from './media';

const facialMuscles = {
  id: 'facial-muscles',
  title: 'Muscles de la Face',
  content: {
    definition: 'Les muscles de la face, ou muscles faciaux, sont un groupe de muscles peauciers responsables des expressions faciales et des mouvements essentiels comme la mastication et la parole.',
    normalMode,
    ...media
  }
};

export { facialMuscles };