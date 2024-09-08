import { useState, useEffect } from 'react';

const DOMAINS = [
  'Fundamentals of AI and ML',
  'Fundamentals of Generative AI',
  'Applications of Foundation Models',
  'Guidelines for Responsible AI',
  'Security, Compliance, and Governance for AI Solutions'
];

export default function QuestionForm({ onSubmit, initialData }) {
  const [question, setQuestion] = useState(initialData || {
    text: '',
    type: 'single',
    domain: '',
    options: [{ text: '', correct: false, explanation: '' }],
  });

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    if (!initialData) {
      setQuestion({
        text: '',
        type: 'single',
        domain: '',
        options: [{ text: '', correct: false, explanation: '' }],
      });
    }
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...question.options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setQuestion({ ...question, options: newOptions });
  };

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, { text: '', correct: false, explanation: '' }],
    });
  };

  const removeOption = (index) => {
    const newOptions = question.options.filter((_, i) => i !== index);
    setQuestion({ ...question, options: newOptions });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Question Text:</label>
        <input
          type="text"
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Type:</label>
        <select
          value={question.type}
          onChange={(e) => setQuestion({ ...question, type: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        >
          <option value="single">Single Choice</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Domain:</label>
        <select
          value={question.domain}
          onChange={(e) => setQuestion({ ...question, domain: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        >
          <option value="">Select a domain</option>
          {DOMAINS.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-1">Options:</label>
        {question.options.map((option, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <input
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
              className="w-full p-2 border rounded mb-1"
              placeholder="Option text"
              required
            />
            <div className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={option.correct}
                onChange={(e) => handleOptionChange(index, 'correct', e.target.checked)}
                className="mr-2"
              />
              <label>Correct</label>
            </div>
            <textarea
              value={option.explanation}
              onChange={(e) => handleOptionChange(index, 'explanation', e.target.value)}
              className="w-full p-2 border rounded mb-1"
              placeholder="Explanation"
              required
            />
            <button type="button" onClick={() => removeOption(index)} className="text-red-500">
              Remove Option
            </button>
          </div>
        ))}
        <button type="button" onClick={addOption} className="bg-green-500 text-white px-2 py-1 rounded">
          Add Option
        </button>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {initialData ? 'Update Question' : 'Add Question'}
      </button>
      <style jsx>{`
        select, input[type="text"], textarea {
          color: black;
        }
      `}</style>
    </form>
  );
}
