import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";

import Grid from "@mui/material/Grid";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton, { FontAwesomeIcon } from "@mui/material/IconButton";
import { useState } from 'react';
import Modal from './Model';
import Modelpro from './Modelpro';
import Edit from './Edit';

// object import

import { alldata } from './Data'
import { progressdata } from './Data';
import { donedata } from './Data';

function Task() {

    // open click  model
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
    const [inproModal, setinproModal] = useState(false);
    const modelpo = () => {
        setinproModal(!inproModal);
    };
    const add = (data) => {
        console.log(data)
        let record = {
            name: data.name,
            description: data.description,
            date: data.date,
        }
        setdata(old => [...old, data])
    }
    const addp = (data) => {
        console.log(data)
        let record = {
            name: data.name,
            description: data.description,
            date: data.date,
        }
        setprogress(old => [...old, data])
    }
    //model
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    //array update 
    const [data, setdata] = React.useState(alldata)
    const [progress, setprogress] = React.useState(progressdata)
    const [done, setdone] = React.useState(donedata)

    const [dataEdit, setDataEdit] = useState(false);
    const recodEdit = () => {
        setDataEdit(!dataEdit);
    };

    const progresMoving = (item) => {
        setprogress((prevRows) => [...prevRows, item]);
        setdata((preData) => preData.filter((date) => date.name !== item.name))

        console.log(item)
    }
    console.log(progress)
    const backlogmoving = (item) => {
        setdata((prevRows) => [...prevRows, item]);
        setprogress((preData) => preData.filter((date) => date.name !== item.name))
    }
    const doneMoving = (item) => {
        setdone((prevRows) => [...prevRows, item]);
        setprogress((preData) => preData.filter((date) => date.name !== item.name))
    }
    const prority = (key) => {
        if (key === 1) {
            return <Radio checked={true} color="success" size="small" />
        }
        else if (key === 2) {
            return <Radio checked={true} color="error" size="small" />
        }
        else if (key === 3) {
            return <Radio checked={true} color="default" size="small" />
        }
    }

    return (
        <div className=''>
            <header style={{ height: "50px", color: "lightblue" }}>
                <h1>Task Manager</h1>
            </header>
            <Box sx={{ flexGrow: 1, flexDirection: 'row' }}>
                <Grid container spacing={8}>
                    <Grid item xs={4}>

                        <h3>Backlog</h3>
                        {
                            data.map((item) => {  // data add array map 
                                return (
                                    // <Cards name={item.name} 
                                    //        description={item.description} 
                                    //        date={item.date} 
                                    //        button={item.button} 
                                    //        open={handleClickOpene} 
                                    //        progresMoving={progresMoving}/>
                                    <Card sx={{ maxWidth: 450, marginTop: "50px" }}>
                                        <p style={{ fontSize: "17px" }}>
                                            {item.title}
                                            <span style={{ float: "right" }}>
                                                {prority(item.priority)}
                                            </span>
                                        </p>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                <h2>  {item.name}</h2>
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                                                <h3>{item.description}</h3>
                                            </Typography>
                                            <Typography variant="body2" paddingLeft={35}>
                                                <h4>  {item.date}</h4>
                                            </Typography>
                                        </CardContent>
                                        <CardActions direction="row" spacing={2} style={{ marginLeft: "25%" }}>
                                            <Button variant="contained" color='primary' type='button' onClick={() => progresMoving(item)}>in progress</Button>
                                            <Button variant="contained" color="error" type='button' onClick={recodEdit} >Edit</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                        <IconButton style={{ marginRight: "10%" }}>
                            <AddCircleIcon fontSize="large" onClick={openModal} />
                        </IconButton>
                    </Grid>

                    <Grid item xs={4}>
                        <h3>InProgress</h3>
                        {
                            progress.map((item) => {
                                return (
                                    <>
                                        <Card sx={{ maxWidth: 450, marginTop: "50px" }}>
                                        <p style={{ fontSize: "17px" }}>
                                            {item.title}
                                            <span style={{ float: "right" }}>
                                                {prority(item.priority)}
                                            </span>
                                        </p>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    <h2> {item.name}</h2>
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    <h3> {item.description}</h3>
                                                </Typography>
                                                <Typography variant="body2" paddingLeft={35} >
                                                    <h3>{item.date}</h3>
                                                </Typography>
                                            </CardContent>
                                            <CardActions direction="row" spacing={2} style={{ marginLeft: "15%" }}>
                                                <Button variant="contained" color="error" onClick={() => backlogmoving(item)}>Backlog</Button>
                                                <Button variant="contained" color="error" onClick={() => doneMoving(item)}>Done</Button>
                                                <Button variant="contained" color="error" >Edit</Button>
                                            </CardActions>
                                        </Card>
                                    </>
                                )
                            })
                        }
                        <IconButton style={{ marginRight: "10%" }}>
                            <AddCircleIcon fontSize="large" onClick={modelpo} />
                        </IconButton>
                    </Grid>

                    <Grid item xs={4}>
                        <h3>Done</h3>
                        {
                            done.map((item) => {
                                return (
                                    <>
                                        <Card sx={{ maxWidth: 450, marginTop: "50px", maxHeight: 500 }}>
                                        <p style={{ fontSize: "17px" }}>
                                            {item.title}
                                            <span style={{ float: "right" }}>
                                                {prority(item.priority)}
                                            </span>
                                        </p>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {item.name}
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                                <Typography variant="body2" paddingLeft={35}>
                                                    <b>{item.date}</b>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Box>
            {showModal && <Modal add={add} call={showModal} set={setShowModal} />}
            {inproModal && <Modelpro addp={addp} call={inproModal} set={setinproModal} />}
            {dataEdit && <Edit data={data} cl={dataEdit} set={setDataEdit} />}

            {/* <Forme open={opene} close={handleClosee} /> */}
        </div>
    )
}

export default Task
