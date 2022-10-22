import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import LetterAvatars from "./Avatar";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function Writing (){
    return(
        <div className="writing-container">
            <div className="writing-bar">
                <Link to='/'>
                    <IconButton>
                        <Clear/> 
                    </IconButton>
                </Link>
                <Button variant="text">Publicar</Button>
            </div>
            <div className="writing-user">
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
                    className='writing-textfield'
                />
            </div>
        </div>
    )
}

export default Writing