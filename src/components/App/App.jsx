import React, { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';


export const App = (()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const feedback = { good, neutral, bad };
  const options = Object.keys(feedback);


  const countTotalFeedback = () => {
    return good + bad + neutral;
  };


  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() >= 1
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };
  

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        console.log('Invalid feedback type');
    }
  };



  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There are no feedback'}></Notification>
        )}
      </Section>
    </>
  );
})
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + bad + neutral;
  // };



