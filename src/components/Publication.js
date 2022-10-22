import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import LetterAvatars from "./Avatar";
import Button from '@mui/material/Button';
import './Publication.css';
import TextField from '@mui/material/TextField';


function Publication (){
    return(
        <div className="container">
            <div className="bar">
                <IconButton>
                    <Clear/> 
                </IconButton>
                <Button variant="text">Publicar</Button>
            </div>
            <div className="user">
                <LetterAvatars/>
                <h4>Username</h4>
            </div>
            <div>
                <TextField
                    label="No que estas a pensar?"
                    multiline
                    placeholder="Publique suas ideias"
                    variant="standard"
                    style={{ width: 400, boxShadow:'none', border:'none' }}
                    minRows={3}
                    maxRows={25}
                    className='textfield'
                />
            </div>
        </div>
    )
}

export default Publication