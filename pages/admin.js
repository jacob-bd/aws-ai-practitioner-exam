import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QuestionForm from '../components/QuestionForm';

const DOMAINS = [
  'Fundamentals of AI and ML',
  'Fundamentals of Generative AI',
  'Applications of Foundation Models',
  'Guidelines for Responsible AI',
  'Security, Compliance, and Governance for AI Solutions'
];

export default function AdminPage() {
  const [questions, setQuestions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const [aiQuestionType, setAiQuestionType] = useState('single');
  const [aiQuestionDomain, setAiQuestionDomain] = useState(DOMAINS[0]);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);
  const [isAddingNewQuestion, setIsAddingNewQuestion] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [addConfirmation, setAddConfirmation] = useState('');
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    type: 'single',
    domain: '',
    options: [
      { text: '', correct: false, explanation: '' },
      { text: '', correct: false, explanation: '' },
      { text: '', correct: false, explanation: '' },
      { text: '', correct: false, explanation: '' },
    ],
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchQuestions();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkAuth = async () => {
    // TODO: Implement actual authentication check
    setIsAuthenticated(true);
  };

  const fetchQuestions = async () => {
    try {
      console.log('Fetching questions...');
      const response = await fetch('/api/questions');
      console.log('Fetch response status:', response.status);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const data = await response.json();
      console.log('Fetched questions:', data);
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
      // Optionally, set an error state here to display to the user
    }
  };

  const handleAddQuestion = async (questionToAdd) => {
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionToAdd),
      });
      
      if (response.ok) {
        const addedQuestion = await response.json();
        setQuestions([...questions, addedQuestion]);
        setAddConfirmation('Question added successfully!');
        
        // Clear all fields
        setNewQuestion({
          text: '',
          type: 'single',
          domain: '',
          options: [
            { text: '', correct: false, explanation: '' },
            { text: '', correct: false, explanation: '' },
            { text: '', correct: false, explanation: '' },
            { text: '', correct: false, explanation: '' },
          ],
        });

        // Clear the confirmation message after 3 seconds
        setTimeout(() => {
          setAddConfirmation('');
        }, 3000);
      } else {
        setAddConfirmation('Failed to add question. Please try again.');
      }
    } catch (error) {
      console.error('Error adding question:', error);
      setAddConfirmation('An error occurred while adding the question.');
    }
  };

  const handleEditQuestion = async (editedQuestion) => {
    try {
      console.log('Editing question:', editedQuestion);
      const response = await fetch(`/api/questions/${editedQuestion.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedQuestion),
      });
      console.log('Edit response status:', response.status);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const updatedQuestion = await response.json();
      console.log('Updated question:', updatedQuestion);
      const updatedQuestions = questions.map(q => q.id === updatedQuestion.id ? updatedQuestion : q);
      setQuestions(updatedQuestions);
      setEditingQuestion(null);
      setMessage('Question updated successfully!');
    } catch (error) {
      console.error('Failed to edit question:', error);
      setMessage('Failed to update question. Please try again.');
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    console.log(`Attempting to delete question with ID: ${questionId}`);
    try {
      const response = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE',
      });

      console.log(`Delete request response status: ${response.status}`);
      const responseData = await response.json();
      console.log('Delete request response data:', responseData);

      if (response.ok) {
        setQuestions(questions.filter(q => q.id !== questionId));
        setMessage('Question deleted successfully!');
      } else {
        throw new Error(responseData.message || 'Failed to delete question');
      }
    } catch (error) {
      console.error('Failed to delete question:', error);
      setMessage(`Failed to delete question: ${error.message}`);
    }
  };

  const handleEditClick = (question) => {
    setEditingQuestion(question);
    setIsAddingNewQuestion(false);
  };

  const handleGenerateQuestion = async () => {
    setIsGeneratingQuestion(true);
    try {
      const response = await fetch('/api/generateQuestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionType: aiQuestionType, questionDomain: aiQuestionDomain }),
      });

      if (response.ok) {
        const { question } = await response.json();
        
        // Populate the form fields with the generated question
        setNewQuestion({
          text: question.text,
          type: question.type,
          domain: question.domain,
          options: question.options.map(option => ({
            text: option.text,
            correct: option.correct,
            explanation: option.explanation
          }))
        });
        
        setIsAddingNewQuestion(true);
        setMessage('AI-generated question loaded into the form. Please review and edit if necessary.');
        
        // Clear the message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } else {
        setMessage('Failed to generate question. Please try again.');
      }
    } catch (error) {
      console.error('Error generating question:', error);
      setMessage('An error occurred while generating the question.');
    } finally {
      setIsGeneratingQuestion(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuthenticated) {
    return <div>Checking authentication...</div>;
  }

  // Group questions by domain
  const questionsByDomain = questions.reduce((acc, question) => {
    if (!acc[question.domain]) {
      acc[question.domain] = [];
    }
    acc[question.domain].push(question);
    return acc;
  }, {});

  // Calculate question counts
  const domainCounts = Object.entries(questionsByDomain).map(([domain, questions]) => ({
    domain,
    count: questions.length
  }));
  const totalQuestions = questions.length;

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {message && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p>{message}</p>
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generate New Exam Questions with AI</h2>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Question Type
            </label>
            <select
              value={aiQuestionType}
              onChange={(e) => setAiQuestionType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
            >
              <option value="single">Single Answer</option>
              <option value="multiple">Multiple Answers</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Question Domain
            </label>
            <select
              value={aiQuestionDomain}
              onChange={(e) => setAiQuestionDomain(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-700"
            >
              {DOMAINS.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-4"> {/* Added this wrapper div */}
          <button
            onClick={handleGenerateQuestion}
            disabled={isGeneratingQuestion}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
          >
            {isGeneratingQuestion ? 'Generating...' : 'Generate Question with AI 🤖'}
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingQuestion ? 'Edit Question' : 'Add New Questions'}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <QuestionForm
            onSubmit={isAddingNewQuestion ? handleAddQuestion : handleEditQuestion}
            initialData={isAddingNewQuestion ? newQuestion : editingQuestion}
            onCancel={() => {
              setEditingQuestion(null);
              setIsAddingNewQuestion(true);
            }}
            isAddingNew={isAddingNewQuestion}
            setNewQuestion={setNewQuestion}
          />
        </div>
        {addConfirmation && (
          <p className="text-green-600 mt-2">{addConfirmation}</p>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Question List</h2>
        {questions.length === 0 ? (
          <p>No questions found. {JSON.stringify(questions)}</p>
        ) : (
          <table className="w-full mb-8">
            <thead>
              <tr>
                <th className="border px-4 py-2">Domain</th>
                <th className="border px-4 py-2">Total Questions</th>
                <th className="border px-4 py-2">Single Choice</th>
                <th className="border px-4 py-2">Multiple Choice</th>
              </tr>
            </thead>
            <tbody>
              {domainCounts.map(({ domain, count }) => {
                const domainQuestions = questions.filter(q => q.domain === domain);
                const singleChoiceCount = domainQuestions.filter(q => q.options.filter(o => o.correct).length === 1).length;
                const multipleChoiceCount = domainQuestions.filter(q => q.options.filter(o => o.correct).length > 1).length;
                
                return (
                  <tr key={domain}>
                    <td className="border px-4 py-2">
                      <a href={`#${domain}`} className="text-blue-500 hover:underline">{domain}</a>
                    </td>
                    <td className="border px-4 py-2 text-center">{count}</td>
                    <td className="border px-4 py-2 text-center">{singleChoiceCount}</td>
                    <td className="border px-4 py-2 text-center">{multipleChoiceCount}</td>
                  </tr>
                );
              })}
              <tr>
                <td className="border px-4 py-2 font-bold">Total</td>
                <td className="border px-4 py-2 text-center font-bold">{totalQuestions}</td>
                <td className="border px-4 py-2 text-center font-bold">
                  {questions.filter(q => q.options.filter(o => o.correct).length === 1).length}
                </td>
                <td className="border px-4 py-2 text-center font-bold">
                  {questions.filter(q => q.options.filter(o => o.correct).length > 1).length}
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {Object.entries(questionsByDomain).map(([domain, domainQuestions]) => (
          <div key={domain} id={domain}>
            <h3 className="text-xl font-bold mb-4 mt-8">{domain}</h3>
            <ul className="space-y-8">
              {domainQuestions.map((question) => (
                <li key={question.id} className="bg-white p-6 rounded shadow">
                  <p className="text-lg font-bold text-black mb-2">{question.text}</p>
                  <p className="text-black mb-2"><span className="font-bold">Type:</span> {question.type === 'single' ? 'Single Choice' : 'Multiple Choice'}</p>
                  <p className="text-black mb-2"><span className="font-bold">Domain:</span> {question.domain}</p>
                  <div className="mb-2">
                    <p className="font-medium text-black">Options:</p>
                    <ul className="list-disc pl-5">
                      {question.options.map((option, index) => (
                        <li key={`${question.id}-option-${index}`} className={option.correct ? 'text-green-600' : 'text-black'}>
                          <span className={option.correct ? 'font-bold' : ''}>{option.text}</span>
                          {option.correct && ' (Correct)'}
                          <p className={`ml-2 ${option.correct ? 'text-green-600 font-bold' : 'text-black'}`}>
                            <span className="font-bold">Explanation:</span> {option.explanation}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 space-x-2">
                    <button
                      onClick={() => handleEditClick(question)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx global>{`
        input[type="text"], textarea, select {
          color: inherit;
        }
      `}</style>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        button {
          animation: fadeIn 0.3s ease-in-out;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}
