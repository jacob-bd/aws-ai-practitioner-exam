import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Question = ({ 
  question, 
  onAnswer, 
  showFeedback, 
  answered, 
  onNextQuestion, 
  immediateFeedback, 
  questionIndex, 
  totalQuestions, 
  onQuestionSelect,
  userAnswers,
  questions
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const correctAnswersCount = question.options.filter(option => option.correct).length;
  const isMultipleChoice = correctAnswersCount > 1;

  useEffect(() => {
    setSelectedOptions([]);
    setIsCorrect(null);
    setShowWarning(false);
    setHasSubmitted(false);
  }, [question]);

  const handleOptionChange = (optionIndex) => {
    if (hasSubmitted) return;

    if (isMultipleChoice) {
      setSelectedOptions(prev => {
        if (prev.includes(optionIndex)) {
          return prev.filter(index => index !== optionIndex);
        } else {
          return [...prev, optionIndex];
        }
      });
    } else {
      setSelectedOptions([optionIndex]);
    }
    setShowWarning(false);
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0 || (isMultipleChoice && selectedOptions.length !== correctAnswersCount)) {
      setShowWarning(true);
      return;
    }

    const correct = selectedOptions.every(index => question.options[index].correct) &&
                    selectedOptions.length === correctAnswersCount;
    setIsCorrect(correct);
    setHasSubmitted(true);
    onAnswer(selectedOptions, correct);
  };

  return (
    <div className="question bg-gray-700 rounded-lg p-4 space-y-4 relative">
      <div className="absolute top-2 right-2 text-sm text-gray-400">
        Question {questionIndex + 1} of {totalQuestions}
      </div>
      <h2 className="text-xl font-semibold text-white">{question.text}</h2>
      <p className="text-sm text-gray-400 italic">Domain: {question.domain}</p>
      <p className="text-sm text-yellow-400">
        {isMultipleChoice 
          ? `Select ${correctAnswersCount} correct answers` 
          : "Select the correct answer"}
      </p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type={isMultipleChoice ? "checkbox" : "radio"}
              id={`option-${index}`}
              name={`question-${question.text}`}
              checked={selectedOptions.includes(index)}
              onChange={() => handleOptionChange(index)}
              disabled={hasSubmitted}
              className={isMultipleChoice ? "form-checkbox" : "form-radio"}
            />
            <label htmlFor={`option-${index}`} className="text-gray-300">
              {option.text}
            </label>
          </div>
        ))}
      </div>
      {showWarning && (
        <p className="text-red-500 font-semibold">
          {isMultipleChoice 
            ? `Please select exactly ${correctAnswersCount} answers.`
            : "Please select an answer before submitting."}
        </p>
      )}
      <div className="flex justify-between items-center mt-4">
        {!hasSubmitted && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit Answer
          </button>
        )}
        {hasSubmitted && (
          <button
            onClick={onNextQuestion}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Next Question
          </button>
        )}
      </div>
      {immediateFeedback && hasSubmitted && (
        <div className={`mt-4 p-3 rounded-md ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-semibold">{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
          {selectedOptions.map(index => (
            <p key={index}>{question.options[index].explanation}</p>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-4">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const isCurrent = index === questionIndex;
          const isAnswered = index < questionIndex || (index === questionIndex && hasSubmitted);
          let bgColor = 'bg-gray-300';
          
          if (isCurrent) {
            bgColor = 'bg-blue-500';
          } else if (isAnswered) {
            if (immediateFeedback) {
              // For immediate feedback, use green for correct and red for incorrect
              const questionAnswer = userAnswers[questions[index].text];
              bgColor = questionAnswer && questionAnswer.isCorrect ? 'bg-green-500' : 'bg-red-500';
            } else {
              // For feedback at the end, use light green for answered questions
              bgColor = 'bg-green-200';
            }
          }

          return (
            <button
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${bgColor}`}
              onClick={() => onQuestionSelect(index)}
              disabled={index > questionIndex}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;