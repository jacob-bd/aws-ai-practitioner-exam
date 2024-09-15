import { getQuestions, updateQuestion, deleteQuestion } from '../../../utils/questionPool';

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  console.log(`Received ${method} request for question ID: ${id}`);

  switch (method) {
    case 'GET':
      const question = getQuestions().find(q => q.id === id);
      if (question) {
        res.status(200).json(question);
      } else {
        res.status(404).json({ message: 'Question not found' });
      }
      break;
    case 'PUT':
      try {
        const updatedQuestion = req.body;
        updateQuestion(updatedQuestion);
        res.status(200).json(updatedQuestion);
      } catch (error) {
        console.error(`Error updating question with ID ${id}:`, error);
        res.status(400).json({ message: `Failed to update question: ${error.message}` });
      }
      break;
    case 'DELETE':
      try {
        console.log(`Attempting to delete question with ID: ${id}`);
        deleteQuestion(id);
        console.log(`Successfully deleted question with ID: ${id}`);
        res.status(200).json({ message: 'Question deleted successfully' });
      } catch (error) {
        console.error(`Error deleting question with ID ${id}:`, error);
        res.status(400).json({ message: `Failed to delete question: ${error.message}` });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
