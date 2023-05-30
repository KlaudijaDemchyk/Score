import React, { useState } from 'react';
import StudentsTable from './components/StudentsTable';
import './App.css';  

const App = () => {
  const [students, setStudents] = useState([
    {
      name: 'Андрій',
      score: 2
    },{
      name: 'Світлана',
      score: 100
    },
    {
      name: 'Людмила',
      score: 50
    },
    {
      name: 'Іван',
      score: 0
    }
  ]);

  const updateScore = (name, newScore) => {
    if (newScore < 0 || newScore > 100) {
      alert("Бали повинні бути в діапазоні від 0 до 100");
      return;
    }

    const newStudents = students.map(student => {
      if (student.name === name) {
        return { ...student, score: newScore };
      }
      return student;
    }).sort((a, b) => b.score - a.score);

    setStudents(newStudents);
  }

  const totalScore = students.reduce((total, student) => total + student.score, 0);
  const averageScore = students.length ? totalScore / students.length : 0;

  return (
    <div className="container">
      <div className="table">
        <h1>Рейтинг студентів</h1>
        <h2>Середній бал: {averageScore.toFixed(2)} балів</h2>
        <StudentsTable students={students} updateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;
