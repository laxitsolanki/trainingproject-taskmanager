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
    const [dataEdit, setdataEdit] = useState(props.call);
    const [name, setname] = useState('')
    const [description, setdescription] = useState()
    const [date, setdate] = useState()
    const [priority,setPriority] = useState()

    const closeModal = () => {
        props.set(false);
      };
    
      const EditModel = (e) => {
        e.preventDefault();
        
        
        
      };
      // const handleEdit = (updatedData) => {
      //   console.log(updatedData);
      // };
      useEffect(() => { 
        setname(props.name)
        setdescription(props.description)
        setdate(props.date)
        setPriority(props.priority)
    },[props])
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
    return (
        <div>
            <Modal
                open={props.call}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}

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
        </div>
    );
}