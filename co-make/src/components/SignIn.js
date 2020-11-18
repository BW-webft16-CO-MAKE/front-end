import React, { useState } from 'react';
// import axios from "axios";

const SignIn = () => {

    const initialFormValues =
    {
        username: "",
        password: "",
    }
    const [inputValue, setInputValue] = useState(initialFormValues)
    // const [user, setUser] = useState([])

    const changeInput1 = evt => {
        const { value } = evt.target;
        setInputValue({ ...inputValue, username: value })

    };
    const changeInput2 = evt => {
        const { value } = evt.target;
        setInputValue({ ...inputValue, password: value })

    };

    // const getUser = user => {
    //     axios.get('https://co-make-backend-tt16.herokuapp.com/auth/user/' + id)
    //         .then(res => {
    //             console.log(res)
    //             setUser([...user, setUser])
    //             setInputValue(initialFormValues)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    const userSignIn = () => {
        const userSignIn = {
            username: inputValue.username.trim(),
            password: inputValue.password.trim(),
        }
        console.log(userSignIn)
        // getUser(userSignIn)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        userSignIn()
    }


    return (
        <form onSubmit={onSubmit}>
            <h3> Login</h3>
            <div className="formContent">
                <label>username</label>
                <input name="username" type="text" className="formInput" onChange={changeInput1} value={inputValue.username} placeholder="username" required />
            </div>
            <div className="formContent">
                <label>password</label>
                <input name="password" type="text" className="formInput" onChange={changeInput2} value={inputValue.password} placeholder="password" required />
            </div>

            <div className="submit">
                <button type="submit" onClick={userSignIn}>Sign In</button>
            </div>
        </form>
    )
}
export default SignIn