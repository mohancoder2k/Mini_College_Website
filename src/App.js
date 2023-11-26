
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import Admission from './components/Courses/Admission';
import NewStudent from './components/Students/NewStudent';
import AdmissionList from './components/pages/AdmissionList';
import StudentList from './components/pages/StudentsList';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/new-students" element={<NewStudent />} />
          <Route path="/admission-list" element={<AdmissionList/>} />
          <Route path="/student-list" element={<StudentList/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
