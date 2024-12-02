import { MindMapNode, MindMapEdge } from './types';

export const dyspneaMindMap = {
  interactive: true,
  title: 'Mind Map - Dyspnée',
  nodes: [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'Dyspnée',
        content: 'La dyspnée est une sensation subjective de difficulté respiratoire ou d\'essoufflement anormal. C\'est un symptôme fréquent qui peut révéler diverses pathologies cardiaques ou pulmonaires.'
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
        content: 'Les caractéristiques de la dyspnée permettent d\'orienter le diagnostic. Il est important d\'évaluer son mode d\'installation, sa sévérité et les facteurs déclenchants.'
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
        label: 'Mode d\'installation',
        content: 'La dyspnée peut être aiguë (< 1 mois) ou chronique (> 1 mois). Le mode d\'installation oriente vers des étiologies différentes : une dyspnée aiguë évoque plutôt une embolie pulmonaire ou un OAP, tandis qu\'une dyspnée chronique fait penser à une BPCO ou une insuffisance cardiaque.'
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
        label: 'Sévérité (NYHA)',
        content: 'La classification NYHA permet d\'évaluer la sévérité de la dyspnée :\nStade I : Dyspnée pour des efforts importants\nStade II : Dyspnée pour des efforts modérés\nStade III : Dyspnée pour des efforts minimes\nStade IV : Dyspnée au repos'
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
        label: 'Facteurs déclenchants',
        content: 'Les facteurs déclenchants sont importants pour le diagnostic :\n- Effort : insuffisance cardiaque, BPCO\n- Position allongée : insuffisance cardiaque\n- Exposition allergénique : asthme\n- Contexte infectieux : pneumopathie'
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
        content: 'Les causes de dyspnée sont nombreuses et peuvent être classées en causes cardiaques, respiratoires et autres. Une approche systématique est nécessaire pour le diagnostic.'
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
        content: 'Causes cardiaques principales :\n- Insuffisance cardiaque\n- Cardiopathie ischémique\n- Troubles du rythme\n- Péricardite'
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
        label: 'Respiratoires',
        content: 'Causes respiratoires principales :\n- BPCO\n- Asthme\n- Embolie pulmonaire\n- Pneumopathie\n- Cancer bronchique'
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
        label: 'Autres',
        content: 'Autres causes :\n- Anémie\n- Acidose métabolique\n- Causes psychogènes\n- Maladies neuromusculaires\n- Déconditionnement physique'
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
        label: '1ère intention',
        content: 'Examens de première intention :\n- ECG\n- Radiographie thoracique\n- Gaz du sang\n- NFS, ionogramme\n- D-dimères si suspicion d\'EP\n- BNP/NT-proBNP si suspicion d\'IC'
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
        label: '2nde intention',
        content: 'Examens de seconde intention :\n- Épreuves fonctionnelles respiratoires\n- Échocardiographie\n- Scanner thoracique\n- Scintigraphie pulmonaire\n- Coronarographie'
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
    }
  ]
};