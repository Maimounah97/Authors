import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorsList';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
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
    
    return (
        <div>
           
           <Link to={"/new"}>
                    Add an Author
                </Link>
           <hr/>
           {loaded && <AuthorList authors={authors}/>}
        </div>
    )
}

