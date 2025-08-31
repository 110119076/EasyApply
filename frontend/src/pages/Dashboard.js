import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
    const [jobs] = useState([
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "Remote",
            description: "Work with React and build cool UIs.",
        },
        {
            id: 2,
            title: "ML Engineer",
            company: "AI Labs",
            location: "Bangalore",
            description: "Build AI models for NLP tasks.",
        },
    ]);

    const handleApply = (job) => {
        // TODO: implement agent automation
        console.log("Applying for job", job)
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom marginTop={2}>
                Matched Jobs
            </Typography>
            {jobs.map(job=><JobCard key={job.id} job={job} onApply={handleApply} />)}
        </Container>
    )
}

export default Dashboard