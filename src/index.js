import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Statistics from './components/statistics';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';
import Notification from './components/notification';

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) return 0;
    return Math.round((feedbackCounts.good / totalFeedback) * 100);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Give Feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleFeedbackClick} />
      </Section>
      <Section title="Feedback Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






