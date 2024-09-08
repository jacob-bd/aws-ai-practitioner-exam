import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import DomainSection from './DomainSection';
import QuestionReview from './QuestionReview';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Results = ({ score, totalQuestions, domainPerformance, elapsedTime, questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // Select the first question of the first domain by default
    const firstDomain = Object.keys(domainPerformance)[0];
    const firstQuestion = questions.find(q => q.domain === firstDomain);
    if (firstQuestion) {
      setSelectedQuestion(firstQuestion);
    }
  }, []);

  const pieData = [
    { name: 'Correct', value: score },
    { name: 'Incorrect', value: totalQuestions - score }
  ];

  const percentage = Math.round((score / totalQuestions) * 100);
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="results-container p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-navy-blue">You scored {percentage}%</h2>
          <p className="text-xl text-gray-600">
            You answered {score} of {totalQuestions} questions correctly in {timeString}
          </p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">DOMAIN BREAKDOWN</h3>
          {Object.entries(domainPerformance).map(([domain, performance]) => (
            <div key={domain} className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-black">{domain}</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full" 
                    style={{ width: `${performance.percentage}%` }}
                  ></div>
                </div>
                <span className="text-lg text-black">{performance.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
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
        <div className="sticky top-6">
          {selectedQuestion && <QuestionReview question={selectedQuestion} />}
        </div>
      </div>
    </div>
  );
};

export default Results;