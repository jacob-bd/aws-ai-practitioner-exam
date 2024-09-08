import { getQuestions, updateQuestionPool } from '../../../utils/questionPool';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  let questions = getQuestions();
  const questionId = parseInt(id, 10);

  switch (method) {
    case 'PUT':
      try {
        const index = questions.findIndex(q => q.id === questionId);
        if (index !== -1) {
          questions[index] = { ...questions[index], ...req.body };
          updateQuestionPool(questions);
          
          // Call the API route to update the file
          const updateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/updateQuestionPool`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(questions),
          });

          if (!updateResponse.ok) {
            throw new Error('Failed to update question pool file');
          }

          res.status(200).json(questions[index]);
        } else {
          res.status(404).json({ message: 'Question not found' });
        }
      } catch (error) {
        console.error('Error updating question:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const initialLength = questions.length;
        questions = questions.filter(q => q.id !== questionId);
        
        if (questions.length < initialLength) {
          updateQuestionPool(questions);
          
          // Call the API route to update the file
          const updateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/updateQuestionPool`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(questions),
          });

          if (!updateResponse.ok) {
            throw new Error('Failed to update question pool file');
          }

          res.status(200).json({ message: 'Question deleted successfully' });
        } else {
          res.status(404).json({ message: 'Question not found' });
        }
      } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
      break;
    // ... other cases (PUT, GET, etc.)
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
