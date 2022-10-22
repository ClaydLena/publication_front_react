import React from "react";
import './Publicacao.css'
import { IconButton } from "@mui/material";
import {Tooltip} from "@mui/material";
import { Favorite } from "@mui/icons-material";

function Publicacao() {
  return (
    <div className="publicacao">
        <div className="username">
            John
        </div>
        <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero risus, ultricies et pretium vel, vehicula id erat. Quisque consequat faucibus mollis. Cras sed elit a urna finibus rutrum maximus mollis nibh. Maecenas hendrerit leo eget magna mattis mattis. In non dolor nisi. Duis eget feugiat nulla, 
            a tincidunt nisl. Nullam venenatis a ipsum sit amet maximus
        </div>
        <div className="tooltip">
            <Tooltip title="Delete">
                <IconButton>
                    <Favorite/>
                </IconButton>
            </Tooltip>
            <p>12.04.2022</p>
        </div>
    </div>
  );
}

export default Publicacao;
