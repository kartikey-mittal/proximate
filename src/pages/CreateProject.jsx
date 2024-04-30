import React, { useState } from "react";
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CreateProject = () => {

  
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [projectName, setProjectName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (event) => {
        const option = event.target.value;
        if (event.target.checked) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption !== option));
        }
    };

    const createProject = async () => {
        try {
            const projectData = {
                name: projectName,
                budget: budgetAmount,
                members: selectedOptions
            };

            const docRef = await addDoc(collection(db, "projects"), projectData);
            console.log("Project created with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding project: ", error);
        }

        navigate('/projects'); // Navigate to '/connect'
    };

    return (
        <>
            <div style={{ height: '100vh', backgroundColor: 'red', paddingTop: '70px', background: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px), #ececec`, }}>

                <div>
                    <div style={{ fontFamily: "DMM", marginLeft: 30, marginTop: 0 }} className="ml-10 mt-20">Project Name</div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField label="Project Name" color="secondary" focused style={{ marginTop: 10, marginLeft: 30 }} onChange={(e) => setProjectName(e.target.value)} />
                    </Box>
                </div>

                <div>
                    <div style={{ fontFamily: "DMM", marginLeft: 30, marginTop: 20 }} className="ml-10 mt-20">Budget Amount</div>
                    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
                        <TextField label="Budget Amount" color="secondary" focused style={{ marginTop: 10, marginLeft: 30 }} onChange={(e) => setBudgetAmount(e.target.value)} />
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

export default CreateProject;
