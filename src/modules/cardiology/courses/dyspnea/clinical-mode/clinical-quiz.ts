export const clinicalQuiz = {
  id: 'clinical-dyspnea-quiz',
  title: 'Quiz - Cas Cliniques de Dyspnée',
  cases: [
    {
      id: 'case1',
      title: 'Cas 1: Dyspnée aiguë aux urgences',
      questions: [
        {
          id: 1,
          text: "Quel signe clinique est en faveur d'un OAP ?",
          options: [
            "Fièvre à 39°C",
            "Crépitants bilatéraux",
            "Douleur thoracique latéralisée",
            "Toux sèche isolée"
          ],
          correctAnswer: 1,
          explanation: "Les crépitants bilatéraux aux bases sont très évocateurs d'un œdème aigu du poumon (OAP)."
        },
        {
          id: 2,
          text: "Quelle est la conduite à tenir immédiate devant une SpO2 à 85% ?",
          options: [
            "Attendre les résultats biologiques",
            "Débuter une oxygénothérapie",
            "Faire un ECG",
            "Prendre la température"
          ],
          correctAnswer: 1,
          explanation: "L'oxygénothérapie doit être débutée immédiatement devant une désaturation significative."
        }
      ]
    },
    {
      id: 'case2',
      title: 'Cas 2: Dyspnée chronique',
      questions: [
        {
          id: 1,
          text: "Quel examen est indispensable dans le bilan d'une dyspnée chronique ?",
          options: [
            "Épreuves fonctionnelles respiratoires",
            "Scanner cérébral",
            "Échographie abdominale",
            "Fibroscopie gastrique"
          ],
          correctAnswer: 0,
          explanation: "Les EFR sont indispensables pour évaluer la fonction respiratoire dans la dyspnée chronique."
        }
      ]
    }
  ]
};