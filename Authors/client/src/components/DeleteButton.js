import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
    
export default props => {
    
    const { authorId, successCallback } = props;
    const history = useHistory()
    
    const deleteAuthor = e => {
        console.log("delete button clicked")
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();

                

            })
        history.push('/')    
    }
    
    return (
        <Button variant="contained" onClick={deleteAuthor} color="secondary">
            Delete
        </Button>
    )
}

