import { useState } from 'react';
import React from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1)
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1)
        break;
      default:
        return;
    }
    
  };
  const countPositiveFeedbackPercentage = () => {
    return good + neutral + bad !== 0
      ? Math.round((100 / (good + neutral + bad)) * good)
      : 0;
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Notification
          message="There is no feedback"
          total={good + neutral + bad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
}
