import { useState } from 'react';
function Navbar({ onSearchChange }) {
    const [search, setSearch] = useState('');
    const [timerId, setTimer] = useState(null);

    const getSearch = (e) => {
        setSearch(e.target.value);
        clearTimeout(timerId);
        setTimer(setTimeout(() => {
            onSearchChange(e.target.value);
        }, 500));
    };

    const reset = () => {
        setSearch('');
        onSearchChange('');
    }
    
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <h1 className="navbar-brand">Movies</h1>
            <div className="d-flex">
                <input value={ search } onChange={ getSearch } className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="reset" onClick={ reset }>Reset</button>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
