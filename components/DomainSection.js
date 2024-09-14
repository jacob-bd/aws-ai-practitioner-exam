import React from 'react';

const DomainSection = ({ domain, performance, questions, onQuestionSelect }) => {
  const correctAnswers = questions.filter(q => q.userAnswer && q.userAnswer.isCorrect).length;
  const totalQuestions = questions.length;
  const percentageScore = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;
  const scoreColor = percentageScore >= 70 ? 'text-green-500' : 'text-red-500';

  const domainDescriptions = {
    'Fundamentals of Generative AI': 'Covers basic concepts and principles of generative AI technologies.',
    'Applications of Foundation Models': 'Explores practical uses and implementations of foundation models in various fields.',
    'Guidelines for Responsible AI': 'Focuses on ethical considerations and best practices in AI development and deployment.',
    'Security, Compliance, and Governance for AI Solutions': 'Addresses security measures, regulatory compliance, and governance frameworks for AI systems.',
    'Fundamentals of AI and ML': 'Covers essential concepts, terminologies, and practical applications of artificial intelligence and machine learning, including basic AI terms, types of learning, data types, and real-world use cases'
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300">
        {domain}: <span className={scoreColor}>{percentageScore}%</span>
      </h4>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-500">
        {domainDescriptions[domain] || 'Description not available.'}
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-400">
        Score: {correctAnswers} / {totalQuestions}
      </p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(question)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              question.userAnswer && question.userAnswer.isCorrect
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainSection;
