import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
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

    // create fun object 
    const add = (data) => {
        console.log(data)

        setdata(old => [...old, data])
    }

    const addp = (data) => {
        console.log(data)

        setprogress(old => [...old, data])
    }

    //array update 
    const [data, setdata] = React.useState(alldata)
    const [progress, setprogress] = React.useState(progressdata)
    const [done, setdone] = React.useState(donedata)


    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [priority, setPriority] = useState('')

    const [dataEdit, setDataEdit] = useState(false);
    const [dataid,setDataid] = useState()

    const recodEdit = (id) => {
        setDataEdit(!dataEdit);
        setDataid(id);

    };


    const progresMoving = (item) => {
        setprogress((prevRows) => [...prevRows, item]);
        setdata((preData) => preData.filter((date) => date.name !== item.name))
        console.log(item)
    }

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
                            data.map((item) => {
                                return (

                                    <Card sx={{ maxWidth: 450, marginTop: "50px" }}>
                                        <p style={{ fontSize: "17px" }}>
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
                                            <Typography variant="body2" paddingLeft={30}>
                                                <h4>  {item.date}</h4>
                                            </Typography>
                                        </CardContent>
                                        <CardActions direction="row" spacing={2} style={{ marginLeft: "25%" }}>
                                            <Button variant="contained" color='primary' type='button' onClick={() => progresMoving(item)}>in progress</Button>
                                            <Button variant="contained" color="error" type='button' onClick={() => recodEdit(item)}>Edit</Button>
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
                                                <Typography sx={{ mb: 1.6 }} color="text.secondary">
                                                    <h3> {item.description}</h3>
                                                </Typography>
                                                <Typography variant="body2" paddingLeft={30} >
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
            {dataEdit && <Edit data={data} call={dataEdit} dataid={dataid} set={setDataEdit} name={name} description={description} date={date} priority={priority} recodEdit={recodEdit} />}

        </div>
    )
}

export default Task
