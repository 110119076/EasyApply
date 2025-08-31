import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { AppBar, Toolbar, Button, Typography} from "@mui/material";
import UploadPage from "./pages/UploadPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            EasyApply
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Upload Resume
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App