import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    color: '#888',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableHeaderCell: {
    padding: '12px',
    background: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
  },
};

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Students List</h1>
      {isLoading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeaderCell}>ID</th>
            <th style={styles.tableHeaderCell}>First Name</th>
            <th style={styles.tableHeaderCell}>Last Name</th>
            <th style={styles.tableHeaderCell}>Age</th>
            <th style={styles.tableHeaderCell}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.ID} style={styles.tableRow}>
              <td style={styles.tableCell}>{student.ID}</td>
              <td style={styles.tableCell}>{student.FirstName}</td>
              <td style={styles.tableCell}>{student.LastName}</td>
              <td style={styles.tableCell}>{student.Age}</td>
              <td style={styles.tableCell}>{student.Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
