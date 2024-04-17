import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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

      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
    </Stack>
    </div>
  );
};

export default Test;
