import fs from 'fs';
import path from 'path';
import { getQuestions } from './questionPool';

export function updateQuestionPoolFile() {
  const questionPool = getQuestions();
  const filePath = path.join(process.cwd(), 'utils', 'questionPool.js');
  const content = `let questionPool = ${JSON.stringify(questionPool, null, 2)};

export function getQuestions() {
  return questionPool;
}

export function addQuestion(newQuestion) {
  newQuestion.id = Date.now().toString();
  questionPool.push(newQuestion);
}

export function updateQuestion(updatedQuestion) {
  const index = questionPool.findIndex(q => q.id === updatedQuestion.id);
  if (index !== -1) {
    questionPool[index] = updatedQuestion;
  }
}

export function deleteQuestion(questionId) {
  questionPool = questionPool.filter(q => String(q.id) !== String(questionId));
}

export function updateQuestionPool(newQuestionPool) {
  questionPool = newQuestionPool;
}`;

  fs.writeFileSync(filePath, content, 'utf8');
}
