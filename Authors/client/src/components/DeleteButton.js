import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
    
export default props => {
    
    const { authorId, successCallback } = props;
    
    const deleteAuthor = e => {
        console.log("delete button clicked")
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <Button variant="contained" onClick={deleteAuthor} color="secondary">
            Delete
        </Button>
    )
}

