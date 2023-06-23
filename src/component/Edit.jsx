import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import CancelIcon from '@mui/icons-material/Cancel';


import { alldata } from './Data';

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

  const [data, setData] = useState(alldata)

  const [dataEdit, setdataEdit] = useState(props.call);
  const [name, setname] = useState('')
  const [description, setdescription] = useState()
  const [date, setdate] = useState()
  const [priority, setPriority] = useState()
  const [error, setError] = useState(false);



  const currentDate = new Date();
  const oldDate = new Date(date);
  const timeDiff = oldDate - currentDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  const hoursDiff = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutesDiff = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const atime = hoursDiff + ":" + minutesDiff + ":" + secondsDiff;

  // console.log(props.data.date)
  console.log(props.dataid.currentDate)

  const closeModal = () => {
    props.set(false);
  };


  const edit = (e) => {
    // let data = {name,description,date,priority}
    e.preventDefault();
    if (!name || !description || !date || !priority) {
      setError(true);
    } 
    else {
    props.dataid.name = name
    props.dataid.description = description
    props.dataid.date = date
    props.dataid.sdatetime = daysDiff 
    props.dataid.hoursDiff = atime
    props.dataid.priority = priority
    props.set(false)
  };
  }
  useEffect(() => {
    setname(props.dataid.name)
    setdescription(props.dataid.description)
    setdate(props.dataid.date)
    setPriority(props.dataid.priority)
    // setData(data)
  }, [])
  const viewti = () => {
    let updata = {
      name: name
    }
  }
  useEffect(() => {
    viewti()
}, [])

  return (
    <div>
      <Modal
        open={props.call}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid style={{paddingBottom:1, marginLeft:380, cursor: 'pointer' }}>
        <CancelIcon  onClick={closeModal} />
        </Grid>
          <TextField
            required
            id="title"
            label="Title"
            variant="standard"
            value={name}
            onChange={(e) => setname(e.target.value)}
            error={error && !name}
            helperText={error && !name ? "entername Error" : ""}
          />
          <TextField
            id="standard-multiline-static"
            label="description"
            multiline
            rows={2}
            variant="standard"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            error={error && !description}
            helperText={error && !description ? "enterdescription Error" : ""}
          />
          <TextField
            id="datetime-local"
            label="Select Date & Time"
            type="datetime-local"
            variant="standard"
            onChange={(e) => setdate(e.target.value)}
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
            error={error && !date}
            helperText={error && !date ? "enterdate Error" : ""}
          />
          <FormControl sx={{ m: 1, width: "40%" }}>
            <InputLabel id="standard-required" variant="standard">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="standard"
              value={priority}
              onChange={(e)=>setPriority(e.target.value)}
              error={error && !priority}
              helperText={error && !priority ? "Priority Error" : ""}
            >
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
            <Button variant="contained" color="info" size='large' onClick={edit} >Edit</Button>
            <Button variant="contained" color="info" size='large' onClick={closeModal}>cancle</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}