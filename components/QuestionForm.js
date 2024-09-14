import { useState, useEffect } from 'react';

const DOMAINS = [
  'Fundamentals of AI and ML',
  'Fundamentals of Generative AI',
  'Applications of Foundation Models',
  'Guidelines for Responsible AI',
  'Security, Compliance, and Governance for AI Solutions'
];

export default function QuestionForm({ onSubmit, initialData, onCancel }) {
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
      // Clear the form if it's a new question
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
      {/* Move Type and Domain dropdowns here and make them inline */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-1">Type:</label>
          <select
            value={question.type}
            onChange={(e) => setQuestion({ ...question, type: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="single">Single Answer</option>
            <option value="multiple">Multiple Answer</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block mb-1">Domain:</label>
          <select
            value={question.domain}
            onChange={(e) => setQuestion({ ...question, domain: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a domain</option>
            <option value="Fundamentals of AI and ML">Fundamentals of AI and ML</option>
            <option value="Fundamentals of Generative AI">Fundamentals of Generative AI</option>
            <option value="Applications of Foundation Models">Applications of Foundation Models</option>
            <option value="Guidelines for Responsible AI">Guidelines for Responsible AI</option>
            <option value="Security, Compliance, and Governance for AI Solutions">Security, Compliance, and Governance for AI Solutions</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1">Question:</label>
        <textarea
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          className="w-full p-2 border rounded"
          rows="3"
          required
        ></textarea>
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
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {initialData ? 'Update Question' : 'Add Question'}
        </button>
      </div>
      <style jsx>{`
        select, input[type="text"], textarea {
          color: black;
        }
      `}</style>
    </form>
  );
}
