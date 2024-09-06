import React from 'react';
import ExamSelector from '../components/ExamSelector';
import Question from '../components/Question';
import Results from '../components/Results';
import { getRandomQuestions } from '../utils/questionPool';

export default function Home() {
  const [examState, setExamState] = React.useState('select');
  const [questions, setQuestions] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [immediateFeedback, setImmediateFeedback] = React.useState(false);
  const [startTime, setStartTime] = React.useState(null);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [domainPerformance, setDomainPerformance] = React.useState({});

  React.useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTime]);

  const startExam = (questionCount, feedback) => {
    setQuestions(getRandomQuestions(questionCount));
    setImmediateFeedback(feedback);
    setExamState('exam');
    setStartTime(Date.now());
  };

  const handleAnswer = (selectedOptions) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.type === 'single'
      ? currentQuestion.options[selectedOptions[0]].correct
      : selectedOptions.every(i => currentQuestion.options[i].correct) &&
        currentQuestion.options.filter(o => o.correct).length === selectedOptions.length;

    setDomainPerformance(prev => {
      const domain = currentQuestion.domain;
      const domainStats = prev[domain] || { correct: 0, total: 0, questions: [] };
      return {
        ...prev,
        [domain]: {
          correct: domainStats.correct + (isCorrect ? 1 : 0),
          total: domainStats.total + 1,
          questions: [...domainStats.questions, { correct: isCorrect }]
        }
      };
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    if (!immediateFeedback) {
      moveToNextQuestion();
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamState('results');
    }
  };

  return (
    <div className="container">
      {examState === 'select' && <ExamSelector onStart={startExam} />}
      {examState === 'exam' && (
        <>
          <div>Time: {elapsedTime} seconds</div>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            showFeedback={immediateFeedback}
            answered={false}
            onNextQuestion={moveToNextQuestion}
          />
        </>
      )}
      {examState === 'results' && (
        <Results
          score={score}
          totalQuestions={questions.length}
          domainPerformance={domainPerformance}
        />
      )}
    </div>
  );
}