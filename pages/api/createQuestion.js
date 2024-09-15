import OpenAI from 'openai';
import { addQuestion, getQuestions } from '../../utils/questionPool';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { questionType, questionDomain } = req.body;

  console.log('Received request:', { questionType, questionDomain });

  const prompt = `You are an AI assistant tasked with creating an original multiple-choice exam question for the AWS AI Practitioner exam. Your role is to act as an AWS AI Specialist and generate a high-quality question based on the given parameters.
You will be provided with two inputs:
1. Question type: <question_type>${questionType}</question_type>
2. Question domain: <question_domain>${questionDomain}</question_domain>
Follow these steps to create the exam question:
1. Create a clear and concise question text related to the specified domain. The question should be challenging but appropriate for the AWS AI Practitioner level.
2. Generate 4-5 answer options that are relevant to the question. Ensure that the options are distinct and plausible.
3. For a single correct answer question, mark only one option as correct. For a multiple correct answers question, mark 2-3 options as correct and ensure to tell the user in the question how many the need to select.
4. For each answer option, provide a brief explanation of why it is correct or incorrect. The explanation should be informative and help the exam taker understand the concept better.

Please provide the response as a JSON object in the following format:
{
  "text": "Question text here",
  "type": "${questionType}",
  "domain": "${questionDomain}",
  "options": [
    {
      "text": "Option 1 text",
      "correct": true/false,
      "explanation": "Explanation for option 1"
    },
    {
      "text": "Option 2 text",
      "correct": true/false,
      "explanation": "Explanation for option 2"
    },
    ...
  ]
}`;

  try {
    console.log('Sending request to OpenAI');
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini	",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    console.log('Received response from OpenAI');
    console.log('Raw OpenAI response:', JSON.stringify(completion.choices[0].message, null, 2));
    
    let content = completion.choices[0].message.content;
    content = content.replace(/```json\n|\n```/g, '');
    
    let generatedQuestion;
    try {
      generatedQuestion = JSON.parse(content);
      console.log('Parsed generated question:', JSON.stringify(generatedQuestion, null, 2));
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      return res.status(500).json({ error: 'Error parsing AI response: ' + parseError.message });
    }
    
    if (!generatedQuestion || typeof generatedQuestion !== 'object') {
      console.error('Invalid question format returned by AI');
      return res.status(500).json({ error: 'Invalid question format returned by AI' });
    }

    addQuestion(generatedQuestion);

    res.status(200).json({ message: 'Question added successfully', question: generatedQuestion });
  } catch (error) {
    console.error('Error generating question', error);
    res.status(500).json({ error: 'Error generating question: ' + error.message });
  }
}