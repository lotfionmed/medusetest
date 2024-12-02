export const clinicalQuiz = {
  id: 'clinical-coronary-quiz',
  title: 'Quiz - Cas Cliniques de Maladie Coronarienne',
  cases: [
    {
      id: 'case1',
      title: 'Cas 1: Angor stable',
      questions: [
        {
          id: 1,
          text: "Quelle est la caractéristique principale de l'angor stable ?",
          options: [
            "Douleur permanente",
            "Douleur uniquement au repos",
            "Douleur à l'effort reproductible",
            "Douleur variable sans facteur déclenchant"
          ],
          correctAnswer: 2,
          explanation: "L'angor stable se caractérise par une douleur thoracique survenant à l'effort, de manière reproductible, et cédant au repos ou à la prise de trinitrine."
        },
        {
          id: 2,
          text: "Quel examen est indiqué en première intention chez ce patient ?",
          options: [
            "Coronarographie",
            "Épreuve d'effort",
            "IRM cardiaque",
            "Scanner coronaire"
          ],
          correctAnswer: 1,
          explanation: "L'épreuve d'effort est l'examen de première intention pour confirmer le diagnostic d'angor stable et évaluer le seuil ischémique."
        }
      ]
    },
    {
      id: 'case2',
      title: 'Cas 2: Syndrome coronarien aigu',
      questions: [
        {
          id: 1,
          text: "Quel est le signe ECG caractéristique d'une ischémie sous-endocardique ?",
          options: [
            "Sous-décalage du segment ST",
            "Onde Q pathologique",
            "Bloc de branche gauche",
            "Onde T positive"
          ],
          correctAnswer: 0,
          explanation: "Le sous-décalage du segment ST est caractéristique d'une ischémie sous-endocardique dans le syndrome coronarien aigu."
        },
        {
          id: 2,
          text: "Quelle est l'indication d'une coronarographie en urgence ?",
          options: [
            "Angor stable",
            "Syndrome coronarien aigu ST+",
            "Douleur atypique",
            "ECG normal"
          ],
          correctAnswer: 1,
          explanation: "Le syndrome coronarien aigu avec sus-décalage du segment ST (ST+) nécessite une coronarographie en urgence pour une revascularisation rapide."
        }
      ]
    }
  ]
};