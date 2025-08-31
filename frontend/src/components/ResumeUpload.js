import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ResumeUpload = ({onUpload}) => {
  const [resume, setResume] = useState(null);
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };
  const handleUpload = () => {
    if (resume) {
        onUpload(resume)
    }
  };
  return (
    <div>
      <Box textAlign="center" p={4} border="2px dashed #aaa" borderRadius="12px">
        <Typography variant="h6" gutterBottom>
            Upload Your Resume
        </Typography>
        <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            id="resume-input"
            onChange={handleFileChange}
        />
        <label htmlFor="resume-input">
            <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
            >
                Choose File
            </Button>
        </label>
        {resume && <Typography mt={2}>{resume.name}</Typography>}
        <Box mt={2}>
            <Button
                variant="contained"
                color="success"
                onClick={handleUpload}
                disabled={!resume}
            >
                Upload Resume
            </Button>
      </Box>
      </Box>
    </div>
  )
}

export default ResumeUpload
