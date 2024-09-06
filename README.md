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