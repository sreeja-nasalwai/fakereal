// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUpComponent = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [username, setUsername] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [passwordStrength, setPasswordStrength] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate email
//         if (!email.endsWith("@gmail.com")) {
//             toast.error('Email must be a @gmail.com address');
//             return;
//         }

//         // Validate mobile number
//         if (mobileNumber.length !== 10) {
//             toast.error('Mobile number must be exactly 10 digits');
//             return;
//         }

//         // Validate password
//         const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//         if (!passwordRegex.test(password)) {
//             toast.error('Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 special character, and 1 digit');
//             return;
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             toast.error('Passwords do not match');
//             return;
//         }

//         // Simulate successful signup
//         toast.success('Signed up successfully');
//         navigate('/login');
//     };

//     const handleMobileNumberChange = (e) => {
//         const value = e.target.value;
//         if (/^\d{0,10}$/.test(value)) {
//             setMobileNumber(value);
//         }
//     };

//     const handlePasswordChange = (e) => {
//         const value = e.target.value;
//         setPassword(value);
//         checkPasswordStrength(value, username);
//     };

//     const handleConfirmPasswordChange = (e) => {
//         const value = e.target.value;
//         setConfirmPassword(value);
//     };

//     const handleUsernameChange = (e) => {
//         const value = e.target.value;
//         setUsername(value);
//         const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;

//         if (!usernameRegex.test(value)) {
//             toast.error('Username must start with a letter and contain only letters and digits');
//         }
//         checkPasswordStrength(password, value);
//     };

//     const checkPasswordStrength = (password, username) => {
//         const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//         if (strongPasswordRegex.test(password)) {
//             if (isPasswordSimilarToUsername(password, username)) {
//                 setPasswordStrength('weak');
//             } else {
//                 setPasswordStrength('strong');
//             }
//         } else if (password.length >= 8) {
//             setPasswordStrength('weak');
//         } else {
//             setPasswordStrength('not valid');
//         }
//     };

//     const isPasswordSimilarToUsername = (password, username) => {
//         if (!username) return false;
//         const usernameLower = username.toLowerCase();
//         const passwordLower = password.toLowerCase();
//         return passwordLower.includes(usernameLower) || usernameLower.includes(passwordLower);
//     };

//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card mt-5">
//                         <div className="card-body">
//                             <h1 className="text-center mb-4">Sign Up</h1>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-floating mb-3">
//                                     <input type="email" id="email" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
//                                     <label htmlFor="email">Email</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input type="password" id="pass" className="form-control" placeholder="Enter your password" required onChange={handlePasswordChange} />
//                                     {password && (
//                                         <div className={`mt-2 ${passwordStrength === 'strong' ? 'text-success' : 'text-danger'}`}>
//                                             Password is {passwordStrength}
//                                         </div>
//                                     )}
//                                     <label>Password</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input type="password" id="confirmPass" className="form-control" placeholder="Re-enter your password" required onChange={handleConfirmPasswordChange} />
//                                     <label>Confirm Password</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input type="text" id="username" className="form-control" placeholder="Enter your username" required onChange={handleUsernameChange} />
//                                     <label htmlFor='username'>Username</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input type="text" id="mobileNumber" className="form-control" placeholder="Enter your phone number" required onChange={handleMobileNumberChange} value={mobileNumber} />
//                                     <label>Phone</label>
//                                 </div>
//                                 {/* <div className="mb-3 form-check">
//                                     <input type="checkbox" className="form-check-input" id="agreeCheckbox" required />
//                                     <label className="form-check-label" htmlFor="agreeCheckbox">
//                                         By continuing, I agree to the <Link to="/term">Terms And Conditions</Link> of 
//                                     </label>
//                                 </div> */}
//                                 <div className="d-grid">
//                                     <button type="submit" className="btn btn-dark btn-lg">Sign Up</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUpComponent;
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import MUI Icons
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

const SignUpComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mobile Number:", mobileNumber);  // For debugging
    
        if (!email.endsWith("@gmail.com")) {
            toast.error('Email must be a @gmail.com address');
            return;
        }
    
        if (mobileNumber.length !== 10) {
            toast.error('Mobile number must be exactly 10 digits');
            return;
        }
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 special character, and 1 digit');
            return;
        }
    
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
    
        toast.success('Signed up successfully');
        navigate('/login');
    };
    

    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        checkPasswordStrength(value, username);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;

        if (!usernameRegex.test(value)) {
            toast.error('Username must start with a letter and contain only letters and digits');
        }
        checkPasswordStrength(password, value);
    };

    const checkPasswordStrength = (password, username) => {
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (strongPasswordRegex.test(password)) {
            if (isPasswordSimilarToUsername(password, username)) {
                setPasswordStrength('weak');
            } else {
                setPasswordStrength('strong');
            }
        } else if (password.length >= 8) {
            setPasswordStrength('weak');
        } else {
            setPasswordStrength('not valid');
        }
    };

    const isPasswordSimilarToUsername = (password, username) => {
        if (!username) return false;
        const usernameLower = username.toLowerCase();
        const passwordLower = password.toLowerCase();
        return passwordLower.includes(usernameLower) || usernameLower.includes(passwordLower);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                                {/* Email Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><EmailIcon /></span>
                                    <div className="form-floating">
                                        <input type="email" id="email" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>

                                {/* Username Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><PersonIcon /></span>
                                    <div className="form-floating">
                                        <input type="text" id="username" className="form-control" placeholder="Enter your username" required onChange={handleUsernameChange} />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <div className="form-floating">
                                        <input type="password" id="pass" className="form-control" placeholder="Enter your password" required onChange={handlePasswordChange} />
                                        <label>Password</label>
                                    </div>
                                </div>
                                {password && (
                                    <div className={`mt-2 ${passwordStrength === 'strong' ? 'text-success' : 'text-danger'}`}>
                                        Password is {passwordStrength}
                                    </div>
                                )}

                                {/* Confirm Password Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <div className="form-floating">
                                        <input type="password" id="confirmPass" className="form-control" placeholder="Re-enter your password" required onChange={handleConfirmPasswordChange} />
                                        <label>Confirm Password</label>
                                    </div>
                                </div>

                                {/* Mobile Number Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><PhoneIcon /></span>
                                    <div className="form-floating">
                                        <input type="text" id="mobileNumber" className="form-control" placeholder="Enter your phone number" required onChange={handleMobileNumberChange} value={mobileNumber} />
                                        <label>Phone</label>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark btn-lg">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpComponent;
