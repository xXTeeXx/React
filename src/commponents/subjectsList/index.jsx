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
    color: '#333', // Dark gray color
  },
  loading: {
    textAlign: 'center',
    color: '#777', // Gray color
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
    background: '#f5f5f5', // Light gray background
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333', // Dark gray color
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    color: '#555', // Darker gray color
  },
};


const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/subjects');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Subjects List</h1>
      {isLoading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeaderCell}>ID</th>
            <th style={styles.tableHeaderCell}>Name</th>
            <th style={styles.tableHeaderCell}>Description</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.ID} style={styles.tableRow}>
              <td style={styles.tableCell}>{subject.ID}</td>
              <td style={styles.tableCell}>{subject.Name}</td>
              <td style={styles.tableCell}>{subject.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectsList;
