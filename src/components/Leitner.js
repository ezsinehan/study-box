import React, { useState } from 'react';
import '../styles/Leitner.css';

const Leitner = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAddFlashcard, setShowAddFlashcard] = useState(false);
    const [newFlashcardQuestion, setNewFlashcardQuestion] = useState('');
    const [newFlashcardAnswer, setNewFlashcardAnswer] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleAddFlashcard = () => {
        const newFlashcard = { question: newFlashcardQuestion, answer: newFlashcardAnswer };
        setFlashcards([...flashcards, newFlashcard]);
        setNewFlashcardQuestion('');
        setNewFlashcardAnswer('');
        setShowAddFlashcard(false);
    };

    const handleDeleteFlashcard = () => {
        const updatedFlashcards = [...flashcards];
        updatedFlashcards.splice(currentCardIndex, 1); // Remove the current flashcard
        setFlashcards(updatedFlashcards);
        if (currentCardIndex >= updatedFlashcards.length) {
            setCurrentCardIndex(updatedFlashcards.length - 1); // Adjust the current card index if needed
        }
        setIsFlipped(false); // Reset the flipped state
    };

    const handleNextCard = () => {
        setIsFlipped(false);
        setCurrentCardIndex((currentCardIndex + 1) % flashcards.length);
    };

    const handleFlipCard = () => {
        setIsFlipped(!isFlipped);
    };
    const renderFlashcardContent = () => {
      if (flashcards.length === 0) {
          return <p>No flashcards exist.</p>;
      }

      const card = flashcards[currentCardIndex];
      return (
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
              <div className="flashcard-inner">
                  <div className="flashcard-front">
                      <strong> Q:</strong> {card.question}
                  </div>
                  <div className="flashcard-back">
                      <strong> A:</strong> {card.answer}
                  </div>
              </div>
              <button className="delete-button" onClick={handleDeleteFlashcard}>Delete Flashcard</button>
          </div>
      );
  };

  return (
      <div className="leitner-container">
          <h2>Leitner Flashcard System</h2>
          {showAddFlashcard ? (
              <div>
                  <input 
                      type="text" 
                      value={newFlashcardQuestion} 
                      onChange={(e) => setNewFlashcardQuestion(e.target.value)} 
                      placeholder="Enter flashcard question" 
                  />
                  <input 
                      type="text" 
                      value={newFlashcardAnswer} 
                      onChange={(e) => setNewFlashcardAnswer(e.target.value)} 
                      placeholder="Enter flashcard answer" 
                  />
                  <button onClick={handleAddFlashcard}>Add Flashcard</button>
              </div>
          ) : (
              <>
                  <button onClick={() => setShowAddFlashcard(true)}>Create Flashcard</button>
                  <div className="flashcard-display">
                      {renderFlashcardContent()}
                      {flashcards.length > 0 && (
                          <button className="nextCard" onClick={handleNextCard}>Next Card</button>
                      )}
                  </div>
              </>
          )}
      </div>
  );
};

export default Leitner;