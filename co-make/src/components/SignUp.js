import React, { useState } from 'react';
// import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import axios from "axios";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const SignUp = () => {

    const initialFormValues =
    {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const [inputValue, setInputValue] = useState(initialFormValues)
    const [user, setUser] = useState([])

    const changeInput1 = evt => {
        const { value } = evt.target;
        console.log(value)
        setInputValue({ ...inputValue, firstName: value })
        console.log(inputValue)

    };
    const changeInput2 = evt => {
        const { value } = evt.target;
        console.log(value)
        setInputValue({ ...inputValue, lastName: value })
        console.log(inputValue)

    };
    const changeInput3 = evt => {
        const { value } = evt.target;
        console.log(value)
        setInputValue({ ...inputValue, email: value })
        console.log(inputValue)

    };
    const changeInput4 = evt => {
        const { value } = evt.target;
        console.log(value)
        setInputValue({ ...inputValue, password: value })
        console.log(inputValue)

    };


    const postNewUser = user => {
        axios.post('https://co-make-backend-tt16.herokuapp.com/auth/register', user)
            .then(res => {
                console.log(res)
                setUser([...user, setUser])
                setInputValue(initialFormValues)
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const userSubmit = () => {
        const newUser = {
            firstName: inputValue.firstName.trim(),
            lastName: inputValue.lastName.trim(),
            email: inputValue.email.trim(),
            password: inputValue.password.trim()
        }

        postNewUser(newUser)
    }

    // const reset = () => {
    //     setInputValue('')
    // }

    const onSubmit = evt => {
        evt.preventDefault();
        userSubmit()
    }


    return (
        <form onSubmit={onSubmit}>
            <h3> Sign Up</h3>
            <div className="formContent">
                <label>First name</label>
                <input name="firstName" type="text" className="formInput" onChange={changeInput1} value={inputValue.firstName} placeholder="First name" required />
            </div>
            <div className="formContent">
                <label>Last name</label>
                <input name="lastName" type="text" className="formInput" onChange={changeInput2} value={inputValue.lastName} placeholder="Last name" />
            </div>
            <div className="formContent">
                <label>Email</label>
                <input name="email" type="text" className="formInput" onChange={changeInput3} value={inputValue.email} placeholder="Email" />
            </div>
            <div className="formContent">
                <label>Password</label>
                <input name="password" type="text" className="formInput" onChange={changeInput4} value={inputValue.password} placeholder="Password" />
            </div>
            <div className="submit">
                <button type="submit" onClick={userSubmit}>Sign Up</button>
                <p className="forgot-password">Already Registered
                    <li><Link to='/signin'>sign in?</Link></li>
                </p>
            </div>
        </form>
    )
}
export default SignUp
