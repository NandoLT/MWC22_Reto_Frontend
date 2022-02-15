import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import logomwc from '../../../assets/images/logo-mwc.png'
import AuthButton from '../../auth/AuthButton';
import storage from '../../../utils/storage'

import '../../../assets/css/header.css';

const Header = ({ className, accesGranted }) => {

    const onLogout = () => {
        console.log('LOGOUT');
        storage.remove('personalInfo');
        window.location.reload();
    }

    return (
        <header className={classNames('header', className)}>
        <Link to="/">
            <div className="header-logo">
                <img src={logomwc} alt="logo mwc22"/>
            </div>
        </Link>
            <nav className="header-nav">
            <AuthButton
                className="header-button"
                isLogged={accesGranted}
                onLogout={onLogout}
            />
            </nav>
        </header>
    );
};

export default Header;