export const clinicalQuiz = {
  id: 'clinical-heart-failure-quiz',
  title: 'Quiz - Cas Cliniques d\'Insuffisance Cardiaque',
  cases: [
    {
      id: 'case1',
      title: 'Cas 1: Insuffisance cardiaque aiguë',
      questions: [
        {
          id: 1,
          text: "Quel est le signe le plus spécifique d'une décompensation cardiaque gauche ?",
          options: [
            "Toux sèche",
            "Crépitants bilatéraux",
            "Fièvre",
            "Douleur thoracique"
          ],
          correctAnswer: 1,
          explanation: "Les crépitants bilatéraux aux bases pulmonaires sont très évocateurs d'une congestion pulmonaire liée à une insuffisance cardiaque gauche."
        },
        {
          id: 2,
          text: "Quelle est la première ligne de traitement dans l'OAP ?",
          options: [
            "Antibiotiques",
            "Diurétiques de l'anse",
            "Antiagrégants plaquettaires",
            "Corticoïdes"
          ],
          correctAnswer: 1,
          explanation: "Les diurétiques de l'anse (furosémide) sont le traitement de première intention de l'OAP pour réduire la congestion pulmonaire."
        }
      ]
    },
    {
      id: 'case2',
      title: 'Cas 2: Insuffisance cardiaque chronique',
      questions: [
        {
          id: 1,
          text: "Quelle est la classe thérapeutique fondamentale dans l'insuffisance cardiaque à fraction d'éjection altérée ?",
          options: [
            "IEC/ARA2",
            "Antibiotiques",
            "Antalgiques",
            "Anticoagulants"
          ],
          correctAnswer: 0,
          explanation: "Les IEC (ou ARA2 en cas d'intolérance) sont le traitement de fond fondamental de l'insuffisance cardiaque à fraction d'éjection altérée."
        }
      ]
    }
  ]
};