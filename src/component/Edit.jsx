import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState , useEffect } from 'react';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height:250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [dataEdit, setdataEdit] = useState(props.cl);
    const [name, setname] = useState()
    const [description, setdescription] = useState()
    const [date, setdate] = useState()
    const [priority,setPriority] = useState()

    const closeModal = () => {
        props.set(false);
      };
    
      const EditModel = (e) => {
        e.preventDefault();
        const updata = {
          name : name,
        }
        handleEdit(updata);
    
      };
      console.log(name)
    
      const handleEdit = (updatedData) => {
        console.log(updatedData);
      };
      useEffect(() => { 
        setname(props.data[0].name) 
        setdescription(props.data[0].description)
        setdate(props.data[0].date)
        setPriority(props.data[0].priority)
    },[])
    const prority = (key) => {
        if(key === 1) {
          return <Radio checked={true} color="success" size="small" />
        } 
        else if(key === 2) {
          return <Radio checked={true} color="error" size="small" />
        } 
        else if (key === 3) {
          return <Radio checked={true} color="default" size="small" />
        }
      }

// let progress  = { name:name , description:description , date :date};

// const updatedata =  () => {
//   console.log(progress)
//   progress.push(progress)
// }

    return (
        <div>
             {dataEdit && (
            <Modal
                // open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <TextField id="outlined-basic" label="enter name" variant="outlined" />
                    <TextField id="outlined-basic" label="description" variant="outlined" />
                    <TextField id="standard-basic" label="date" variant="standard" /> */}
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
                        value={description}
                        variant="standard"
                        onChange={(e) => setdescription(e.target.value)}

                    />
                    <TextField
                        id="datetime-local"
                        label="Select Date & Time"
                        type="datetime-local"
                        variant="standard"
                        value={date}
                        onChange={(e) => setdate(e.target.value)}

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    
                <FormControl sx={{ m: 1, width: "40%" }}>
                  <InputLabel id="standard-required" variant="standard">
                    Select
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="standard"
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
                        <Button variant="contained" color="info" size='large'onEdit={EditModel} >Edit</Button>
                        <Button variant="contained" color="info" size='large'onClick={closeModal}>cancle</Button>
                    </Stack>
                </Box>
            </Modal>
              )}
        </div>
    );
}