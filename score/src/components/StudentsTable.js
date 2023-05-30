import React from 'react';
import Student from './Student';

const StudentsTable = ({ students, updateScore }) => (
  <table>
    {students.map(student => (
      <Student key={student.name} student={student} updateScore={updateScore} />
    ))}
  </table>
);

export default StudentsTable;
