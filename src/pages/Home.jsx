import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { db } from '../Firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
const Home = () => {
  // Sample data array containing image URLs, names, and progress widths
  const data = [
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkartik-pic.jpg?alt=media&token=2a535c2b-3c4b-49f2-8a63-0532265b892d", name: "Kartikey Mittal", progress: 60 },
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fpraveen.jpg?alt=media&token=b3c333ad-e675-447f-9482-73fef322f879", name: "Praveen Tomar", progress: 40 },
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkaif.jpg?alt=media&token=0afe78a9-3ead-421c-930e-c73092f83732", name: "Kaif", progress: 30 },
    // Add more data items as needed
  ];

  // const taskData = [
  //   {
  //     name: "Task 1",
  //     description: "Description of Task 1",
  //     status: "completed"
  //   },
  //   {
  //     name: "Task 2",
  //     description: "Description of Task 2",
  //     status: "ongoing"
  //   },
  //   {
  //     name: "Task 3",
  //     description: "Description of Task 3",
  //     status: "pending"
  //   }
  // ];
  
 

  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");

    const fetchTasks = async () => {
      const email = localStorage.getItem("email");
    
      const tasksSnapshot = await getDocs(collection(db, "projects"));
    
      const tasks = [];
    
      tasksSnapshot.forEach((projectDoc) => {
        const projectTasksCollection = collection(projectDoc.ref, "tasks");
    
        getDocs(projectTasksCollection).then((taskSnapshot) => {
          taskSnapshot.forEach((taskDoc) => {
            const taskData = taskDoc.data();
            const { id,name, description, status, email: taskEmail } = taskData;
    
            if (email === taskEmail) {
              tasks.push({id, name, description, status, email: taskEmail });
            }
            console.log(tasks);
            setTaskData(tasks);
          });
        });
      });
    
      // setTaskData(tasks);
    };

    fetchTasks();
  }, []);

  const handleTask = async (event) => {
    const taskId = event.currentTarget.id;

    try {
        // Query to find the task document by task id
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef);

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (doc) => {
            const tasksRef = collection(doc.ref, 'tasks');
            const taskQuery = query(tasksRef, where('id', '==', taskId));

            const taskQuerySnapshot = await getDocs(taskQuery);

            taskQuerySnapshot.forEach(async (taskDoc) => {
                // Update the status of the task to 'ongoing' if it was 'pending', otherwise set it to 'completed'
                const taskData = taskDoc.data();
                const newStatus = taskData.status === 'pending' ? 'ongoing' : 'completed';
                await updateDoc(taskDoc.ref, { status: newStatus });
                console.log('Task status updated successfully.');
            });
        });
    } catch (error) {
        console.error('Error updating task status:', error);
    }
};

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: "#F5F5F5",
          height: "100%",
          width: "100%",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100vh",
          }}
        >





<div style={{ width: "60%", height: "100%", backgroundColor: "transparent", padding: '15px' }}>
  <div style={{ backgroundColor: '#e6eef1', padding: '5px', borderRadius: '0px', height: '90%', boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}>
    {taskData.map((task, index) => (
      <div key={index} id={task.id} style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px', backgroundColor: 'white', marginBottom: '10px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }} onClick={handleTask}>
        <div style={{ flexGrow: 1, marginRight: '10px' }}>
          <h4 style={{ margin: '0',fontFamily:'DMM' }}>{task.name}</h4>
          <p style={{ fontSize: '14px', color: 'gray' ,fontFamily:'DMM'}}>{task.description}</p>
        </div>
        <span className=" pt-1 pb-1" style={{ backgroundColor: task.status === 'ongoing' ? '#ffd325' : task.status === 'pending' ? '#f2558a' : '#4dc24c', borderRadius: '10px', fontSize: 12, fontFamily: 'DMM', color: '#fff',width:'70px',textAlign:'center' }}>{task.status}</span>

      </div>
    ))}
  </div>
</div>









          <div style={{ flex: "1", height: "100%", backgroundColor: "transparent" }}>
            {/* Render Paper components dynamically */}

            <div style={{ backgroundColor: "#e9f9e2", margin: 15, padding: 2, borderRadius: 0, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" ,height:'90%' }}>
            {data.map((item, index) => (
              <Paper key={index} elevation={3} style={{ borderRadius: 10, padding: 20, margin: 20, display: 'flex', alignItems: 'center' }}>
                <Avatar alt={item.name} src={item.imgSrc} />
                <div style={{ width: '100%' }}>
                  <span style={{ fontFamily: 'DMM', marginLeft: '10px', fontSize: 19 }}>{item.name}</span>
                  <div style={{ width: '80%', height: '5px', backgroundColor: 'black', borderRadius: '4px', overflow: 'hidden', marginLeft: '10px' }}>
                    <div style={{ width: `${item.progress}%`, height: '100%', backgroundColor: 'blue' }}></div>
                  </div>
                </div>
              </Paper>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
