import React from 'react';
import ScoreInput from './ScoreInput';

const Student = ({ student, updateScore }) => (
  <tr>
    <td>{student.name}</td>
    <ScoreInput score={student.score} onScoreChange={newScore => updateScore(student.name, newScore)} />
  </tr>
);

export default Student;
