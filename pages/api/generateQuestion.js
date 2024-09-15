import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { questionType, questionDomain } = req.body;

      console.log('Generating question:', { questionType, questionDomain });

      const prompt = `You are an AI assistant tasked with creating an original multiple-choice exam question for the AWS AI Practitioner exam. Your role is to act as an AWS AI Specialist and generate a high-quality question based on the given parameters.
You will be provided with two inputs:
1. Question type: <question_type>${questionType}</question_type>
2. Question domain: <question_domain>${questionDomain}</question_domain>
Follow these steps to create the exam question:
1. Create a clear and concise question text related to the specified domain. The question should be challenging but appropriate for the AWS AI Practitioner level.
2. Generate 4-5 answer options that are relevant to the question. Ensure that the options are distinct and plausible.
3. For a single correct answer question, mark only one option as correct. For a multiple correct answers question, mark 2-3 options as correct.
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

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant that generates exam questions." },
          { role: "user", content: prompt }
        ],
        max_tokens: 500,
        n: 1,
        temperature: 0.7,
      });

      console.log('OpenAI response:', completion.choices[0].message.content);

      const generatedQuestion = JSON.parse(completion.choices[0].message.content.trim());
      
      // Add an ID to the generated question
      generatedQuestion.id = Date.now().toString();

      console.log('Generated question:', generatedQuestion);

      res.status(200).json({ question: generatedQuestion });
    } catch (error) {
      console.error('Error generating question:', error);
      res.status(500).json({ error: 'Error generating question' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}