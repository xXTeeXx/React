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
    padding: '10px',
    background: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: '10px',
  },
};

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/items');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Items List</h1>
      {isLoading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeaderCell}>ID</th>
            <th style={styles.tableHeaderCell}>Name</th>
            <th style={styles.tableHeaderCell}>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.ID} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.ID}</td>
              <td style={styles.tableCell}>{item.Name}</td>
              <td style={styles.tableCell}>{item.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
