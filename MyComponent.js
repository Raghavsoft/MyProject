import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  // State to track loading and error states


  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Assuming the response data is an array
        setData(response.data);
      } catch (error) {
        console.log(error);
      } 
      
    };

    // Call the fetch data function
    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs only once (similar to componentDidMount)

  // Display loading state
 
  // Display error state


  // Display the fetched data
  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
