import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswer, showFeedback, answered, onNextQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Clear selected options and error message when the question changes
    setSelectedOptions([]);
    setErrorMessage('');
    setShowAnswerFeedback(false);
  }, [question]);

  const handleOptionChange = (optionIndex) => {
    if (question.type === 'single') {
      setSelectedOptions([optionIndex]);
    } else {
      setSelectedOptions(prev => 
        prev.includes(optionIndex) 
          ? prev.filter(i => i !== optionIndex)
          : [...prev, optionIndex]
      );
    }
    setErrorMessage(''); // Clear error message when an option is selected
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      setErrorMessage('Please select an answer');
      return;
    }
    setShowAnswerFeedback(true);
    onAnswer(selectedOptions);
  };

  const handleNextQuestion = () => {
    setSelectedOptions([]);
    setShowAnswerFeedback(false);
    setErrorMessage('');
    onNextQuestion();
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type={question.type === 'single' ? 'radio' : 'checkbox'}
              checked={selectedOptions.includes(index)}
              onChange={() => handleOptionChange(index)}
              disabled={answered}
            />
            {option.text}
          </label>
          {showFeedback && showAnswerFeedback && (
            <div className={option.correct ? 'correct' : 'incorrect'}>
              {option.correct ? 'Correct: ' : 'Incorrect: '}
              {option.explanation}
            </div>
          )}
        </div>
      ))}
      {!answered && <button onClick={handleSubmit}>Submit</button>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {showFeedback && showAnswerFeedback && (
        <button 
          onClick={handleNextQuestion} 
          style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white' }}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Question;