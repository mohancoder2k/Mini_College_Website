
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const NewStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/students', student);
      alert('Student Added Successfully')
      console.log('Student created successfully:', response.data);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create New Student</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          First Name:
          <input
            style={styles.input}
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.label}>
          Last Name:
          <input
            style={styles.input}
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button style={styles.button} onClick={handleSubmit}><Link to="/student-list" >Submit</Link> </button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#3498db',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default NewStudent;
