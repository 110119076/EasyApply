import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobCard = ({job, onApply}) => {
    return (
        <Card sx={{marginBottom: 2}}>
            <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.company}</Typography>
                <Typography variant="body2">{job.location}</Typography>
                <Typography variant="body2" mt={1}>{job.description}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    onClick={() => onApply(job)}
                    >
                    Apply
                </Button>
            </CardContent>
        </Card>
    )
}

export default JobCard