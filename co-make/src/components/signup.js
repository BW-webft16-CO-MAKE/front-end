import React from 'react';
// import SignIn from './SignIn';
// import { Link } from 'react-router-dom';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

// const SignUp = () => {
//     // const { change, submit } = props;

//     // const onChange = evt => {
//     //     const { formInput } = evt.target
//     //     change(formInput)
//     // }
//     // const onSubmit = evt => {
//     //     evt.preventDefault();
//     //     submit()
//     // }
//     return (
//         // <form onSubmit={onSubmit}>
//         <form>
//             <h3> Sign Up</h3>
//             <div className="formContent">
//                 <label>First name</label>
//                 <input type="text" className="formInput" onChange={onChange} placeholder="First name" />
//             </div>
//             <div className="formContent">
//                 <label>Last name</label>
//                 <input type="text" className="formInput" onChange={onChange} placeholder="Last name" />
//             </div>
//             <div className="formContent">
//                 <label>Email</label>
//                 <input type="text" className="formInput" onChange={onChange} placeholder="Email" />
//             </div>
//             <div className="formContent">
//                 <label>Password</label>
//                 <input type="text" className="formInput" onChange={onChange} placeholder="Password" />
//             </div>
//             <div className="submit">
//                 <button type="submit" onClick="/">Sign Up</button>
//                 <p className="forgot-password">Already Registered
//                     <li><Link to='/signin'>sign in?</Link></li>
//                 </p>
//             </div>
//         </form>
//     )
// }
// export default SignUp

const SignUp = () => {
    // const { change, submit } = props;

    // const onChange = evt => {
    //     const { formInput } = evt.target
    //     change(formInput)
    // }
    // const onSubmit = evt => {
    //     evt.preventDefault();
    //     submit()
    // }
    return (
        // <form onSubmit={onSubmit}>
        <form>
            <h3> Sign Up</h3>
            <div className="formContent">
                <label>First name</label>
                <input type="text" className="formInput" placeholder="First name" />
            </div>
            <div className="formContent">
                <label>Last name</label>
                <input type="text" className="formInput" placeholder="Last name" />
            </div>
            <div className="formContent">
                <label>Email</label>
                <input type="text" className="formInput" placeholder="Email" />
            </div>
            <div className="formContent">
                <label>Password</label>
                <input type="text" className="formInput" placeholder="Password" />
            </div>
            <div className="submit">
                <button type="submit" onClick="/">Sign Up</button>
                <p className="forgot-password">Already Registered
                    {/* <li><Link to='/signin'>sign in?</Link></li> */}
                </p>
            </div>
        </form>
    )
}
export default SignUp