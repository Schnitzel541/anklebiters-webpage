import React from "react";

export default function Header() {
    return (
        <header>
                <ul className="header-ul" style={{margin: '0'}}>
                    <img className="header-logo" src="/hondje_blauw.png" alt="Band Logo" style={{maxWidth: '40px', padding: '10px'}}/>
                    <li className="header-list-item" key="home">Home</li>
                    <li className="header-list-item" key="over">Over</li>
                    <li className="header-list-item" key="merch">Merch</li>
                    <li className="header-list-item" key="shows">Shows</li>
                </ul>
        </header>
    );
};