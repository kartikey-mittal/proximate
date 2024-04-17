import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';

const ProjectCard = ({ projectName, progress, memberImages }) => {
    // Set status based on progress
    const status = progress < 100 ? 'Ongoing' : 'Completed';

    // Determine progress bar color
    const progressBarColor = progress === 100 && status === 'Completed' ? '#4CAF50' : '#3F51B5';

    return (
        <div style={{ width: '380px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
            <div style={{ position: 'relative', height: '20px', backgroundColor: '#E0E0E0', borderRadius: '10px', marginBottom: '10px' }}>
                <div style={{ position: 'absolute', height: '100%', width: `${progress}%`, backgroundColor: progressBarColor, borderRadius: '10px' }}></div>
                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>{progress}%</span>
            </div>

            <h2 style={{ margin: '10px 0', fontSize: '1.2em',fontFamily:'DMM' }}>{projectName}</h2>

            <button className={`status-button ${status.toLowerCase()}`} style={{ backgroundColor: status.toLowerCase() === 'ongoing' ? 'blue' : 'green', color: '#fff', border: 'none', padding: '0px 10px', borderRadius: '20px', marginBottom: '10px',fontFamily:'DMM' }}>{status}</button>

            <div style={{ display: 'flex', alignItems: 'center' ,marginTop:'20px'}}>
                <AvatarGroup max={4}>
                    {memberImages.map((image, index) => (
                        <Avatar key={index} alt={`Member ${index + 1}`} src={image} />
                    ))}
                </AvatarGroup>
                <button style={{ backgroundColor: '#eee', border: 'none', padding: '5px', borderRadius: '50%', cursor: 'pointer' }}>+</button>
            </div>
        </div>
    );
};

export default ProjectCard;
