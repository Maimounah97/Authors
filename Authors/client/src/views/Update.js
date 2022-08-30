import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const history=useHistory()
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log("from update")
                console.log(res.data)
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => console.log(res));
    }

    //In our return


    return (
        <div>
            <h1>Update an Author</h1>
            {loaded && (
                <div>
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFirstName={author.name}
                />
                <DeleteButton authorId={author._id} successCallback={() => history.push("/authors")} />
                </div>
            )}
        </div>
    )
}

export default Update;