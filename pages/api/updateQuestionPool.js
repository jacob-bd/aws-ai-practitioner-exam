import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newQuestions = req.body;
      
      // Convert the questionPool array to a string
      const questionPoolString = JSON.stringify(newQuestions, null, 2);
      
      // Create the content to write to the file
      const fileContent = `let questionPool = ${questionPoolString};

export function getQuestions() {
  return questionPool;
}

export function updateQuestionPool(newQuestions) {
  questionPool = newQuestions;
}

export function getRandomQuestions(count) {
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}`;

      // Write the content to the file
      const filePath = path.join(process.cwd(), 'utils', 'questionPool.js');
      fs.writeFileSync(filePath, fileContent, 'utf8');

      res.status(200).json({ message: 'Question pool updated successfully' });
    } catch (error) {
      console.error('Error updating question pool:', error);
      res.status(500).json({ error: 'Failed to update question pool' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
