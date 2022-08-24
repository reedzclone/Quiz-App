import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldCom = () => {

    const handleChange = (e) => {

    }

  return (
    <Box mt={3} width="100%">
        <FormControl size="small">
            <TextField 
                onChange={handleChange}
                variant="outlined"
                label="Amount of Questions"
                type="number"
                size="small"
            />
        </FormControl>
    </Box>
  )
}

export default TextFieldCom