import React, { useState } from "react";
import Logo from "../assets/logo.svg"
import { Link } from "@inertiajs/react";
import "./ComponentsCss/Header.css"



function Header() {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    const closeDropdown = () => setShow(false);

    return (
        <nav className="Header">
            <div className="HeaderTop">
            <Link href="/" className="Logo"><img  src={Logo}></img></Link>
            <div className="HeaderWrapper">
            <h2><a href="https://www.instagram.com/akcent.market"><img src="storage/email2.png"/> Akcent.market</a></h2>
            <h2><a href="mailto:info@akcent.ua"><img src="storage/email.png"/> info@akcent.ua</a></h2>
            </div>
            
            
            </div>
            <div className="HeaderBottom">
                <Link href="/blog" className="MenuLink">Блог</Link>
                <Link href="/about" className="MenuLink">Про нас</Link>
                <Link href="catalog" className="MenuLink">Каталог</Link>
            </div>
        </nav>
    )
}

export default Header;