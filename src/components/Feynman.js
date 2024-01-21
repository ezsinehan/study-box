import React, { useState } from 'react';
import '../styles/Feynman.css'


const Feynman= () => {
  const [subject, setSubject] = useState('');
  const [explanation, setExplanation] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleExplanationChange = (event) => {
    setExplanation(event.target.value);
  };

  const analyzeExplanation = () => {
    // Here you can implement logic or call an API to analyze the explanation
    // For now, we'll just set a simple feedback
    setFeedback('Good start, try to elaborate more on certain points...');
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
    <button className="analyze-btn" onClick={analyzeExplanation}>Analyze Explanation</button>
    {feedback && <div className="feedback-section">
      <h2>Feedback:</h2>
      <p>{feedback}</p>
    </div>}
  </div>
  );
};

export default Feynman;