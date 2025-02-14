import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import MUI Icons
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve user details from localStorage
        const storedUserDetails = localStorage.getItem('userDetails');
        if (!storedUserDetails) {
            toast.error('No user found. Please sign up first.');
            return;
        }

        const parsedUserDetails = JSON.parse(storedUserDetails);

        // Check if username and password match
        if (username === parsedUserDetails.username && password === parsedUserDetails.password) {
            toast.success('Login successful!');
            navigate('/dashboard'); // Redirect to dashboard or home page
        } else {
            toast.error('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Login</h1>
                            <form onSubmit={handleLogin}>
                                {/* Username Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><PersonIcon /></span>
                                    <div className="form-floating">
                                        <input type="text" id="username" className="form-control" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)} />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><LockIcon /></span>
                                    <div className="form-floating">
                                        <input type="password" id="password" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark btn-lg">Login</button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
