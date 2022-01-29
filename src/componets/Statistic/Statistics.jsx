import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, totalFeeds, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem key="good">Good: {good}</StatisticsItem>
      <StatisticsItem key="neutral">Neutral: {neutral}</StatisticsItem>
      <StatisticsItem key="bad">Bad: {bad}</StatisticsItem>
      <StatisticsItem key="total">Total: {totalFeeds}</StatisticsItem>
      <StatisticsItem key="percentage">
        Positive feedback: {positivePercentage}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  totalFeeds: PropTypes.number.isRequired,
};

export default Statistics;
