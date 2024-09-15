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
        return { ...option, correct: i === index };
      } else {
        return i === index ? { ...option, correct: !option.correct } : option;
      }
    });
    setQuestion({ ...question, options: newOptions });
  };

  const clearFields = () => {
    setQuestion({
      text: '',
      type: 'single',
      domain: DOMAINS[0],
      options: [
        { text: '', correct: false, explanation: '' },
        { text: '', correct: false, explanation: '' },
      ],
    });
  };

  const handleDeleteOption = (indexToDelete) => {
    const newOptions = question.options.filter((_, index) => index !== indexToDelete);
    setQuestion({ ...question, options: newOptions });
  };

  const inputClass = "w-full p-2 pl-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white dark:text-white dark:bg-gray-700";
  const selectClass = "w-full p-2 pl-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white dark:text-white dark:bg-gray-700 appearance-none";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="questionText" className={labelClass}>Question Text</label>
        <textarea
          id="questionText"
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          className={`${inputClass} h-20`}
          rows="3"
        ></textarea>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="domain" className={labelClass}>Domain</label>
          <select
            id="domain"
            value={question.domain}
            onChange={(e) => setQuestion({ ...question, domain: e.target.value })}
            className={selectClass}
          >
            {DOMAINS.map((domain) => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="questionType" className={labelClass}>Question Type</label>
          <select
            id="questionType"
            value={question.type}
            onChange={(e) => setQuestion({ ...question, type: e.target.value })}
            className={selectClass}
          >
            <option value="single">Single Choice</option>
            <option value="multiple">Multiple Choice</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Answers</label>
        {question.options.map((option, index) => (
          <div key={`option-${index}`} className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 relative">
            <label htmlFor={`answer-${index}`} className={labelClass}>Answer {index + 1}</label>
            <input
              id={`answer-${index}`}
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
              className={`${inputClass} mb-4`}
              placeholder="Answer Text"
            />
            <label htmlFor={`explanation-${index}`} className={labelClass}>Explanation</label>
            <textarea
              id={`explanation-${index}`}
              value={option.explanation}
              onChange={(e) => handleOptionChange(index, 'explanation', e.target.value)}
              className={`${inputClass} h-20`}
              rows="2"
              placeholder="Explanation Text"
            ></textarea>
            <label className="inline-flex items-center mt-2">
              <input
                type={question.type === 'single' ? 'radio' : 'checkbox'}
                checked={option.correct}
                onChange={() => handleCorrectChange(index)}
                name={question.type === 'single' ? 'correct-answer' : `correct-answer-${index}`}
                className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Correct</span>
            </label>
            <button
              type="button"
              onClick={() => handleDeleteOption(index)}
              className="absolute bottom-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
              aria-label={`Delete answer option ${index + 1}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 mb-6">
        <button
          type="button"
          onClick={() => {
            const newOptions = [...question.options, { text: '', correct: false, explanation: '' }];
            setQuestion({ ...question, options: newOptions });
          }}
          className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Answer Option
        </button>
      </div>

      <div className="flex justify-center space-x-3">
        <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {isAddingNew ? 'Add Question' : 'Update Question'}
        </button>
        {isAddingNew && (
          <button
            type="button"
            onClick={clearFields}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
          >
            Clear Fields
          </button>
        )}
      </div>
    </form>
  );
};

export default QuestionForm;
