import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsList from './commponents/itemsList'
import StudentsList from './commponents/StudentList'
import SubjectsList from './commponents/subjectsList'
import Item from './commponents/itemsList/item'
import ItemFormFind from './commponents/itemformfind'
import StudentFormFind from './commponents/studentformfind'
import SubjectFormFind from './commponents/subjectformfind'
import Student from './commponents/StudentList/student'
import Subject from './commponents/subjectsList/subjects'

function App() {
  return (
    <div className="app">
      <div className="card">
        <h2>Items</h2>
        <ItemFormFind/>
        <Item id="4"/>
        <ItemsList />
      </div>

      <div className="card">
        <h2>Students</h2>
        <StudentFormFind/>
        <Student id="1"/>
        <StudentsList />
      </div>

      <div className="card">
        <h2>Subjects</h2>
        <SubjectFormFind/>
        <Subject id="2"/>
        <SubjectsList />
      </div>
    </div>
  );
}

export default App;