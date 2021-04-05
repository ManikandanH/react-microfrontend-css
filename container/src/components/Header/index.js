import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = props => {
    return (
        <div className="header">
            <div className="app-nav">
                <Link to="/" href="/">
                    App
                </Link>
            </div>
            <div className="login-nav">
                <button>
                    <Link to="/auth/login" href="/auth/login">
                        Login
                    </Link>
                </button>
            </div>
        </div>
    )
}