export const clinicalQuiz = {
  id: 'clinical-chest-pain-quiz',
  title: 'Quiz - Cas Cliniques de Douleur Thoracique',
  cases: [
    {
      id: 'case1',
      title: 'Cas 1: Douleur Thoracique chez un homme de 55 ans',
      questions: [
        {
          id: 1,
          text: "Quelle est la localisation typique de la douleur dans un infarctus du myocarde ?",
          options: [
            "Région lombaire",
            "Rétrosternale",
            "Épigastrique",
            "Fosse iliaque droite"
          ],
          correctAnswer: 1,
          explanation: "La douleur rétrosternale, constrictive, est typique d'un infarctus du myocarde."
        },
        {
          id: 2,
          text: "Quel examen est prioritaire pour confirmer un diagnostic de syndrome coronarien aigu ?",
          options: [
            "Échographie cardiaque",
            "Électrocardiogramme (ECG)",
            "Radiographie thoracique",
            "Dosage de la CRP"
          ],
          correctAnswer: 1,
          explanation: "L'ECG est essentiel pour détecter des anomalies ischémiques comme un sus-décalage ST."
        },
        {
          id: 3,
          text: "Quel médicament est administré en urgence pour réduire la formation de caillots ?",
          options: [
            "Paracétamol",
            "Insuline",
            "Aspirine",
            "Bicarbonate de sodium"
          ],
          correctAnswer: 2,
          explanation: "L'aspirine est un antiagrégant plaquettaire administré en urgence pour prévenir la formation de caillots."
        },
        {
          id: 4,
          text: "Quelle complication peut survenir dans les premières heures d'un infarctus ?",
          options: [
            "Infection pulmonaire",
            "Insuffisance rénale",
            "Fibrillation ventriculaire",
            "Ulceration gastrique"
          ],
          correctAnswer: 2,
          explanation: "La fibrillation ventriculaire est une cause fréquente d'arrêt cardiaque dans les premières heures d'un infarctus."
        }
      ]
    },
    {
      id: 'case2',
      title: 'Cas 2: Douleur thoracique chez une femme de 35 ans',
      questions: [
        {
          id: 1,
          text: "Quelle est l'hypothèse diagnostique principale ?",
          options: [
            "Pneumothorax spontané",
            "Embolie pulmonaire",
            "Angine de poitrine",
            "Gastro-entérite"
          ],
          correctAnswer: 1,
          explanation: "L'embolie pulmonaire est évoquée en raison de la douleur thoracique pleurétique et du voyage prolongé (facteur de risque)."
        },
        {
          id: 2,
          text: "Quel examen complémentaire permet de confirmer le diagnostic ?",
          options: [
            "ECG",
            "Angio-scanner thoracique",
            "Radiographie thoracique",
            "IRM thoracique"
          ],
          correctAnswer: 1,
          explanation: "L'angio-scanner thoracique est l'examen de choix pour visualiser une embolie pulmonaire."
        },
        {
          id: 3,
          text: "Quels sont les facteurs de risque de cette pathologie ?",
          options: [
            "Voyages prolongés, obésité, contraceptifs oraux",
            "Hypertension artérielle et dyslipidémie",
            "Tabac uniquement",
            "Exposition à des allergènes"
          ],
          correctAnswer: 1,
          explanation: "Les voyages prolongés, l'obésité et les contraceptifs oraux augmentent le risque de thrombose et d'embolie pulmonaire."
        },
        {
          id: 4,
          text: "Quel est le traitement initial pour stabiliser la patiente ?",
          options: [
            "Antibiotiques",
            "Anticoagulants",
            "Antalgiques",
            "Oxygène à haute dose"
          ],
          correctAnswer: 1,
          explanation: "Les anticoagulants sont utilisés pour prévenir l'extension du caillot dans une embolie pulmonaire."
        }
      ]
    }
  ]
};