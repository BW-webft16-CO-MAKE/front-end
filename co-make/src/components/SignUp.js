import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  };
  const [inputValue, setInputValue] = useState(initialFormValues);
  const [user, setUser] = useState([]);
  const history = useHistory();

  const changeInput1 = (evt) => {
    const { value } = evt.target;
    setInputValue({ ...inputValue, first_name: value });
  };
  const changeInput2 = (evt) => {
    const { value } = evt.target;
    setInputValue({ ...inputValue, last_name: value });
  };
  const changeInput3 = (evt) => {
    const { value } = evt.target;
    setInputValue({ ...inputValue, email: value });
  };
  const changeInput4 = (evt) => {
    const { value } = evt.target;
    setInputValue({ ...inputValue, password: value });
  };
  const changeInput5 = (evt) => {
    const { value } = evt.target;
    setInputValue({ ...inputValue, username: value });
  };

  const postNewUser = (newUser) => {
    axios
      .post(
        "https://co-make-backend-tt16.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        console.log(res);
        console.log(newUser);
        // console.log(setUser([...user, newUser]))
        setUser([...user, newUser]);
        setInputValue(initialFormValues);
        console.log(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/signin");
  };

  const userSubmit = () => {
    const newUser = {
      first_name: inputValue.first_name.trim(),
      last_name: inputValue.last_name.trim(),
      email: inputValue.email.trim(),
      username: inputValue.username.trim(),
      password: inputValue.password.trim(),
    };

    postNewUser(newUser);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    userSubmit();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3> Sign Up</h3>
      <div className="formContent">
        <label>{/* First Name */}</label>
        <TextField
          className="textfield"
          defaultValue="Normal"
          size="normal"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          size="large"
          name="first_name"
          type="text"
          className="formInput"
          onChange={changeInput1}
          value={inputValue.first_name}
          placeholder="First name"
          required
        />
        <label>{/* Last Name */}</label>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="last_name"
          type="text"
          className="formInput"
          onChange={changeInput2}
          value={inputValue.last_name}
          placeholder="Last name"
        />
      </div>
      <div className="formContent">
        <label>{/* Email */}</label>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="text"
          className="formInput"
          onChange={changeInput3}
          value={inputValue.email}
          placeholder="Email"
        />
      </div>
      <div className="formContent">
        <label>{/* Username */}</label>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          type="text"
          className="formInput"
          onChange={changeInput5}
          value={inputValue.username}
          placeholder="Username"
        />
      </div>
      <div className="formContent">
        <label>{/* Password */}</label>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="text"
          className="formInput"
          onChange={changeInput4}
          value={inputValue.password}
          placeholder="Password"
        />
      </div>
      <div className="submit">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          size="large"
          onClick={userSubmit}
        >
          Sign Up
        </Button>
        <p className="forgot-password">
          Already Registered{" "}
          <Link style={{ textDecoration: "none" }} to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};
export default SignUp;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axiosWithAuth from "../utils/axiosWithAuth";

// const SignUp = () => {

//     const initialFormValues =
//     {
//         first_name: "",
//         last_name: "",
//         email: "",
//         username: "",
//         password: ""
//     }
//     const [inputValue, setInputValue] = useState(initialFormValues)
//     const [user, setUser] = useState([])

//     const changeInput1 = evt => {
//         const { value } = evt.target;
//         setInputValue({ ...inputValue, first_name: value })

//     };
//     const changeInput2 = evt => {
//         const { value } = evt.target;
//         setInputValue({ ...inputValue, last_name: value })

//     };
//     const changeInput3 = evt => {
//         const { value } = evt.target;
//         setInputValue({ ...inputValue, email: value })

//     };
//     const changeInput4 = evt => {
//         const { value } = evt.target;
//         setInputValue({ ...inputValue, password: value })

//     };
//     const changeInput5 = evt => {
//         const { value } = evt.target;
//         setInputValue({ ...inputValue, username: value })

//     };

//     const postNewUser = newUser => {
//         axiosWithAuth.post('api/auth/register', newUser)
//             .then(res => {
//                 console.log(res.data)
//                 setUser([...user, newUser])
//                 setInputValue(initialFormValues)
//                 console.log(newUser)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     const userSubmit = () => {
//         const newUser = {
//             first_name: inputValue.first_name.trim(),
//             last_name: inputValue.last_name.trim(),
//             email: inputValue.email.trim(),
//             username: inputValue.username.trim(),
//             password: inputValue.password.trim()
//         }

//         postNewUser(newUser)
//     }

//     const onSubmit = evt => {
//         evt.preventDefault();
//         userSubmit()
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <h3> Sign Up</h3>
//             <div className="formContent">
//                 <label>First name</label>
//                 <input name="first_name" type="text" className="formInput" onChange={changeInput1} value={inputValue.first_name} placeholder="First name" required />
//             </div>
//             <div className="formContent">
//                 <label>Last name</label>
//                 <input name="last_name" type="text" className="formInput" onChange={changeInput2} value={inputValue.last_name} placeholder="Last name" />
//             </div>
//             <div className="formContent">
//                 <label>Email</label>
//                 <input name="email" type="text" className="formInput" onChange={changeInput3} value={inputValue.email} placeholder="Email" />
//             </div>
//             <div className="formContent">
//                 <label>Username</label>
//                 <input name="username" type="text" className="formInput" onChange={changeInput5} value={inputValue.username} placeholder="Username" />
//             </div>
//             <div className="formContent">
//                 <label>Password</label>
//                 <input name="password" type="text" className="formInput" onChange={changeInput4} value={inputValue.password} placeholder="Password" />
//             </div>
//             <div className="submit">
//                 <button type="submit" onClick={userSubmit}>Sign Up</button>
//                 <p className="forgot-password">Already Registered
//                     <li><Link to='/signin'>sign in?</Link></li>
//                 </p>
//             </div>
//         </form>
//     )
// }
// export default SignUp
