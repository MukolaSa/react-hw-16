import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Добре: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Погано: {bad}</p>
      <p>Загально: {total}</p>
      <p>Відсоток позитивних відгуків: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
