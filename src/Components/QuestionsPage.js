import React, { useState } from 'react';
import Question from './Question';


const questions = [
    "My plans are likely to succeed.",
    "I feel motivated to work towards my goals.",
    "I have a clear vision for my future.",
    "I am confident in my abilities.",
    "I can handle unexpected challenges.",
    "I stay positive in difficult times.",
    "I seek out opportunities for growth.",
    "I believe in my own potential.",
    "I am proactive in my approach to tasks.",
    "I am resilient in the face of setbacks.",
    "I can effectively manage my time.",
    "I am open to new experiences.",
    "I have a growth mindset.",
    "I am adaptable to change.",
    "I am committed to my goals.",
    "I take responsibility for my actions.",
    "I am self-motivated.",
    "I am resourceful.",
    "I can work well under pressure.",
    "I strive for excellence in all I do."
];

function QuestionsPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className="questions-page">
            {currentQuestionIndex < questions.length ? (
                <Question
                    index={currentQuestionIndex}
                    question={questions[currentQuestionIndex]}
                    answer={answers[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    totalQuestions={questions.length}
                />
            ) : (
                <div className="completion-message">
                    <h2>It's over!</h2>
                </div>
            )}
        </div>
    );
}

export default QuestionsPage;
