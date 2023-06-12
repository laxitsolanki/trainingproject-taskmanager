import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState } from 'react';


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";

import { progressdata } from './Data';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
const [progress, setprogress] = useState(props.call);
  const [name, setname] = useState()
  const [description, setdescripton] = useState()
  const [date, setdate] = useState()
  const [priority, setpriority] = useState()
  
  const closemodel = () => {
    props.set(false);
  };
  const savemodel = (e) => {
    e.preventDefault();
    
  //object creacte
  let data = {
    name: name,
    description: description,
    date: date,
    priority: priority
  }
  setname('');
  props.addp(data)
};

return (
  <div>
    <Modal
      open={props.call}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>in progress model</h1>
       
        <TextField
          required
          id="title"
          label="Title"
          variant="standard"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <TextField
          id="standard-multiline-static"
          label="description"
          multiline
          rows={2}
          variant="standard"
          onChange={(e) => setdescripton(e.target.value)}
        />
        <TextField
          id="datetime-local"
          label="Select Date & Time"
          type="datetime-local"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setdate(e.target.value)}
        />


        <FormControl sx={{ m: 1, width: "40%" }}>
          <InputLabel id="standard-required" variant="standard">
            Select
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            value={priority} onChange={(e)=>setpriority(e.target.value)}          >
            <MenuItem value={1}>
              <Radio checked={true} color="success" size="small" />
            </MenuItem>
            <MenuItem value={2}>
              <Radio checked={true} color="error" size="small" />
            </MenuItem>
            <MenuItem value={3}>
              <Radio checked={true} color="default" size="small" />
            </MenuItem>
          </Select>
        </FormControl>
        <Stack spacing={1} direction="row" paddingRight={3} marginLeft={15} marginTop={2}>
          <Button variant="contained" color="info" size='large' onClick={savemodel} >Save</Button>
          <Button variant="contained" color="info" size='large' onClick={closemodel}>cencel</Button>
        </Stack>
      </Box>
    </Modal>
  </div>
);
}