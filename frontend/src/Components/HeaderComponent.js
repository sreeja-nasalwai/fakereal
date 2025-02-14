import { Link } from 'react-router-dom';
function HeaderComponent() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CareerShield</a>
                <div className="d-flex">
                <Link to="/sign" className="btn btn-color text-dark me-2">SignUp</Link>
                <Link to="/login" className="btn btn-color text-dark me-2">Login</Link>
                <Link to="/job" className="btn btn-color text-dark me-2">Form</Link>
                <Link to="/display" className="btn btn-color text-dark me-2">jobs</Link>
                <Link to="/about" className="btn btn-color text-dark me-2">About Us</Link>
                    
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
