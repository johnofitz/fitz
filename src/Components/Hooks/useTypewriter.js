import React, { useState, useEffect } from "react";

const useTypewriter = ({ text, delay, lineDelay, clearDelay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentLine = text[currentLineIndex];

      if (currentIndex < currentLine.length) {
        setCurrentText(prevText => prevText + currentLine[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        setTimeout(() => {
          if (currentLineIndex < text.length - 1) {
            setCurrentLineIndex(prevLineIndex => prevLineIndex + 1);
            setCurrentIndex(0);
            setCurrentText('');
          } else {
            setIsTypingCompleted(true);
            clearInterval(typingInterval);
            setTimeout(() => {
              setIsTypingCompleted(false);
              setCurrentText('');
              setCurrentIndex(0);
              setCurrentLineIndex(0);
            }, clearDelay);
          }
        }, lineDelay);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentLineIndex, delay, lineDelay, clearDelay, text]);

  return {
    currentText,
    isTypingCompleted
  };
};

export default useTypewriter;
