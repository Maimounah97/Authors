import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import DeleteButton from './DeleteButton';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    // const { authors, removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log("authors from api")
                console.log(res.data.authors)
                setAuthors(res.data.authors)});
    }, [])
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }
    return (
        <div>
            <h2>All Authors:</h2>
            {props.authors.map((author, i) =>
                <div key={i}> <Link to={"/author/" + author._id + "/edit"}>
                    {author.name}
                </Link>
                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                </div>


            )}
        </div>
    )
}

export default AuthorList;