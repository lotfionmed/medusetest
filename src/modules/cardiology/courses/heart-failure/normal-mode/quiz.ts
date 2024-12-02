export const quiz = {
  id: 'heart-failure-quiz',
  title: 'Quiz - Insuffisance Cardiaque',
  questions: [
    {
      id: 1,
      text: "Quel est le biomarqueur spécifique de l'insuffisance cardiaque ?",
      options: [
        "La troponine",
        "Le BNP",
        "La CRP",
        "Les D-dimères"
      ],
      correctAnswer: 1,
      explanation: "Le BNP (Brain Natriuretic Peptide) est le biomarqueur spécifique de l'insuffisance cardiaque. Son taux augmente proportionnellement à la sévérité de l'insuffisance cardiaque."
    },
    {
      id: 2,
      text: "Quelle classe médicamenteuse est contre-indiquée dans l'insuffisance cardiaque ?",
      options: [
        "Les IEC",
        "Les bêtabloquants",
        "Les anti-inflammatoires non stéroïdiens",
        "Les diurétiques"
      ],
      correctAnswer: 2,
      explanation: "Les AINS sont contre-indiqués car ils favorisent la rétention hydrosodée et peuvent aggraver l'insuffisance cardiaque."
    },
    {
      id: 3,
      text: "Quel est le signe le plus spécifique de l'insuffisance cardiaque gauche ?",
      options: [
        "Les œdèmes des membres inférieurs",
        "L'orthopnée",
        "La turgescence jugulaire",
        "L'hépatomégalie"
      ],
      correctAnswer: 1,
      explanation: "L'orthopnée (dyspnée en position allongée améliorée en position assise) est très spécifique de l'insuffisance cardiaque gauche."
    }
  ]
};