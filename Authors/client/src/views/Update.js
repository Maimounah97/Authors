import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material"
import AuthorForm from '../components/AuthorForm';

// import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState({});

    const history = useHistory()
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log("from update")
                console.log(res.data)
                setAuthor(res.data);
                // setData(res.data);
                setLoading(false);
                setLoaded(true);
            })
            .catch(err => {
                setLoading(false);

                console.log("We have an error");

            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
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

    if (isLoading) {
        return <div>...Loading</div>;
    }
    // if (!loaded) {
    //    return (<div style={{ paddingTop: '70px' }}>
    //         <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
    //         <Link to={"/new"}>Click here to add a new author</Link>
    //     </div>)
    // }
    return (
        <div>
            <p><Link to={"/"}>Home</Link></p>
            <Paper>
                <div style={{ width: '700px', height: '300px' }}>


                    {loaded && (
                        (author == null || author.name == "CastError") ?
                            <div style={{ paddingTop: '70px' }}>
                                <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                                <Link to={"/new"}>Click here to add a new author</Link>
                            </div>
                            :
                            <div>
                                <h3 style={{ marginBottom: '50px' }}>Edit this Author:</h3>
                                {/* {author.name} */}
                                {errors.map((err, index) => <p key={index}>{err}</p>)}


                                <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
                            </div>


                    )}






                </div>
            </Paper>
        </div>

    )
}


export default Update;

