

import React from 'react';
import './Home.css'; 
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>XYZ Engineering College</h1>
      </header>
      <section className="college-info">
        <h2>About Our College</h2>
        <p>
          Engineering College is a leading institution that strives to provide
          quality education in the field of engineering. We are committed to
          fostering innovation, research, and excellence in our students.
        </p>
      </section>
      <section className="courses-offered">
        <h2>Our Courses</h2>
        <ul>
          <li>Computer Science Engineering</li>
          <li>Electrical and Electronics Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Electronics and Communication Engineering</li>
          <li>Information Technology</li>
          <li>Civil Engineering</li>
        </ul>
      </section>
      <section className="facilities">
        <h2>Facilities</h2>
        <p>
          Our campus is equipped with state-of-the-art facilities, including
          modern classrooms, laboratories, and a well-stocked library. We
          provide a conducive environment for both learning and research.
        </p>
      </section>
    </div>
  );
};

export default Home;
