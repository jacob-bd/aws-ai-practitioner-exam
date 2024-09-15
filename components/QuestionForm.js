import { useState, useEffect } from 'react';

const DOMAINS = [
  'Fundamentals of AI and ML',
  'Fundamentals of Generative AI',
  'Applications of Foundation Models',
  'Guidelines for Responsible AI',
  'Security, Compliance, and Governance for AI Solutions'
];

const QuestionForm = ({ onSubmit, initialData, onCancel, isAddingNew }) => {
  const [question, setQuestion] = useState({
    text: '',
    type: 'single',
    domain: DOMAINS[0],
    options: [
      { text: '', correct: false, explanation: '' },
      { text: '', correct: false, explanation: '' },
    ],
  });

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...question.options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setQuestion({ ...question, options: newOptions });
  };

  const handleCorrectChange = (index) => {
    const newOptions = question.options.map((option, i) => {
      if (question.type === 'single') {
        // For single choice, only one answer can be correct
        return { ...option, correct: i === index };
      } else {
        // For multiple choice, toggle the correct state of the clicked option
        return i === index ? { ...option, correct: !option.correct } : option;
      }
    });
    setQuestion({ ...question, options: newOptions });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="questionText" className="block text-sm font-medium text-gray-300">Question Text</label>
        <textarea
          id="questionText"
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows="3"
        ></textarea>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="domain" className="block text-sm font-medium text-gray-300">Domain</label>
          <select
            id="domain"
            value={question.domain}
            onChange={(e) => setQuestion({ ...question, domain: e.target.value })}
            className="mt-1 block w-full rounded-md bg-gray-800 border border-white text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
          >
            {DOMAINS.map((domain) => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="questionType" className="block text-sm font-medium text-gray-300">Question Type</label>
          <select
            id="questionType"
            value={question.type}
            onChange={(e) => setQuestion({ ...question, type: e.target.value })}
            className="mt-1 block w-full rounded-md bg-gray-800 border border-white text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
          >
            <option value="single">Single Choice</option>
            <option value="multiple">Multiple Choice</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Answers</label>
        {question.options.map((option, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-800 rounded-md">
            <label htmlFor={`answer-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Answer {index + 1}</label>
            <input
              id={`answer-${index}`}
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
              className="mb-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder={`Answer ${index + 1}`}
            />
            <label htmlFor={`explanation-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Explanation</label>
            <textarea
              id={`explanation-${index}`}
              value={option.explanation}
              onChange={(e) => handleOptionChange(index, 'explanation', e.target.value)}
              className="mb-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="2"
              placeholder="Explanation"
            ></textarea>
            <label className="inline-flex items-center">
              <input
                type={question.type === 'single' ? 'radio' : 'checkbox'}
                checked={option.correct}
                onChange={() => handleCorrectChange(index)}
                name={question.type === 'single' ? 'correct-answer' : `correct-answer-${index}`}
                className={`form-${question.type === 'single' ? 'radio' : 'checkbox'} h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 bg-gray-700`}
              />
              <span className="ml-2 text-sm text-gray-300">Correct</span>
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => {
            const newOptions = [...question.options, { text: '', correct: false, explanation: '' }];
            setQuestion({ ...question, options: newOptions });
          }}
          className="px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Answer
        </button>
      </div>

      <div className="flex justify-center space-x-3">
        <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {isAddingNew ? 'Add Question' : 'Update Question'}
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;
