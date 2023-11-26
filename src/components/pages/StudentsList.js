
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        setStudentInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student information:', error);
        setLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  const styles = {
    container: {
      maxWidth: '800px',
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      borderBottom: '1px solid #ddd',
      padding: '15px',
      textAlign: 'left',
    },
    loading: {
      textAlign: 'center',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Information</h2>
      {loading ? (
        <p style={styles.loading}>Loading student information...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentInfo.map((info) => (
              <tr key={info.id}>
                <td style={styles.td}>{info.id}</td>
                <td style={styles.td}>{info.firstName}</td>
                <td style={styles.td}>{info.lastName}</td>
                <td style={styles.td}>{info.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
