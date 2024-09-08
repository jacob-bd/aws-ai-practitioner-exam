import React, { useState } from 'react';

const ExamSelector = ({ onStart }) => {
  const [questionCount, setQuestionCount] = useState(15);
  const [feedbackType, setFeedbackType] = useState('end');
  const [timerType, setTimerType] = useState('elapsed');
  const [timeLimit, setTimeLimit] = useState(600); // 10 minutes in seconds

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
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Answers feedback Type:</label>
        <select
          value={feedbackType}
          onChange={(e) => setFeedbackType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
        >
          <option value="end">At the end of the exam</option>
          <option value="immediate">Immediate</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Timer Type:</label>
        <select
          value={timerType}
          onChange={(e) => setTimerType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
        >
          <option value="elapsed">Count Elapsed time</option>
          <option value="limit">Time limit</option>
        </select>
      </div>
      {timerType === 'limit' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time Limit:</label>
          <select
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
          >
            <option value={600}>10 Minutes</option>
            <option value={1800}>30 Minutes</option>
            <option value={3600}>60 Minutes</option>
            <option value={5400}>90 Minutes</option>
          </select>
        </div>
      )}
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => onStart(questionCount, feedbackType === 'immediate', timerType, timeLimit)}
          className="px-6 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamSelector;