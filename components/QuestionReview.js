import React from 'react';

const QuestionReview = ({ question }) => {
  if (!question) return null;

  const userAnswerIndices = question.userAnswer ? question.userAnswer.selectedOptions : [];
  const correctAnswerIndices = question.options.reduce((acc, option, index) => {
    if (option.correct) acc.push(index);
    return acc;
  }, []);

  const isCorrect = question.userAnswer && question.userAnswer.isCorrect;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.text}</h3>
      <p className="text-sm text-gray-600 mb-4">Domain: {question.domain}</p>

      <ul className="list-none pl-0 space-y-2">
        {question.options.map((option, index) => (
          <li 
            key={index} 
            className={`p-2 rounded flex items-center ${
              userAnswerIndices.includes(index) 
                ? (option.correct ? 'bg-green-100' : 'bg-red-100') 
                : (option.correct ? 'bg-green-100' : '')
            }`}
          >
            <div className={`w-3 h-3 mr-3 rounded-full border border-gray-400 flex-shrink-0 ${
              userAnswerIndices.includes(index) ? 'bg-gray-500 border-gray-500' : ''
            }`}></div>
            <p className={`${option.correct ? 'font-semibold' : ''} text-gray-800`}>{option.text}</p>
          </li>
        ))}
      </ul>

      {userAnswerIndices.length > 0 && (
        <div className="mt-4 space-y-4">
          {!isCorrect && (
            <div>
              <p className="font-semibold text-red-600">Incorrect:</p>
              {userAnswerIndices.map(index => (
                <p key={index} className="text-gray-800">{question.options[index].explanation}</p>
              ))}
            </div>
          )}
          <div>
            <p className="font-semibold text-green-600">Correct Answer(s):</p>
            {correctAnswerIndices.map(index => (
              <p key={index} className="text-gray-800">{question.options[index].explanation}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionReview;
