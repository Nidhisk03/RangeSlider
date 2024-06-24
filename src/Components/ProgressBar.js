import React from 'react';
import './ProgressBar.css';

function ProgressBar({ currentQuestion, totalQuestions, categories }) {
    const questionsPerCategory = totalQuestions / categories.length;

    return (
        <div className="progress-bars-container">
            {categories.map((category, index) => {
                const start = index * questionsPerCategory;
                const end = start + questionsPerCategory;
                const completedQuestions = Math.min(Math.max(currentQuestion - start, 0), questionsPerCategory);
                const progress = (completedQuestions / questionsPerCategory) * 100;

                return (
                    <div key={index} className="progress-bar-category">
                        <div className="progress-bar-wrapper">
                            <div
                                className={`progress-bar ${completedQuestions > 0 ? 'filled' : ''}`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <span className="progress-bar-label">{category}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ProgressBar;
