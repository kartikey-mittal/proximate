import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../Firebase';
import { query, collection, orderBy, onSnapshot, addDoc, serverTimestamp ,doc} from 'firebase/firestore';

// import { auth } from '../firebase'; // Import auth to access currentUser
import './chat.css'; // Ensure CSS is imported

const Messaging = () => {
 const [messages, setMessages] = useState([]);
 const scroll = useRef();
 const [input, setInput] = useState('');

 useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
 }, []);

 const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid message');
      return;
    }

    // const emailid = "praveen@gmail.com";
    
    const { uid, displayName } = {uid:"KAIF@gmail.com",displayName:"KAIF"};
    
    const projectRef = collection(db, 'messages');

// Add a new document to the "messages" collection
await addDoc(projectRef, {
  text: input,
  name: displayName,
  uid,
  timestamp: serverTimestamp()
});




    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
 };

 // Styles from Message and SendMessage components
 const styles = {
    message: {
      display: 'flex',
      maxWidth: '80%',
      padding: '8px 12px',
      margin: '4px 10px',
      borderRadius: '16px',
      alignItems: 'center',
      wordWrap: 'break-word',
    },
    sent: {
      backgroundColor: '#dcf8c6',
      alignSelf: 'flex-end',
      borderRadius: '15px',
      width: '40%',
      padding: '10px',
      marginBottom: '8px',
    },
    received: {
      backgroundColor: '#ebebeb',
      alignSelf: 'flex-start',
      borderRadius: '15px',
      width: '40%',
      padding: '10px',
      marginBottom: '8px',
    },
    name: {
      fontSize: '0.75rem',
      color: '#666',
      marginBottom: '2px',
      position: 'relative',
      left: '0',
    },
    messageText: {
      // Add any common styles for message text here
    },
    form: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flexGrow: 1,
      padding: '8px 10px',
      border: '1px solid #ccc',
      borderBottomLeftRadius: '18px',
      borderBottomRightRadius: '18px',
      marginRight: '10px',
      width: '75%',
      height: '30px',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#30b2d6',
      color: 'white',
      border: 'none',
      borderRadius: '18px',
      cursor: 'pointer',
    },
 };

 return (
    <>
      <main className="chat-container">
        {messages && messages.map((message) => {
          const messageClass = message.uid === "praveen@gmail.com" ? 'sent' : 'received';
          return (
            <div key={message.id} style={styles.message}>
              <p style={styles.name}>{message.name}</p>
              <p style={{ ...styles.messageText, ...styles[messageClass] }}>{message.text}</p>
            </div>
          );
        })}
        <span ref={scroll}></span>
      </main>
      <form onSubmit={sendMessage} style={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          type='text'
          placeholder='Message'
        />
        <button style={styles.button} type='submit'>
          Send
        </button>
      </form>
      <span ref={scroll}></span>
    </>
 );
};

export default Messaging;
