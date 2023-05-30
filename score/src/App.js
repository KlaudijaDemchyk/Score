import React, { useState } from 'react';
import StudentsTable from './components/StudentsTable';
import './App.css'; 

const App = () => {
  const [students, setStudents] = useState([
    { name: 'Андрій', score: 200 },
    { name: 'Світлана', score: 100 },
    { name: 'Людмила', score: 50 },
    { name: 'Іван', score: 0 },
  ]);

  const updateScore = (name, score) => {
    const updatedStudents = students.map(student => {
      if (student.name === name) {
        return { ...student, score };
      }

      return student;
    });

    
    updatedStudents.sort((a, b) => b.score - a.score);

    setStudents(updatedStudents);
  };

  const averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;

  return (
    <div className="container">
      <div className="table">
        <h1>Рейтинг студентів</h1>
        <h2>Середній бал: {averageScore.toFixed(2)} балів</h2>
        <StudentsTable students={students} updateScore={updateScore} />
      </div>
    </div>
  );
};

export default App;
