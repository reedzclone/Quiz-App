import React from "react";
import { Routes, BrowserRouter, Route} from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import { Box, Container, Typography } from "@mui/material";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" mb={3}>Quiz Questions</Typography>
      <Routes>
          <Route path="/" element={<Settings/>} />
              
          <Route path="questions" element={<Questions />} />

          <Route path="score" element={<FinalScreen />} /> 
        </Routes>
        </Box>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
