export const cases = [
  {
    id: 'chest-pain-case',
    title: 'Douleur thoracique chez un homme de 55 ans',
    presentation: `Un homme de 55 ans se présente aux urgences pour une douleur thoracique apparue il y a 2 heures. La douleur est rétrosternale, constrictive, et irradie vers le bras gauche. Elle est associée à des sueurs froides et des nausées.`,
    questions: [
      {
        id: 1,
        question: "Quels sont les éléments cliniques qui évoquent une origine cardiaque de la douleur ?",
        answer: `- Douleur rétrosternale, constrictive
- Irradiation vers le bras gauche
- Association avec sueurs froides et nausées
- Apparition brutale et contexte d'effort ou de stress`
      },
      {
        id: 2,
        question: "Quels sont les examens complémentaires de première intention à réaliser ?",
        answer: `- Électrocardiogramme (ECG)
- Dosage des troponines sanguines
- Radiographie thoracique pour exclure d'autres causes`
      },
      {
        id: 3,
        question: "Quelle est la principale hypothèse diagnostique à évoquer dans ce contexte ?",
        answer: `Syndrome coronarien aigu, notamment un infarctus du myocarde.`
      },
      {
        id: 4,
        question: "Quels facteurs de risque cardiovasculaire faut-il rechercher ?",
        answer: `- Tabagisme
- Hypertension artérielle
- Diabète
- Dyslipidémie
- Antécédents familiaux de maladie cardiovasculaire`
      },
      {
        id: 5,
        question: "Quelles sont les mesures thérapeutiques immédiates en cas de suspicion d'infarctus ?",
        answer: `- Administration d'oxygène si désaturation
- Dérivés nitrés pour soulager la douleur
- Aspirine (antiagrégant plaquettaire)
- Héparine pour prévenir les thrombus`
      },
      {
        id: 6,
        question: "Quelles complications immédiates doivent être surveillées ?",
        answer: `- Arrêt cardiaque (fibrillation ventriculaire)
- Choc cardiogénique
- Rupture myocardique`
      },
      {
        id: 7,
        question: "Quels sont les critères qui orientent vers une hospitalisation en unité de soins intensifs ?",
        answer: `- Douleur thoracique persistante malgré les traitements
- Modifications significatives de l'ECG
- Élévation des troponines`
      }
    ]
  }
];