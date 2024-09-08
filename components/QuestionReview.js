import React from 'react';

const QuestionReview = ({ question }) => {
  if (!question) return null;

  const userAnswerIndex = question.userAnswer ? question.userAnswer.selectedOption : null;
  const correctAnswerIndex = question.options.findIndex(option => option.correct);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.text}</h3>
      <p className="text-sm text-gray-600 mb-4">Domain: {question.domain}</p>

      <ul className="list-none pl-0 space-y-2">
        {question.options.map((option, index) => (
          <li 
            key={index} 
            className={`p-2 rounded flex items-center ${
              index === userAnswerIndex 
                ? (option.correct ? 'bg-green-100' : 'bg-red-100') 
                : (option.correct ? 'bg-green-100' : '')
            }`}
          >
            <div className={`w-3 h-3 mr-3 rounded-full border border-gray-400 flex-shrink-0 ${
              index === userAnswerIndex ? 'bg-gray-500 border-gray-500' : ''
            }`}></div>
            <p className={`${option.correct ? 'font-semibold' : ''} text-gray-800`}>{option.text}</p>
          </li>
        ))}
      </ul>

      {userAnswerIndex !== null && (
        <div className="mt-4 space-y-4">
          {!question.options[userAnswerIndex].correct && (
            <div>
              <p className="font-semibold text-red-600">Incorrect:</p>
              <p className="text-gray-800">{question.options[userAnswerIndex].explanation}</p>
            </div>
          )}
          <div>
            <p className="font-semibold text-green-600">Correct Answer:</p>
            <p className="text-gray-800">{question.options[correctAnswerIndex].explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionReview;
