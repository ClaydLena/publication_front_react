import React from "react";
import object from '../utils/posts.json' 
import Publication from "./PublicationCard";




function List (){
    const publications = object.map((object) =>{
        return <Publication 
                  autor = {object.autor}
                  title = {object.title}
                  content = {object.content}
                  likes = {object.likes}
               />
    })


    return(
        <div >
            {publications}
        </div>
    )
}

export default List