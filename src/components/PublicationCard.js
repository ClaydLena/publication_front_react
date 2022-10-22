import React from "react";
import { IconButton } from "@mui/material";
import {Tooltip} from "@mui/material";
import { Favorite } from "@mui/icons-material";

function Publication({autor, title, content, likes}) {
  return (
    <div className="pub-publicacao">
        <div className="pub-username">
            {autor} - {title}
        </div>
        <div className="pub-content">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        <div className="pub-tooltip">
            <Tooltip title="Like">
                <IconButton>
                    <Favorite/>
                </IconButton>
            </Tooltip>
            <p>12.04.2022</p>
        </div>
    </div>
  );
}

export default Publication;
