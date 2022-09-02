import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Paper } from "@mui/material"
import AuthorForm from '../components/AuthorForm';

import { Link } from "react-router-dom";
// import DeleteButton from '../components/DeleteButton';

const  AddAuthor = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const history=useHistory()

    useEffect(() => {
        console.log("from Add component")
        

    }, [])
    
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                console.log("data from create api")
                console.log(res.data)
                setAuthors([...authors, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    //In our return


    return (
        <div>
            <p><Link to={"/"}>Home</Link></p>
        <Paper>
        <div style={{width:'700px', height:'300px'}}>
            <h3 style={{marginBottom:'100px'}}>Add a new Author:</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
           
                <AuthorForm onSubmitProp={createAuthor} initialName=""/>
                
           
        </div>
        </Paper>
        </div>
    )
}

export default AddAuthor;