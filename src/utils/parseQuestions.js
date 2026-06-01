/**
 * Parses the raw KTE question text into structured question objects.
 * Format:
 *   ?Question text
 *   +Correct answer
 *   -Wrong answer 1
 *   -Wrong answer 2
 *   -Wrong answer 3
 */

import rawData from "../data/KTE/index.js";

export function parseQuestions() {
  const lines = rawData
    .split("\n")
    .map((l) => l.replace(/\r/g, "").trim())
    .filter((l) => l.length > 0);

  const questions = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith("?")) {
      if (current && current.question && current.correct !== null) {
        questions.push(current);
      }
      current = { question: line.slice(1).trim(), correct: null, answers: [] };
    } else if (line.startsWith("+") && current) {
      current.correct = line.slice(1).trim();
      current.answers.push(line.slice(1).trim());
    } else if (line.startsWith("-") && current) {
      current.answers.push(line.slice(1).trim());
    }
  }

  // push last question
  if (current && current.question && current.correct !== null) {
    questions.push(current);
  }

  return questions;
}

/**
 * Shuffles an array in-place using Fisher-Yates algorithm.
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns `count` random questions from the parsed list,
 * each with shuffled answer options.
 */
export function getRandomQuestions(count = 50) {
  const all = parseQuestions();
  const selected = shuffle(all).slice(0, Math.min(count, all.length));

  return selected.map((q, index) => {
    // Shuffle answers but track which one is correct
    const answersWithMeta = q.answers.map((a) => ({
      text: a,
      isCorrect: a === q.correct,
    }));
    const shuffled = shuffle(answersWithMeta);

    return {
      id: index,
      question: q.question,
      answers: shuffled,
      correctAnswer: q.correct,
    };
  });
}
