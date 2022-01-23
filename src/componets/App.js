import React, { Component } from 'react';
import Section from './SectionFeedback/Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistic';
import Notification from './NotificationMessage';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStateValues = () => Object.values(this.state);
  getStateOptions = () => Object.keys(this.state);

  handleIncrementReview = e => {
    const currenOption = e.target.textContent;
    this.setState(prevState => {
      return { [currenOption]: prevState[currenOption] + 1 };
    });
  };

  countTotalFeedback() {
    return this.getStateValues().reduce((acc, feed) => acc + feed, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const labels = this.getStateOptions();
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={labels}
            onLeaveFeedback={this.handleIncrementReview}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeeds={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="No feedback given " />
          )}
        </Section>
      </div>
    );
  }
}
