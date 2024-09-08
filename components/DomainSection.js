import React from 'react';

const DomainSection = ({ domain, performance, questions, onQuestionSelect }) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{domain}</h4>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Question Count</th>
            <th className="p-2 border">Correct</th>
            <th className="p-2 border">Incorrect</th>
            <th className="p-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">{questions.length}</td>
            <td className="p-2 border">{performance.correct}</td>
            <td className="p-2 border">{performance.incorrect}</td>
            <td className="p-2 border">{performance.percentage}%</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <h5 className="text-md font-semibold mb-2 text-gray-700">Questions:</h5>
        <ul className="list-disc pl-5">
          {questions.map((question, index) => (
            <li 
              key={index} 
              className={`cursor-pointer ${question.userAnswer && question.userAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}`}
              onClick={() => onQuestionSelect(question)}
            >
              Question {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DomainSection;
