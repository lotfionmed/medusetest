import { normalMode } from './normal-mode';
import { clinicalMode } from './clinical-mode';
import { media } from './media';

const heartFailure = {
  id: 'heart-failure',
  title: 'Insuffisance Cardiaque',
  content: {
    definition: 'Incapacité du cœur à assurer un débit sanguin suffisant pour répondre aux besoins de l\'organisme',
    normalMode,
    clinicalMode,
    ...media
  }
};

export { heartFailure };