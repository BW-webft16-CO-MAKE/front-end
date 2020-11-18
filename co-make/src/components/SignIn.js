import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';


const SignIn = () => {

    const initialFormValues =
    {
        username: "",
        password: "",
    }
    const [inputValue, setInputValue] = useState(initialFormValues)
    const [user, setUser] = useState([])

    const changeInput1 = evt => {
        const { value } = evt.target;
        setInputValue({ ...inputValue, username: value })

    };
    const changeInput2 = evt => {
        const { value } = evt.target;
        setInputValue({ ...inputValue, password: value })

    };

    // const getNewUser = newUser => {
    //     axios.get('https://co-make-backend-tt16.herokuapp.com/api/auth/register', newUser)
    //         .then(res => {
    //             console.log(res.data)
    //             setUser([...user, newUser])
    //             setInputValue(initialFormValues)
    //             console.log(newUser)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    const getNewUser = useEffect(() => {
        fetch('https://co-make-backend-tt16.herokuapp.com/api/auth/login')
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }, [])

    const userSignIn = () => {
        const userSignIn = {
            username: inputValue.username.trim(),
            password: inputValue.password.trim(),
        }
        getNewUser(userSignIn)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        userSignIn()
    }


    return (
        <form className='formTwo' onSubmit={onSubmit}>
            <h3> Login</h3>
            <div className="formContent">
                <label>{/* Username */}</label>
                <TextField id="outlined-basic" label="Password" variant="outlined" name="username" type="text" className="formInput" onChange={changeInput1} value={inputValue.username} placeholder="username" required />
            </div>
            <div className="formContent">
                <label>{/* Password */}</label>
                <TextField id="outlined-basic" label="Password" variant="outlined"  name="password" type="text" className="formInput" onChange={changeInput2} value={inputValue.password} placeholder="password" required />
            </div>

            <div className="submit">
                <Button variant="contained" color="secondary" type="submit" size="large" type="submit" onClick={userSignIn}>Sign In</Button>
            </div>
        </form>
    )
}
export default SignIn