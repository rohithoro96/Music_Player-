import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    const buttonHandler = () => {

        setLibraryStatus(!libraryStatus)

    }
    return (
        <div className="navbar" >
            <h1>Waves</h1>
            <button onClick={buttonHandler}><p>Library</p><FontAwesomeIcon icon={faMusic} size="2x" className='btn-logo' /></button>
        </div >
    )
}

export default Nav;