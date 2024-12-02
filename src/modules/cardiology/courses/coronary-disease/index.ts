import { normalMode } from './normal-mode';
import { clinicalMode } from './clinical-mode';
import { media } from './media';

const coronaryDisease = {
  id: 'coronary-disease',
  title: 'Maladie Coronarienne',
  content: {
    definition: 'Atteinte des artères coronaires par l\'athérosclérose, entraînant une réduction du flux sanguin vers le muscle cardiaque',
    normalMode,
    clinicalMode,
    ...media
  }
};

export { coronaryDisease };