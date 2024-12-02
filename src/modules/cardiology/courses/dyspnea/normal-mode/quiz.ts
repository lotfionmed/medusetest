export const quiz = {
  id: 'dyspnea-quiz',
  title: 'Quiz - Dyspnée',
  questions: [
    {
      id: 1,
      text: "Quelle est la classification fonctionnelle utilisée pour évaluer la dyspnée ?",
      options: [
        "Classification de Child-Pugh",
        "Classification NYHA",
        "Score de Glasgow",
        "Score de Wells"
      ],
      correctAnswer: 1,
      explanation: "La classification NYHA (New York Heart Association) est utilisée pour évaluer la sévérité de la dyspnée en 4 stades selon le niveau d'effort déclenchant les symptômes."
    },
    {
      id: 2,
      text: "Quel examen est indispensable en première intention devant une dyspnée aiguë ?",
      options: [
        "Scanner thoracique",
        "Échocardiographie",
        "Radiographie thoracique",
        "Scintigraphie pulmonaire"
      ],
      correctAnswer: 2,
      explanation: "La radiographie thoracique est l'examen de première intention car elle permet rapidement d'orienter vers une cause cardiaque ou pulmonaire."
    },
    {
      id: 3,
      text: "Quel biomarqueur est utile pour le diagnostic d'insuffisance cardiaque ?",
      options: [
        "Troponine",
        "BNP",
        "CRP",
        "D-dimères"
      ],
      correctAnswer: 1,
      explanation: "Le BNP (Brain Natriuretic Peptide) est un marqueur spécifique de l'insuffisance cardiaque, son élévation est proportionnelle à la sévérité."
    }
  ]
};