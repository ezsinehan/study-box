import React, { useState } from 'react';
import '../styles/Feynman.css'


const Feynman = () => {
    const [subject, setSubject] = useState('');
    const [explanation, setExplanation] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [typedFeedback, setTypedFeedback] = useState('');


    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleExplanationChange = (event) => {
        setExplanation(event.target.value);
    };
    const typeFeedback = (feedbackText, index = 0) => {
        if (index < feedbackText.length) {
            setTypedFeedback((prev) => prev + feedbackText.charAt(index));
            setTimeout(() => {
                typeFeedback(feedbackText, index + 1);
            }, 25); // Speed of typing, adjust as needed
        }
    };

    const analyzeExplanation = async () => {
        // Here you can implement logic or call an API to analyze the explanation
        // For now, we'll just set a simple feedback
        setIsLoading(true);
        const response = await fetch('http://localhost:3001/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, explanation }),
        });

        if (response.ok) {
            const result = await response.json();
            setFeedback(result.feedback);
            setTypedFeedback('');
            typeFeedback(result.feedback);
        } else {
            // Handle errors
            console.error('Failed to analyze explanation');
        }
        setIsLoading(false);
    

    };

    return (
        <div className="feynman-container">
            <h1>Feynman Technique</h1>
            <div className="input-group">
                <label htmlFor="subject">Subject:</label>
                <input
                    id="subject"
                    type="text"
                    placeholder="Enter the subject you want to learn"
                    value={subject}
                    onChange={handleSubjectChange}
                />
            </div>
            <div className="input-group">
                <label htmlFor="explanation">Explanation:</label>
                <textarea
                    id="explanation"
                    placeholder="Explain the concept as if you were teaching it to someone else"
                    value={explanation}
                    onChange={handleExplanationChange}
                />
            </div>

            {isLoading ? (
                <div className="loading-container">
                    <div className="square-loader"></div>

                </div>) : (
                <button className="analyze-btn" onClick={analyzeExplanation}>Analyze Explanation</button>
            )}

            {feedback && <div className="feedback-section">
                <h2>Feedback:</h2>
                <p>{typedFeedback}</p>
            </div>}
        </div>
    );
};

export default Feynman;