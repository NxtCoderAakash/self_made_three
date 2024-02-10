import React, { useState, useEffect } from 'react';
const TypingText = ({ content, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;
    setTimeout(()=>{
         intervalId = setInterval(() => {
            setDisplayedText((prevText) => {
              const nextChar = content[currentIndex];
              
    
              // Stop interval when all characters are displayed
              if (currentIndex === content.length) {
                clearInterval(intervalId)
                return prevText
               
              }
              else{
                currentIndex++;
                return prevText + nextChar;
              } 
      
              
            });
          }, typingSpeed);
        
    },1000)
   

    return () => clearInterval(intervalId);
  }, [content, typingSpeed]);

  return <div>{displayedText}</div>;
};

const ChatApp = ({message,speed,ani}) => {
  const messageContent = message;
  const typingSpeed = 1000; // Adjust the typing speed in milliseconds

  return (
    <div className={`${ani?"HW_pulse":""}`}>
      <p className={`typing-text`}><TypingText content={messageContent} typingSpeed={typingSpeed} /></p>
    </div>
  );
};

export default ChatApp;
