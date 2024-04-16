import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Test = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));

        const namesArray = [];
        querySnapshot.forEach(doc => {
          // Extracting the value of the "Name" field from each document
          const name = doc.data().Name;
          namesArray.push(name);
        });

        setNames(namesArray);
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []);

  return (
    <div>
      <h2>Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
