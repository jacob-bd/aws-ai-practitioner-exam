import { getQuestions, addQuestion, updateQuestion, deleteQuestion, updateQuestionPool } from '../../utils/questionPool';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(getQuestions());
      break;
    case 'POST':
      const newQuestion = req.body;
      addQuestion(newQuestion);
      res.status(201).json(newQuestion);
      break;
    case 'PUT':
      const updatedQuestion = req.body;
      updateQuestion(updatedQuestion);
      res.status(200).json(updatedQuestion);
      break;
    case 'DELETE':
      const { id } = req.query;
      deleteQuestion(id);
      res.status(200).json({ message: 'Question deleted successfully' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
