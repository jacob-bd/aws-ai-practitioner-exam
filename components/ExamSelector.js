import React, { useState } from 'react';

const ExamSelector = ({ onStart }) => {
  const [questionCount, setQuestionCount] = useState(15);
  const [immediateFeedback, setImmediateFeedback] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">AWS Certified AI Practitioner Exam</h1>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of questions:</label>
        <select 
          value={questionCount} 
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
        >
          <option value={5}>5</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={55}>55</option>
          <option value={85}>85</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="immediateFeedback"
          checked={immediateFeedback}
          onChange={(e) => setImmediateFeedback(e.target.checked)}
          className="rounded text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="immediateFeedback" className="text-sm text-gray-700 dark:text-gray-300">Immediate Answers feedback</label>
      </div>
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => onStart(questionCount, immediateFeedback)}
          className="px-6 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamSelector;