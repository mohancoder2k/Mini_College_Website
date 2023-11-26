
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      await axios.post('http://localhost:8081/api/admissions', formData);
      alert('Admission information submitted successfully!');
      setFormData({
        name: '',
        email: '',
        course: '',
      });
    } catch (error) {
      console.error('Error submitting admission information:', error);
      alert('Failed to submit admission information. Please try again.');
    }
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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Apply for Admission</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label style={styles.label}>
          Course:
          <input
            style={styles.input}
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>
        <br />
   
        <button style={styles.button} onClick={handleSubmit} ><Link to="/admission-list" >View Enquiry List</Link></button>
        
      </form>
    </div>
  );
};

export default Admission;
