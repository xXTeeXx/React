import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsList from './commponents/itemsList'
import StudentsList from './commponents/StudentList'
import SubjectsList from './commponents/subjectsList'

function App() {
  return (
    <div className="app">
      <h1>My App</h1>

      <div className="card">
        <h2>Items</h2>
        <ItemsList />
      </div>

      <div className="card">
        <h2>Students</h2>
        <StudentsList />
      </div>

      <div className="card">
        <h2>Subjects</h2>
        <SubjectsList />
      </div>
    </div>
  );
}

export default App;