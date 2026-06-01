import KTEData from "../data/KTE/index.js";

/**
 * Fisher-Yates algorithm for shuffling arrays.
 */
export const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 * Selects `count` random questions, shuffles their answer choices,
 * and maintains the correct answer mapping.
 */
export const generateExamQuestions = (count = 50) => {
  if (!KTEData || !Array.isArray(KTEData)) {
    return [];
  }
  
  const shuffledQuestions = shuffleArray(KTEData);
  const selectedQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));

  return selectedQuestions.map((q, index) => {
    const choicesList = [
      { text: q.answer1, id: 1 },
      { text: q.answer2, id: 2 },
      { text: q.answer3, id: 3 },
      { text: q.answer4, id: 4 },
    ].filter(c => c.text !== undefined && c.text !== null);

    const shuffledChoices = shuffleArray(choicesList);
    const correctIndex = shuffledChoices.findIndex(c => c.id === q.correct);

    return {
      id: index + 1,
      questionText: q.question,
      choices: shuffledChoices.map(c => c.text),
      correctIndex: correctIndex >= 0 ? correctIndex : 0,
      userAnswerIndex: null,
      isFlagged: false,
    };
  });
};

/**
 * Returns ALL questions from the database in their original order,
 * with correct answer pre-selected (for practice/study mode).
 * Answers are NOT shuffled so the correct answer is always clear.
 */
export const generateAllQuestionsForPractice = () => {
  if (!KTEData || !Array.isArray(KTEData)) {
    return [];
  }

  return KTEData.map((q, index) => {
    // Keep original order: correct answer is always at index 0 (first position)
    const allAnswers = [
      { text: q.answer1, id: 1 },
      { text: q.answer2, id: 2 },
      { text: q.answer3, id: 3 },
      { text: q.answer4, id: 4 },
    ].filter(c => c.text !== undefined && c.text !== null && c.text.trim() !== "");

    // Find the correct answer index in the original array (q.correct is 1-based: 1,2,3,4)
    const correctId = q.correct; // 1,2,3,4
    const correctIndex = allAnswers.findIndex(c => c.id === correctId);

    return {
      id: index + 1,
      questionText: q.question,
      choices: allAnswers.map(c => c.text),
      correctIndex: correctIndex >= 0 ? correctIndex : 0,
      // Pre-select the correct answer for practice mode
      userAnswerIndex: correctIndex >= 0 ? correctIndex : 0,
      isFlagged: false,
    };
  });
};
