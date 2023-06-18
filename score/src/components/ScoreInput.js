import React from 'react';

const ScoreInput = ({ score, onScoreChange }) => (
  <td>
    <input 
     data-testid="score-input"
      type="text" 
      value={score} 
      onChange={e => onScoreChange(Number(e.target.value))}
    />
  </td>
);

export default ScoreInput;
