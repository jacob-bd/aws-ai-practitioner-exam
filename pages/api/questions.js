import { getQuestions, updateQuestionPool } from '../../utils/questionPool';

let questions = getQuestions();

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(questions);
      break;
    case 'POST':
      const newQuestion = { id: Date.now(), ...req.body };
      questions.push(newQuestion);
      updateQuestionPool(questions);
      res.status(201).json(newQuestion);
      break;
    // ... other cases
  }
}
