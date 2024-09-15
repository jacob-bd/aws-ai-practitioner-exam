import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from '../../utils/questionPool';
import { updateQuestionPoolFile } from '../../utils/questionPoolFile';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(getQuestions());
      break;

    case 'POST':
      try {
        const newQuestion = req.body;
        addQuestion(newQuestion);
        updateQuestionPoolFile(); // Add this line
        res.status(201).json(newQuestion);
      } catch (error) {
        if (error.message.includes('Duplicate question')) {
          res.status(409).json({ error: error.message });
        } else {
          console.error('Error adding question:', error);
          res.status(500).json({ error: 'Failed to add question' });
        }
      }
      break;

    case 'PUT':
      try {
        const updatedQuestion = req.body;
        updateQuestion(updatedQuestion);
        updateQuestionPoolFile(); // Add this line
        res.status(200).json(updatedQuestion);
      } catch (error) {
        console.error('Error updating question:', error);
        res.status(400).json({ message: 'Failed to update question' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        deleteQuestion(id);
        updateQuestionPoolFile(); // Add this line
        res.status(200).json({ message: 'Question deleted successfully' });
      } catch (error) {
        console.error('Error deleting question:', error);
        res.status(400).json({ message: 'Failed to delete question' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
