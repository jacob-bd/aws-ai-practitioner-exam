import React from 'react';

const DomainSection = ({ domain, performance, questions, onQuestionSelect }) => {
  const percentage = performance.percentage;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-start mb-4">
        <div className="w-20 h-14 mr-4 bg-blue-600 flex items-center justify-center rounded-2xl">
          <span className="text-white text-xl font-bold px-2">{percentage}%</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-navy-blue">{domain}</h3>
          <p className="text-sm text-gray-600 mt-1">
            This section includes topics from the {domain} section of the exam guide.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-2 mt-4">
        {questions.filter(q => q.domain === domain).map((question, index) => (
          <button
            key={question.text}
            onClick={() => onQuestionSelect(question)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
              ${question.userAnswer && question.userAnswer.isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainSection;
