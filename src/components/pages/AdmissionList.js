
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdmissionList = () => {
  const [admissionInfo, setAdmissionInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmissionInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/admissions');
        setAdmissionInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching admission information:', error);
        setLoading(false);
      }
    };

    fetchAdmissionInfo();
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
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ccc',
      padding: '10px',
      textAlign: 'left',
    },
    loading: {
      textAlign: 'center',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admission Information</h2>
      {loading ? (
        <p style={styles.loading}>Loading admission information...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Course</th>
            </tr>
          </thead>
          <tbody>
            {admissionInfo.map((info) => (
              <tr key={info.id}>
                <td style={styles.td}>{info.name}</td>
                <td style={styles.td}>{info.email}</td>
                <td style={styles.td}>{info.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdmissionList;
