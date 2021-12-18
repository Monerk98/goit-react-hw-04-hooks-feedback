import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOption/FeetbackOption.jsx";
import Statistics from "./Static/Static.jsx";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ["good", "neutral", "bad"];
  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  const handleClickButton = (nameBtn) => {
    switch (nameBtn) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleClickButton} />
      </Section>
      <Section title="Statictics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
