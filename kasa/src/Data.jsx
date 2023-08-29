import { useState, useEffect } from 'react';

async function getData() {
  const response = await fetch('../data.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const myJson = await response.json();
  return myJson;
}

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const newData = await getData();
      setData(newData);
    }
    fetchData();
  }, []);

  return data;
}

export default Data;
