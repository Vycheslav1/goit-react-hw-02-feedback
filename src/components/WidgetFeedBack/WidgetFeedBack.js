import React, { Component } from 'react';

import variants from 'data/variants.json';

import { Section } from 'components/Section/Section.js';

import { Notification } from 'components/Notification/Notification.js';

import { Statistics } from 'components/Statistics/Statistics.js';

import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions.js';

import { StatTitle } from './WidgetFeedBackStyles.js';

class WidgetFeedBack extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  changeState = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = state => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = state => {
    return Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={variants}
          onLeaveFeedback={this.changeState}
        />
        <StatTitle>Statistics</StatTitle>

        {this.countTotalFeedback(this.state) > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export { WidgetFeedBack };
