import logo from './logo.svg'
import '../App.css'
import {Link} from 'react-router-dom'

const Topbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top">
            <div className="container-fluid">
                    
                <Link className="navbar-brand " to="/">
                    <img src={logo} alt="logo" width="50" height="50" />
                </Link>

                <button className="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/Contact">Contact</Link>
                    </li>
                </ul>
                <label className='darkMode--switch' >
                    <input type="checkbox" onClick={props.mode}/>
                    <span className='switch'></span>
                </label>
                <form className="d-flex">
                    <input className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success rounded-0" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;