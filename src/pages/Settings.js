import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldCom from '../components/TextFieldCom';
import useAxios from '../hooks/useAxios';

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error) {
    return (
      <Typography variant="h5" mt={20} color="red">Something Went Wrong!</Typography>
    )
  }


  const difficultyOptions =  [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ]

  const typeOptions = [
    { id:"multiple", name: "Multiple" },
    { id:"boolean", name: "true/false" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}> 
      <SelectField options={response.trivia_categories} label="Category"/>
      <SelectField options={difficultyOptions} label="Difficulty"/>
      <SelectField options={typeOptions} label="Type"/>
      <TextFieldCom />
      <Box mt={3} width="100%">
        <Button  variant="contained" color="secondary" type="submit">Get Started</Button>
      </Box>
    </form>
  )
}

export default Settings;