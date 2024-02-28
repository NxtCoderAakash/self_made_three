import React, { useState, useEffect } from 'react';
import "./styles.css"

const TypingText = ({ content, typingSpeed,handleStepper,step }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [blink,setBlink]=useState(true)

  useEffect(() => {
   
    let intervalId;
    setTimeout(()=>{
        let currentIndex = 0;
         intervalId = setInterval(() => {
            setDisplayedText((prevText) => {
              const nextChar = content[currentIndex];
              // Stop interval when all characters are displayed
              if (currentIndex === content.length) {
                setBlink(false)
                handleStepper(step+1)
                clearInterval(intervalId)
                return prevText;
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

  return <div>{displayedText}<span className={`${blink?"blink-cursor":"no-blink"}`}>|</span></div>;
};

const ChatApp = ({message,speed,ani,handleStepper,step}) => {
  const messageContent = message;
  const typingSpeed = 200; // Adjust the typing speed in milliseconds

  return (
    <div className={`${ani?"HW_pulse":""}`}>
      <div className={`typing-text`}><TypingText content={messageContent} typingSpeed={typingSpeed} handleStepper={handleStepper} step={step}/> </div>
    </div>
  );
};

export default ChatApp;
