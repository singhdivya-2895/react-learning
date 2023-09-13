import { Outlet, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/todos">ToDos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/table">Table</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/state">State</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/example">NewWork</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}
