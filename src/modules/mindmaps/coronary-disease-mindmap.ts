import { MindMapNode, MindMapEdge } from './types';

export const coronaryDiseaseMindMap = {
  interactive: true,
  title: 'Mind Map - Maladie Coronarienne',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Maladie Coronarienne',
        content: 'La maladie coronarienne est caractérisée par l\'athérosclérose des artères coronaires, entraînant une réduction du flux sanguin vers le myocarde. C\'est une cause majeure de morbi-mortalité cardiovasculaire.'
      },
      position: { x: 400, y: 0 },
      style: {
        light: 'bg-primary-100 border-2 border-primary-500',
        dark: 'bg-primary-600 text-white'
      }
    },
    {
      id: '2',
      data: { 
        label: 'Physiopathologie',
        content: 'La physiopathologie de la maladie coronarienne implique plusieurs mécanismes qui conduisent à la réduction du flux sanguin coronaire.'
      },
      position: { x: 200, y: 100 },
      style: {
        light: 'bg-blue-100',
        dark: 'bg-blue-600 text-white'
      }
    },
    {
      id: '2a',
      data: { 
        label: 'Athérosclérose',
        content: 'L\'athérosclérose est caractérisée par :\n- Accumulation de lipides\n- Formation de plaques d\'athérome\n- Calcifications\n- Rétrécissement progressif de la lumière artérielle'
      },
      position: { x: 50, y: 200 },
      style: {
        light: 'bg-blue-50',
        dark: 'bg-blue-500 text-white'
      }
    },
    {
      id: '2b',
      data: { 
        label: 'Inflammation',
        content: 'L\'inflammation joue un rôle clé :\n- Activation endothéliale\n- Recrutement de cellules inflammatoires\n- Production de cytokines\n- Déstabilisation des plaques'
      },
      position: { x: 200, y: 200 },
      style: {
        light: 'bg-blue-50',
        dark: 'bg-blue-500 text-white'
      }
    },
    {
      id: '2c',
      data: { 
        label: 'Thrombose',
        content: 'La thrombose coronaire survient par :\n- Rupture de plaque\n- Activation plaquettaire\n- Cascade de coagulation\n- Formation d\'un thrombus occlusif'
      },
      position: { x: 350, y: 200 },
      style: {
        light: 'bg-blue-50',
        dark: 'bg-blue-500 text-white'
      }
    },
    {
      id: '3',
      data: { 
        label: 'Facteurs de risque',
        content: 'Les facteurs de risque cardiovasculaires sont nombreux et leur identification est essentielle pour la prévention.'
      },
      position: { x: 600, y: 100 },
      style: {
        light: 'bg-emerald-100',
        dark: 'bg-emerald-600 text-white'
      }
    },
    {
      id: '3a',
      data: { 
        label: 'Non modifiables',
        content: 'Facteurs non modifiables :\n- Âge\n- Sexe masculin\n- Antécédents familiaux\n- Génétique'
      },
      position: { x: 500, y: 200 },
      style: {
        light: 'bg-emerald-50',
        dark: 'bg-emerald-500 text-white'
      }
    },
    {
      id: '3b',
      data: { 
        label: 'Modifiables',
        content: 'Facteurs modifiables :\n- Tabagisme\n- Hypertension artérielle\n- Diabète\n- Dyslipidémie\n- Obésité\n- Sédentarité'
      },
      position: { x: 700, y: 200 },
      style: {
        light: 'bg-emerald-50',
        dark: 'bg-emerald-500 text-white'
      }
    },
    {
      id: '4',
      data: { 
        label: 'Manifestations',
        content: 'Les manifestations cliniques de la maladie coronarienne sont variables, allant de l\'absence de symptômes à l\'infarctus aigu.'
      },
      position: { x: 400, y: 300 },
      style: {
        light: 'bg-amber-100',
        dark: 'bg-amber-600 text-white'
      }
    },
    {
      id: '4a',
      data: { 
        label: 'Angor stable',
        content: 'Caractéristiques de l\'angor stable :\n- Douleur thoracique à l\'effort\n- Régression au repos\n- Reproductible\n- Soulagée par la trinitrine'
      },
      position: { x: 250, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
      }
    },
    {
      id: '4b',
      data: { 
        label: 'SCA ST+',
        content: 'Syndrome coronarien aigu avec sus-décalage ST :\n- Douleur prolongée au repos\n- Sus-décalage ST à l\'ECG\n- Nécrose myocardique\n- Urgence de revascularisation'
      },
      position: { x: 400, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
      }
    },
    {
      id: '4c',
      data: { 
        label: 'SCA non ST+',
        content: 'Syndrome coronarien aigu sans sus-décalage ST :\n- Angor instable\n- Modifications ECG non ST+\n- <boltAction type="file" filePath="src/modules/mindmaps/coronary-disease-mindmap.ts">        Troponine positive ou négative\n- Stratification du risque'
      },
      position: { x: 550, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
      }
    },
    {
      id: '5',
      data: { 
        label: 'Traitement',
        content: 'La prise en charge thérapeutique est multimodale et dépend de la présentation clinique.'
      },
      position: { x: 400, y: 500 },
      style: {
        light: 'bg-purple-100',
        dark: 'bg-purple-600 text-white'
      }
    },
    {
      id: '5a',
      data: { 
        label: 'Médicamenteux',
        content: 'Traitements médicamenteux :\n- Antiagrégants plaquettaires\n- Statines\n- Bêtabloquants\n- IEC/ARA2\n- Dérivés nitrés'
      },
      position: { x: 250, y: 600 },
      style: {
        light: 'bg-purple-50',
        dark: 'bg-purple-500 text-white'
      }
    },
    {
      id: '5b',
      data: { 
        label: 'Interventionnel',
        content: 'Techniques de revascularisation :\n- Angioplastie coronaire\n- Stents actifs ou nus\n- Pontage aorto-coronarien\n- Thrombolyse dans certains cas'
      },
      position: { x: 400, y: 600 },
      style: {
        light: 'bg-purple-50',
        dark: 'bg-purple-500 text-white'
      }
    },
    {
      id: '5c',
      data: { 
        label: 'Prévention',
        content: 'Mesures préventives :\n- Arrêt du tabac\n- Activité physique régulière\n- Régime méditerranéen\n- Contrôle des facteurs de risque\n- Éducation thérapeutique'
      },
      position: { x: 550, y: 600 },
      style: {
        light: 'bg-purple-50',
        dark: 'bg-purple-500 text-white'
      }
    }
  ],
  edges: [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: {
        light: '#3b82f6',
        dark: '#818cf8'
      }
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      animated: true,
      style: {
        light: '#10b981',
        dark: '#34d399'
      }
    },
    {
      id: 'e1-4',
      source: '1',
      target: '4',
      animated: true,
      style: {
        light: '#d97706',
        dark: '#fbbf24'
      }
    },
    {
      id: 'e1-5',
      source: '1',
      target: '5',
      animated: true,
      style: {
        light: '#8b5cf6',
        dark: '#a78bfa'
      }
    },
    {
      id: 'e2-2a',
      source: '2',
      target: '2a',
      style: {
        light: '#3b82f6',
        dark: '#818cf8'
      }
    },
    {
      id: 'e2-2b',
      source: '2',
      target: '2b',
      style: {
        light: '#3b82f6',
        dark: '#818cf8'
      }
    },
    {
      id: 'e2-2c',
      source: '2',
      target: '2c',
      style: {
        light: '#3b82f6',
        dark: '#818cf8'
      }
    },
    {
      id: 'e3-3a',
      source: '3',
      target: '3a',
      style: {
        light: '#10b981',
        dark: '#34d399'
      }
    },
    {
      id: 'e3-3b',
      source: '3',
      target: '3b',
      style: {
        light: '#10b981',
        dark: '#34d399'
      }
    },
    {
      id: 'e4-4a',
      source: '4',
      target: '4a',
      style: {
        light: '#d97706',
        dark: '#fbbf24'
      }
    },
    {
      id: 'e4-4b',
      source: '4',
      target: '4b',
      style: {
        light: '#d97706',
        dark: '#fbbf24'
      }
    },
    {
      id: 'e4-4c',
      source: '4',
      target: '4c',
      style: {
        light: '#d97706',
        dark: '#fbbf24'
      }
    },
    {
      id: 'e5-5a',
      source: '5',
      target: '5a',
      style: {
        light: '#8b5cf6',
        dark: '#a78bfa'
      }
    },
    {
      id: 'e5-5b',
      source: '5',
      target: '5b',
      style: {
        light: '#8b5cf6',
        dark: '#a78bfa'
      }
    },
    {
      id: 'e5-5c',
      source: '5',
      target: '5c',
      style: {
        light: '#8b5cf6',
        dark: '#a78bfa'
      }
    }
  ]
};