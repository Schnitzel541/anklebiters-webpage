import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
                <ul className="header-ul" style={{margin: '0'}}>
                    <img className="header-logo" src="/hondje_blauw.png" alt="Band Logo" style={{maxWidth: '40px', padding: '10px'}}/>
                    <li className="header-list-item" key="home"><Link href="/">Home</Link></li>
                    <li className="header-list-item" key="over"><Link href="/over">Over</Link></li>
                    <li className="header-list-item" key="merch"><Link href="/merch">Merch</Link></li>
                    <li className="header-list-item" key="shows"><Link href="/shows">Shows</Link></li>
                </ul>
        </header>
    );
};