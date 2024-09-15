import { useState, useEffect, useRef } from 'react';
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
  const editSectionRef = useRef(null);
  const [aiQuestionType, setAiQuestionType] = useState('single');
  const [aiQuestionDomain, setAiQuestionDomain] = useState(DOMAINS[0]);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchQuestions();
    }
  }, [isAuthenticated]);

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

  const updateQuestionPool = async (updatedQuestions) => {
    try {
      const updateResponse = await fetch('/api/updateQuestionPool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedQuestions),
      });
      if (!updateResponse.ok) {
        console.error('Failed to update question pool:', await updateResponse.text());
      }
    } catch (error) {
      console.error('Error updating question pool:', error);
    }
  };

  const handleAddQuestion = async (newQuestion) => {
    console.log('Submitting new question:', newQuestion);
    const response = await fetch('/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuestion),
    });
    console.log('Response status:', response.status);
    if (response.ok) {
      const addedQuestion = await response.json();
      const updatedQuestions = [...questions, addedQuestion];
      setQuestions(updatedQuestions);
      await updateQuestionPool(updatedQuestions);
      setMessage('Question added successfully!');
      setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
    } else {
      console.error('Failed to add question:', await response.text());
      setMessage('Failed to add question. Please try again.');
      setTimeout(() => setMessage(null), 3000);
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
      await updateQuestionPool(updatedQuestions);
      setEditingQuestion(null);
      setMessage('Question updated successfully!');
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Failed to edit question:', error);
      setMessage('Failed to update question. Please try again.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      const response = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message); // Log the success message

      // Remove the deleted question from the state
      setQuestions(questions.filter(q => q.id !== questionId));
      setMessage('Question deleted successfully!');
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Failed to delete question:', error);
      setMessage('Failed to delete question. Please try again.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleEditClick = (question) => {
    setEditingQuestion(question);
    if (editSectionRef.current) {
      editSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
        await handleAddQuestion(question);
        setMessage('AI-generated question added successfully!');
        // Optionally, you can reset the form fields here
        setAiQuestionType('single');
        setAiQuestionDomain(DOMAINS[0]);
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

  useEffect(() => {
    if (message) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [message]);

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {message && (
        <div className={`mt-4 p-2 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Exam Questions with AI</h2>
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
        <button
          onClick={handleGenerateQuestion}
          disabled={isGeneratingQuestion}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
        >
          {isGeneratingQuestion ? 'Generating...' : 'Generate Question'}
        </button>
      </div>
      <div className="mb-8" ref={editSectionRef}>
        <h2 className="text-2xl font-semibold mb-4">
          {editingQuestion ? 'Edit Question' : 'Add New Question'}
        </h2>
        <QuestionForm
          onSubmit={editingQuestion ? handleEditQuestion : handleAddQuestion}
          initialData={editingQuestion}
          onCancel={() => setEditingQuestion(null)}
        />
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
                        <li key={index} className={option.correct ? 'text-green-600' : 'text-black'}>
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
          color: black;
        }
      `}</style>
    </div>
  );
}
