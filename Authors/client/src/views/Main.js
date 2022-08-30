import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorsList';
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{ 
                console.log(res.data.authors)
                setAuthors(res.data.authors)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
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
    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
           <AuthorForm onSubmitProp={createAuthor} initialName=""/>
           <hr/>
           {loaded && <AuthorList authors={authors}/>}
        </div>
    )
}

