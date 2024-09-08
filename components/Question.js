import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Question = ({ question, onAnswer, showFeedback, answered, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [question]);

  const handleOptionChange = (optionIndex) => {
    if (!answered) {
      setSelectedOption(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return; // Prevent submission if no option is selected

    const correct = question.options[selectedOption].correct;
    console.log('Selected Option:', selectedOption);
    console.log('Is Correct:', correct);

    setIsCorrect(correct);
    onAnswer(selectedOption, correct);
  };

  return (
    <div className="question bg-gray-700 rounded-lg p-4 space-y-4">
      <h2 className="text-xl font-semibold text-white">{question.text}</h2>
      <p className="text-sm text-gray-400 italic">Domain: {question.domain}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`option-${index}`}
              name={`question-${question.text}`}
              checked={selectedOption === index}
              onChange={() => handleOptionChange(index)}
              disabled={answered}
              className="form-radio text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`option-${index}`} className="text-gray-300">
              {option.text}
            </label>
          </div>
        ))}
      </div>
      {!answered && (
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Answer
        </button>
      )}
      {showFeedback && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            <p className="font-semibold flex items-center">
              {isCorrect ? (
                <>
                  <span className="text-2xl mr-2">🎉</span> Correct!
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">😕</span> Incorrect
                </>
              )}
            </p>
            <p>{question.options[selectedOption].explanation}</p>
          </motion.div>
          <button
            onClick={onNextQuestion}
            className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
          >
            Next Question
          </button>
        </>
      )}
    </div>
  );
};

export default Question;