import React, { useState, useEffect } from 'react';
import ExamSelector from '../components/ExamSelector';
import Question from '../components/Question';
import Results from '../components/Results';
import { getRandomQuestions } from '../utils/questionPool';
import Link from 'next/link';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [examState, setExamState] = useState('select'); // 'select', 'exam', 'results'
  const [score, setScore] = useState(0);
  const [immediateFeedback, setImmediateFeedback] = useState(true); // or false, depending on your default setting
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [domainPerformance, setDomainPerformance] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [examEnded, setExamEnded] = useState(false);
  const [timerType, setTimerType] = useState('elapsed');
  const [timeLimit, setTimeLimit] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  React.useEffect(() => {
    let timer;
    if (examState === 'exam' && !examEnded) {
      timer = setInterval(() => {
        if (timerType === 'limit') {
          setRemainingTime(prevTime => {
            if (prevTime <= 0) {
              clearInterval(timer);
              endExam();
              return 0;
            }
            return prevTime - 1;
          });
        } else {
          setElapsedTime(prevTime => prevTime + 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examState, examEnded, timerType]);

  const startExam = (questionCount, feedback, timerType, timeLimit) => {
    setQuestions(getRandomQuestions(questionCount));
    setImmediateFeedback(feedback);
    setExamState('exam');
    setStartTime(Date.now());
    setTimerType(timerType);
    setTimeLimit(timeLimit);
    setRemainingTime(timeLimit);
    setElapsedTime(0);
  };

  const handleAnswer = (selectedOptions, isCorrect) => {
    const currentQuestion = questions[currentQuestionIndex];

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.text]: {
        selectedOptions,
        isCorrect
      }
    }));

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    if (immediateFeedback) {
      setShowFeedback(true);
    } else {
      moveToNextQuestion();
    }
  };

  const endExam = () => {
    setExamState('results');
    // Process results
    let totalScore = 0;
    const domainScores = {};

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[question.text];
      if (!userAnswer) return; // Skip if no answer was given

      const domain = question.domain;
      if (!domainScores[domain]) {
        domainScores[domain] = { correct: 0, total: 0 };
      }

      domainScores[domain].total += 1;
      if (userAnswer.isCorrect) {
        domainScores[domain].correct += 1;
        totalScore += 1;
      }
    });

    // Calculate percentages for each domain
    const calculatedDomainPerformance = Object.entries(domainScores).reduce((acc, [domain, scores]) => {
      acc[domain] = {
        correct: scores.correct,
        total: scores.total,
        percentage: Math.round((scores.correct / scores.total) * 100)
      };
      return acc;
    }, {});

    setScore(totalScore);
    setDomainPerformance(calculatedDomainPerformance);
  };

  const moveToNextQuestion = () => {
    setShowFeedback(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      endExam();
    }
  };

  const processedQuestions = questions.map(question => ({
    ...question,
    userAnswer: userAnswers[question.text]
  }));

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 relative min-h-screen flex flex-col">
      <div className="flex-grow">
        {examState === 'select' && <ExamSelector onStart={startExam} />}
        {examState === 'exam' && (
          <div className="flex justify-center items-start pt-4">
            <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-start">
                <div className="w-4/5 pr-4">
                  <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    showFeedback={showFeedback}
                    answered={showFeedback}
                    onNextQuestion={moveToNextQuestion}
                    immediateFeedback={immediateFeedback}
                    questionIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                    onQuestionSelect={(index) => setCurrentQuestionIndex(index)}
                    userAnswers={userAnswers}
                    questions={questions}
                  />
                </div>
                <div className="w-1/5">
                  <div className="bg-gray-700 text-white px-1 py-2 rounded-md border border-gray-600 text-center">
                    <div className="text-sm font-semibold">Time:</div>
                    <div className="text-lg">
                      {timerType === 'limit' ? formatTime(remainingTime) : formatTime(elapsedTime)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {examState === 'results' && (
          <Results
            score={score}
            totalQuestions={questions.length}
            domainPerformance={domainPerformance}
            elapsedTime={elapsedTime}
            questions={questions.map(q => ({
              ...q,
              userAnswer: userAnswers[q.text]
            }))}
          />
        )}
      </div>
      
      {/* Add this new div for the admin link at the bottom */}
      <div className="mt-8 mb-4 text-center">
        <Link href="/admin" className="text-blue-500 hover:text-blue-700 underline">
          Question Management
        </Link>
      </div>
    </div>
  );
}