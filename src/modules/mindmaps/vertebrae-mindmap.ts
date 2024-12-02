import { MindMapNode, MindMapEdge } from './types';

export const vertebraeMindMap = {
  interactive: true,
  title: 'Mind Map - Vertèbres',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Vertèbres',
        content: 'Os constituant la colonne vertébrale, protégeant la moelle épinière et permettant la mobilité du tronc.'
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
        label: 'Régions',
        content: 'Les différentes régions de la colonne vertébrale.'
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
        label: 'Cervicale',
        content: '7 vertèbres (C1-C7) :\n- Atlas (C1)\n- Axis (C2)\n- C3-C7'
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
        label: 'Thoracique',
        content: '12 vertèbres (T1-T12) :\n- Facettes costales\n- Processus épineux obliques'
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
        label: 'Lombaire',
        content: '5 vertèbres (L1-L5) :\n- Corps massif\n- Processus transverses développés'
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
        label: 'Structure',
        content: 'Éléments constitutifs d\'une vertèbre type.'
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
        label: 'Corps vertébral',
        content: '- Partie antérieure\n- Support du poids\n- Surface articulaire'
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
        label: 'Arc vertébral',
        content: '- Pédicules\n- Lames\n- Processus épineux\n- Processus transverses'
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
        label: 'Articulations',
        content: 'Connexions entre les vertèbres.'
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
        label: 'Disque intervertébral',
        content: '- Nucleus pulposus\n- Annulus fibrosus\n- Amortissement'
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
        label: 'Facettes articulaires',
        content: '- Supérieures\n- Inférieures\n- Orientation variable'
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
    }
  ]
};