import { MindMapNode, MindMapEdge } from './types';

export const skullMindMap = {
  interactive: true,
  title: 'Mind Map - Anatomie du Crâne',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Le Crâne',
        content: 'Structure osseuse complexe protégeant le cerveau et les organes sensoriels de la tête.'
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
        label: 'Os du Crâne',
        content: 'Les principaux os formant la boîte crânienne.'
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
        label: 'Os impairs',
        content: 'Os médians :\n- Frontal\n- Occipital\n- Ethmoïde\n- Sphénoïde'
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
        label: 'Os pairs',
        content: 'Os symétriques :\n- Pariétaux\n- Temporaux'
      },
      position: { x: 200, y: 200 },
      style: {
        light: 'bg-blue-50',
        dark: 'bg-blue-500 text-white'
      }
    },
    {
      id: '3',
      data: { 
        label: 'Sutures',
        content: 'Articulations entre les os du crâne.'
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
        label: 'Sutures majeures',
        content: '- Coronale\n- Sagittale\n- Lambdoïde\n- Squameuse'
      },
      position: { x: 500, y: 200 },
      style: {
        light: 'bg-emerald-50',
        dark: 'bg-emerald-500 text-white'
      }
    },
    {
      id: '4',
      data: { 
        label: 'Foramens',
        content: 'Orifices pour le passage des structures nerveuses et vasculaires.'
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
        label: 'Principaux foramens',
        content: '- Foramen magnum\n- Foramen jugulaire\n- Foramen ovale\n- Canal optique'
      },
      position: { x: 400, y: 400 },
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
      id: 'e3-3a',
      source: '3',
      target: '3a',
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
    }
  ]
};