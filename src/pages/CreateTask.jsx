import React, { useState } from "react";
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CreateTask = () => {
    const [taskName, setTaskName] = useState(''); // State variable for project name
    const [taskDescription, setTaskDescription] = useState(''); // State variable for budget amount
    const [selectedOptions, setSelectedOptions] = useState([]); // State variable for selected members

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedOptions(prevOptions => [...prevOptions, value]);
        } else {
            setSelectedOptions(prevOptions => prevOptions.filter(option => option !== value));
        }
    };

    const createProject = async () => {
        try {
            const projectData = {
                projectName: taskName,
                budgetAmount: taskDescription,
                members: selectedOptions
            };
            const docRef = await addDoc(collection(db, 'projects'), projectData);
            console.log("Project created with ID: ", docRef.id);
            navigate('/'); // Navigate to home page or any desired route after project creation
        } catch (error) {
            console.error("Error adding project: ", error);
        }
    };

    return (
        <>
            <div style={{ height: '100vh', backgroundColor: 'red', paddingTop: '70px', background: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px), #ececec`, }}>

                <div>
                    <div style={{ fontFamily: "DMM", marginLeft: 30, marginTop: 0 }} className="ml-10 mt-20">Project Name</div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField label="Project Name" color="secondary" focused style={{ marginTop: 10, marginLeft: 30 }} onChange={(e) => setTaskName(e.target.value)} />
                    </Box>
                </div>

                <div>
                    <div style={{ fontFamily: "DMM", marginLeft: 30, marginTop: 20 }} className="ml-10 mt-20">Budget Amount</div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField label="Budget Amount" color="secondary" focused style={{ marginTop: 10, marginLeft: 30 }} onChange={(e) => setTaskDescription(e.target.value)} />
                    </Box>
                </div>

                {/* ---------------------- */}
                <div>
                    <h2 style={{ fontFamily: 'DMM', fontSize: 20, marginLeft: 20, marginTop: 20 }}>Select Members</h2>
                    <label style={{ fontSize: 20, marginLeft: 30 }}>
                        <input type="checkbox" value="praveen@gmail.com" onChange={handleCheckboxChange} style={{ fontSize: 20 }} />
                        Praveen
                    </label><br />
                    <label style={{ fontSize: 20, marginLeft: 30 }}>
                        <input type="checkbox" value="kartikey@gmail.com" onChange={handleCheckboxChange} />
                        Kartikey
                    </label><br />
                    <label style={{ fontSize: 20, marginLeft: 30 }}>
                        <input type="checkbox" value="kaif@gmail.com" onChange={handleCheckboxChange} />
                        Kaif
                    </label><br />
                    <label style={{ fontSize: 20, marginLeft: 30 }}>
                        <input type="checkbox" value="kriti@gmail.com" onChange={handleCheckboxChange} />
                        Kriti
                    </label><br />
                    <p style={{ fontFamily: 'DMM', marginLeft: 30, marginTop: 20, fontSize: 17 }}>Selected Options: {selectedOptions.join(', ')}</p>
                </div>
                {/* ---------------------- */}

                <button className="pl-4 pr-4 pt-1 pb-1 ml-5 mt-50" style={{ fontSize: 18, borderRadius: 30, color: 'white', backgroundColor: 'blue', marginTop: 50 }} onClick={createProject}>Create a Project</button>
            </div>
        </>
    );
};

export default CreateTask;
