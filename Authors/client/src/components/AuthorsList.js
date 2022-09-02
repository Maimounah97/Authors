import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@mui/material"
import DeleteButton from './DeleteButton';

import { Link } from "react-router-dom";
const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const history=useHistory();
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
        <div style={{width:'500px'}}>
            <h5>We have quotes by:</h5>
            <table style={{marginTop:'50px'}} className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {props.authors.map((author, i) =>

                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <Button variant="contained" onClick={()=>history.push("/author/"+author._id+"/edit")} style={{margin:'5px'}}>Edit</Button>
                                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                        </tr>


                    )}
                </tbody>
            </table>

            {/* {props.authors.map((author, i) =>
                <div key={i}> <Link to={"/author/" + author._id + "/edit"}>
                    {author.name}
                </Link>
                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                </div>


            )} */}
        </div>
    )
}

export default AuthorList;