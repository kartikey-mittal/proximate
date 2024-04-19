import React, { useState } from "react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { TiUpload } from "react-icons/ti";
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AiOutlineDownload } from 'react-icons/ai';

const Attachments = ({ attachmentsData }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDownload = (url) => {
    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = ref(storage, `files/${file.name}`);
  
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (typeof reader.result === 'string') {
          await uploadString(storageRef, reader.result, 'data_url');
  
          const downloadURL = await getDownloadURL(storageRef);
  
          setUploadedFile(downloadURL);
  
          console.log("File uploaded successfully. Download URL:", downloadURL);
          alert("File uploaded successfully.");
        } else {
          console.error('Invalid dataURL:', reader.result);
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5em",
            marginLeft: "10px",
            fontFamily: "DMM",
          }}
        >
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: '15px' }}>
          <label htmlFor="fileInput">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "#7a87c6",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
                fontFamily: "DMM",
              }}
            >
              Upload
              <TiUpload style={{ marginLeft: "15px" }} />
            </button>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              backgroundColor: "#7a87c6",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
              fontFamily: "DMM",
            }}
            onChange={handleFileUpload}
          />
        </div>
      </div>

      {attachmentsData.map((attachment, index) => (
        <Paper
        key={index}
        elevation={2}
        style={{
          width: "70%",
          alignSelf: "center",
          marginLeft: "30px",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop:10
        }}
      >
        <div style={{ flex: 1, fontFamily: 'DMM' }}>{attachment.name}</div>
        <button onClick={() => handleDownload(attachment.link)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <AiOutlineDownload style={{ fontSize: "32px", color: "blue" }} />
        </button>
      </Paper>
      ))}

      {uploadedFile && (
        <div style={{ marginTop: "10px" }}>
          <a href={uploadedFile} target="_blank" rel="noopener noreferrer">
            {uploadedFile}
          </a>
        </div>
      )}
    </>
  );
};

export default Attachments;
