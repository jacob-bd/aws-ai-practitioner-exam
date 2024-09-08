import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import QuestionForm from '../components/QuestionForm';

export default function AdminPage() {
  const [questions, setQuestions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const router = useRouter();
  const editSectionRef = useRef(null);

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

      // Update questionPool.js file
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
    } else {
      console.error('Failed to add question:', await response.text());
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
    } catch (error) {
      console.error('Failed to edit question:', error);
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
    } catch (error) {
      console.error('Failed to delete question:', error);
      // Optionally, show an error message to the user
    }
  };

  const handleEditClick = (question) => {
    setEditingQuestion(question);
    if (editSectionRef.current) {
      editSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-8" ref={editSectionRef}>
        <h2 className="text-2xl font-semibold mb-4">
          {editingQuestion ? 'Edit Question' : 'Add New Question'}
        </h2>
        <QuestionForm
          onSubmit={editingQuestion ? handleEditQuestion : handleAddQuestion}
          initialData={editingQuestion}
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
                <th className="border px-4 py-2">Question Count</th>
              </tr>
            </thead>
            <tbody>
              {domainCounts.map(({ domain, count }) => (
                <tr key={domain}>
                  <td className="border px-4 py-2">
                    <a href={`#${domain}`} className="text-blue-500 hover:underline">{domain}</a>
                  </td>
                  <td className="border px-4 py-2 text-center">{count}</td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-bold">Total</td>
                <td className="border px-4 py-2 text-center font-bold">{totalQuestions}</td>
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
