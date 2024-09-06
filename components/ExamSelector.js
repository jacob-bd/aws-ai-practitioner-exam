import React, { useState } from 'react';

const ExamSelector = ({ onStart }) => {
  const [questionCount, setQuestionCount] = useState(15);
  const [immediateFeedback, setImmediateFeedback] = useState(false);

  return (
    <div className="exam-selector">
      <h1>AWS Certified AI Practitioner Exam</h1>
      <div>
        <label>Number of questions:</label>
        <select value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={55}>55</option>
          <option value={85}>85</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={immediateFeedback}
            onChange={(e) => setImmediateFeedback(e.target.checked)}
          />
          Immediate feedback
        </label>
      </div>
      <button onClick={() => onStart(questionCount, immediateFeedback)}>Start Exam</button>
    </div>
  );
};

export default ExamSelector;