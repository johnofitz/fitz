import React, { useState, useEffect } from 'react';

const useTypewriter = ({ text, delay }) => {
    
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {

    const typingInterval = setInterval(() => {
      const currentLine = text[currentLineIndex];

      if (currentIndex < currentLine.length) {
        setCurrentText((prevText) => prevText + currentLine[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        if (currentLineIndex < text.length - 1) {
          setCurrentLineIndex((prevLineIndex) => prevLineIndex + 1);
          setCurrentIndex(0);
          setCurrentText('');
        } else {
          setCurrentLineIndex(0);
          setCurrentIndex(0);
          setCurrentText('');
        }
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [currentIndex, currentLineIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default useTypewriter;
