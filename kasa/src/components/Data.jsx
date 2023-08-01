import { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setData(myJson);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}

export default Data;
