## Key Components

- **ExamSelector**: Allows users to choose the number of questions and feedback mode.
- **Question**: Displays individual questions, handles user input, and shows feedback.
- **Results**: Shows the final exam results, including domain performance.
- **Fireworks**: Provides a celebratory animation for correct answers in immediate feedback mode.

## Features

- Customizable exam length
- Immediate or end-of-exam feedback options
- Domain-specific performance tracking
- Randomized question selection
- Interactive UI with visual feedback for correct/incorrect answers
- Celebratory fireworks animation for correct answers in immediate feedback mode

## Usage

1. Start the application:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. On the exam selector screen:
   - Choose the number of questions for your exam.
   - Select whether you want immediate feedback or end-of-exam feedback.

4. During the exam:
   - Read each question carefully.
   - Select your answer(s).
   - Click "Submit" to check your answer or move to the next question.
   - If immediate feedback is enabled, you'll see if your answer was correct or incorrect right away.
   - Correct answers in immediate feedback mode trigger a fireworks animation.

5. After completing all questions:
   - View your final score and percentage.
   - See a breakdown of your performance by domain.
   - Review which questions you answered correctly or incorrectly.

## Customization

- To add or modify questions, update the `questionPool.js` file in the `utils` directory.
- Adjust styling in the `globals.css` file in the `styles` directory.
- Modify component behavior by editing the respective files in the `components` directory.

## Dependencies

- React
- Next.js
- react-canvas-confetti (for fireworks animation)

Make sure to run `npm install` before starting the application to install all necessary dependencies.

## Admin Functionality

The application now includes an admin screen for managing the question pool. To access the admin functionality, navigate to `/admin` in your browser.

### Adding Questions

1. On the admin screen, locate the "Add New Question" section.
2. Fill in the following fields:
   - Question Text: Enter the question text in the larger text area provided.
   - Type: Select either "Single Choice" or "Multiple Choice" from the dropdown.
   - Domain: Choose the appropriate domain for the question from the dropdown.
   - Options: Add answer options by filling in the text, explanation, and marking correct answers.
3. Click "Add Option" to include more answer choices if needed.
4. Click "Add Question" to submit the new question.
5. A confirmation message will appear upon successful addition.

### Editing Questions

1. In the question list, click on the question text you wish to edit.
2. The question details will populate the edit form at the top of the page.
3. Make your desired changes to the question text, type, domain, or options.
4. Click "Update Question" to save your changes.
5. A confirmation message will appear upon successful update.

### Removing Questions

1. In the question list, locate the question you want to remove.
2. Click the "Delete" button next to the question.
3. Confirm the deletion when prompted.
4. A confirmation message will appear upon successful deletion.

### Question List Overview

The admin screen provides a table showing:
- Domains
- Total number of questions per domain
- Number of single-choice questions per domain
- Number of multiple-choice questions per domain

This overview helps in maintaining a balanced question pool across different domains and question types.

## Recent UI Optimizations

- Enlarged the question text input field for better visibility and editing of longer questions.
- Added confirmation messages for successful add, edit, and delete actions.
- Implemented a cancel button for the edit form to discard changes.
- Updated the question list to show single and multiple-choice question counts per domain.
- Improved overall admin screen layout and usability.

Make sure to run `npm install` before starting the application to install all necessary dependencies.