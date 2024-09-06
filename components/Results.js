import React from 'react';

const Results = ({ score, totalQuestions, domainPerformance }) => {
  const passScore = 70;
  const passed = (score / totalQuestions) * 100 >= passScore;

  return (
    <div className="results">
      <h2>Exam Results</h2>
      <p>Score: {score} / {totalQuestions}</p>
      <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
      <p>{passed ? 'Passed!' : 'Failed'}</p>
      <h3>Domain Performance:</h3>
      {Object.entries(domainPerformance).map(([domain, { correct, total, questions }]) => (
        <div key={domain} className="domain-section">
          <h4>{domain}</h4>
          <p>Correct: {correct} / {total}</p>
          <p>Percentage: {((correct / total) * 100).toFixed(2)}%</p>
          <div className="questions">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`question-circle ${question.correct ? 'correct' : 'incorrect'}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;