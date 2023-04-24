import React, { useState, useEffect } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ phrases, typingSpeed, delay }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      animateText();
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  function animateText() {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    if (isDeleting) {
      setText(currentPhrase.substring(0, text.length - 1));
      if (text.length === 1) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      setText(currentPhrase.substring(0, text.length + 1));
      if (text.length === currentPhrase.length - 1) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }
  }

  return (
    <span className="animated-text">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default AnimatedText;
