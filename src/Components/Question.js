import React, { useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './Question.css';

const categories = ["IDEALISTIC", "DISILLUSIONED", "CYNICAL", "HOPEFUL"];

function Question({ index, question, answer, onAnswer, onNext, totalQuestions }) {
    useEffect(() => {
        if (answer !== null) {
            const timer = setTimeout(() => {
                onNext();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [answer, onNext]);

    const handleChange = (event) => {
        onAnswer(index, parseInt(event.target.value));
    };

    return (
        <div className="question">
            <ProgressBar currentQuestion={index + 1} totalQuestions={totalQuestions} categories={categories} />
            <span style={{ color: 'red', marginTop: '40px', marginLeft: '280px' }}>{index + 1}/20</span>
            <h2 style={{ marginTop: '40px' }}>{index + 1}. {question}</h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="4"

                    value={answer !== null ? answer : 0}
                    className="slider"
                    onChange={handleChange}
                />
                <div className="labels">
                    <span>Strongly Disagree</span>
                    <span>Disagree</span>
                    <span>Neutral</span>
                    <span>Agree</span>
                    <span>Strongly Agree</span>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => onNext()} disabled={answer === null}>
                    &#8592; Prev
                </button>
                <button onClick={() => onNext()} disabled={answer === null}>
                    Next &#8594;
                </button>
            </div>
        </div >
    );
}

export default Question;
