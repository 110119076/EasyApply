import React from "react";
import ResumeUpload from "../components/ResumeUpload";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
    const navigate = useNavigate();
    const handleResumeUpload = (file) => {
        // TODO: Connect with backend API
        console.log("Uploading resume", file);
        navigate("/dashboard");
    }

    return <ResumeUpload onUpload={handleResumeUpload}/>
}

export default UploadPage