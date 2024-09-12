import React, { useState, useEffect } from 'react';
import DomainSection from './DomainSection';
import QuestionReview from './QuestionReview';

const Results = ({ score, totalQuestions, domainPerformance, elapsedTime, questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const firstDomain = Object.keys(domainPerformance)[0];
    const firstQuestion = questions.find(q => q.domain === firstDomain);
    if (firstQuestion) {
      setSelectedQuestion(firstQuestion);
    }
  }, []);

  const percentage = Math.round((score / totalQuestions) * 100);
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const scoreColor = percentage >= 70 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';

  return (
    <div className="results-container p-6 bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className={`text-4xl font-bold mb-4 ${scoreColor}`}>
            You scored {percentage}%
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            You answered {score} of {totalQuestions} questions correctly in {timeString}
          </p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-orange-500 dark:text-orange-400 mb-4">DOMAIN BREAKDOWN</h3>
          {Object.entries(domainPerformance).map(([domain, performance]) => (
            <div key={domain} className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-300 w-1/2">{domain}</span>
              <div className="flex items-center w-1/2">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full" 
                    style={{ width: `${performance.percentage}%` }}
                  ></div>
                </div>
                <span className="text-lg text-gray-800 dark:text-gray-300 w-12 text-right">{performance.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">Performance by Domain</h3>
          {Object.entries(domainPerformance).map(([domain, performance]) => (
            <DomainSection
              key={domain}
              domain={domain}
              performance={performance}
              questions={questions.filter(q => q.domain === domain)}
              onQuestionSelect={setSelectedQuestion}
            />
          ))}
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">Question Review</h3>
          <QuestionReview question={selectedQuestion} />
        </div>
      </div>
    </div>
  );
};

export default Results;