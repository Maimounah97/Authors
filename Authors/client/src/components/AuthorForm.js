import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Paper, FormControl, Button, TextField} from "@mui/material"
import { useHistory, useParams } from "react-router-dom";
export default props => {

    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const history=useHistory()

    useEffect(() => {
        console.log("test from form component")
        console.log(initialName)
        // console.log(errors)

    }, [])
    const onSubmitHandler = e => {
        console.log("button clicked")
        e.preventDefault();
        onSubmitProp({name});
        // history.push("/")
    }
        
    return (
        
        <FormControl  >
            <TextField id="outlined-basic" value={name}  label="name" variant="outlined" onChange={(e) => { setName(e.target.value) }}></TextField>
            <Button onClick={onSubmitHandler} variant="contained" type="submit" style={{margin:'5px'}}>Submit</Button>
            <Button variant="contained" onClick={()=>history.push("/")} style={{margin:'5px'}}>Cancel</Button>
            
        </FormControl>
        
    )
}

