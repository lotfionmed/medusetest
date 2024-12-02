import { MindMapNode, MindMapEdge } from './types';

export const heartFailureMindMap = {
  interactive: true,
  title: 'Mind Map - Insuffisance Cardiaque',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Insuffisance Cardiaque',
        content: 'L\'insuffisance cardiaque est un syndrome clinique complexe caractérisé par l\'incapacité du cœur à assurer un débit sanguin suffisant pour répondre aux besoins de l\'organisme.'
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
        content: 'La physiopathologie de l\'insuffisance cardiaque implique de multiples mécanismes d\'adaptation qui deviennent délétères à long terme.'
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
        label: 'Mécanismes initiaux',
        content: 'Les mécanismes initiaux comprennent :\n- Altération de la contractilité\n- Surcharge volumique\n- Surcharge barométrique\n- Perte de masse myocardique'
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
        label: 'Mécanismes compensateurs',
        content: 'Les mécanismes compensateurs incluent :\n- Activation du système sympathique\n- Activation du SRAA\n- Remodelage ventriculaire\n- Activation des peptides natriurétiques'
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
        label: 'Conséquences',
        content: 'Les conséquences sont :\n- Congestion pulmonaire\n- Congestion systémique\n- Hypoperfusion tissulaire\n- Dysfonction d\'organes'
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
        label: 'Diagnostic',
        content: 'Le diagnostic repose sur un faisceau d\'arguments cliniques, biologiques et d\'imagerie.'
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
        label: 'Signes cliniques',
        content: 'Signes cliniques principaux :\n- Dyspnée\n- Orthopnée\n- Œdèmes des membres inférieurs\n- Asthénie\n- Turgescence jugulaire'
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
        label: 'Examens biologiques',
        content: 'Examens biologiques clés :\n- BNP/NT-proBNP\n- Fonction rénale\n- Ionogramme sanguin\n- NFS\n- Bilan hépatique'
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
        label: 'Imagerie',
        content: 'Examens d\'imagerie :\n- Échocardiographie+++\n- Radiographie thoracique\n- ECG\n- IRM cardiaque si nécessaire'
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
        label: 'Traitement',
        content: 'La prise en charge thérapeutique est multimodale et adaptée au type d\'insuffisance cardiaque.'
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
        label: 'Médicamenteux',
        content: 'Traitements médicamenteux :\n- IEC/ARA2\n- Bêtabloquants\n- Anti-aldostérone\n- Diurétiques\n- Sacubitril/valsartan'
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
        label: 'Non médicamenteux',
        content: 'Mesures non médicamenteuses :\n- Régime hyposodé\n- Activité physique adaptée\n- Éducation thérapeutique\n- Vaccination'
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
        label: 'Dispositifs',
        content: 'Dispositifs médicaux :\n- Resynchronisation\n- Défibrillateur\n- Assistance circulatoire\n- Transplantation'
      },
      position: { x: 500, y: 400 },
      style: {
        light: 'bg-amber-50',
        dark: 'bg-amber-500 text-white'
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