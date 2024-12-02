import { MindMapNode, MindMapEdge } from './types';

export const chestPainMindMap = {
  interactive: true,
  title: 'Mind Map - Douleur Thoracique',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Douleur Thoracique',
        content: 'La douleur thoracique est un motif fréquent de consultation aux urgences. Son évaluation précise est cruciale car elle peut révéler des pathologies potentiellement graves nécessitant une prise en charge rapide.'
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
        label: 'Caractéristiques',
        content: 'L\'analyse précise des caractéristiques de la douleur est essentielle pour orienter le diagnostic. Il faut évaluer sa localisation, son type et ses irradiations.'
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
        label: 'Localisation',
        content: 'La localisation peut être :\n- Rétrosternale : évocatrice d\'origine coronarienne\n- Latéralisée : plutôt pleurale\n- Punctiforme : origine pariétale possible\n- Épigastrique : peut être d\'origine cardiaque'
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
        label: 'Type',
        content: 'Types de douleur :\n- Constrictive : typique de l\'angor\n- En coup de poignard : évoque une péricardite\n- Augmentée à l\'inspiration : pleurétique\n- Brûlure : possible origine digestive'
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
        label: 'Irradiation',
        content: 'Les irradiations peuvent orienter :\n- Bras gauche : typique de l\'angor\n- Mâchoire/dos : possible origine coronarienne\n- Épaule : possible origine pleurale\n- Dos : possible dissection aortique'
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
        label: 'Étiologies',
        content: 'Les causes de douleur thoracique sont nombreuses et d\'origine variable. Certaines nécessitent une prise en charge urgente.'
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
        label: 'Cardiaques',
        content: 'Causes cardiaques :\n- Syndrome coronarien aigu\n- Péricardite\n- Dissection aortique\n- Embolie pulmonaire'
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
        label: 'Pulmonaires',
        content: 'Causes pulmonaires :\n- Pneumothorax\n- Pleurésie\n- Pneumopathie\n- Embolie pulmonaire'
      },
      position: { x: 650, y: 200 },
      style: {
        light: 'bg-emerald-50',
        dark: 'bg-emerald-500 text-white'
      }
    },
    {
      id: '3c',
      data: { 
        label: 'Digestives',
        content: 'Causes digestives :\n- Reflux gastro-œsophagien\n- Spasme œsophagien\n- Ulcère gastrique\n- Pathologie biliaire'
      },
      position: { x: 800, y: 200 },
      style: {
        light: 'bg-emerald-50',
        dark: 'bg-emerald-500 text-white'
      }
    },
    {
      id: '4',
      data: { 
        label: 'Examens',
        content: 'Les examens complémentaires sont choisis en fonction du contexte clinique et des hypothèses diagnostiques.'
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
        label: 'ECG',
        content: 'L\'ECG est un examen crucial qui doit être réalisé rapidement devant toute douleur thoracique. Il recherche :\n- Sus ou sous-décalage ST\n- Ondes T négatives\n- Troubles du rythme\n- Signes de péricardite'
      },
      position: { x: 300, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
      }
    },
    {
      id: '4b',
      data: { 
        label: 'Biologie',
        content: 'Examens biologiques essentiels :\n- Troponines\n- D-dimères\n- NFS, CRP\n- Ionogramme sanguin\n- Gaz du sang'
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
        label: 'Imagerie',
        content: 'Examens d\'imagerie selon le contexte :\n- Radiographie thoracique\n- Scanner thoracique\n- Échocardiographie\n- Coronarographie'
      },
      position: { x: 500, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
      }
    }
  ],
  edges: [
    // Les edges restent inchangés
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
      id: 'e3-3c',
      source: '3',
      target: '3c',
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
    }
  ]
};